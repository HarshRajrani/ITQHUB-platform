import express from "express";
import rateLimit from "express-rate-limit";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

// ── Rate Limiting ──────────────────────────────────────────
// Prevent abuse: max 20 requests per 15 minutes per IP
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: "Too many requests. Please try again later." },
});

// ── AI Configuration ────────────────────────────────────────
const SYSTEM_PROMPT = `
You are the ITQHUB Career Mentor. You are professional, motivating, and an expert in the tech education industry. 
Your primary goal is to help students understand why ITQHUB is the best choice for software training in Hyderabad and guide them towards the right courses.

Knowledge Base:
- ITQHUB offers 100% placement support.
- The highest salary package achieved by our students is 12 LPA.
- We offer industry-relevant courses including: Full Stack Java, MERN Stack, AI & Machine Learning, Cyber Security, Cloud & DevOps, and Data Science.
- Our programs are project-based with skill-first learning, highly affordable, and continuously updated with industry trends.

Tone and Guidelines:
- Keep responses concise, friendly, and structured (use bullet points if listing things).
- Do not make up information that is not in your knowledge base. If you don't know, suggest they contact us directly or check the programs page.
- Always be encouraging and highlight how ITQHUB helps them achieve their career goals.
`;

// ── Fallback model list — tries each until one works ────────
const MODEL_CANDIDATES = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
];

// ── Smart mock responses when API is down ───────────────────
const MOCK_RESPONSES = {
  "cyber security": "🛡️ Great choice! Our **Cyber Security** program is a 6-month intensive course covering Ethical Hacking, Penetration Testing, and SIEM tools. With 100% placement support and industry-recognized certifications, you'll be job-ready from day one!",
  "full stack": "💻 Our **Full Stack Development** programs (Java & MERN Stack) are our most popular! You'll build production-grade apps from scratch in 6 months with mentor-led, project-based learning.",
  "ai": "🤖 Our **AI & Machine Learning** program covers Python, TensorFlow, NLP, and Computer Vision over 6 months. You'll build real AI systems and be prepared for one of the highest-paying domains in tech!",
  "placement": "🎯 ITQHUB provides **100% placement support**! This includes resume building, portfolio review, mock interviews with industry experts, and direct referrals. Our highest package is **12 LPA**!",
  "package": "💰 Our students have achieved packages up to **12 LPA**! With our industry-relevant curriculum and dedicated placement cell, we ensure you're career-ready.",
  "salary": "💰 Our students have achieved packages up to **12 LPA**! With our industry-relevant curriculum and dedicated placement cell, we ensure you're career-ready.",
  "course": "📚 We offer these programs:\n• Full Stack Java Development\n• MERN Stack Development\n• AI & Machine Learning\n• Cyber Security\n• Cloud & DevOps\n• Data Science\n\nEach program includes project-based learning, mentor support, and 100% placement assistance!",
  "cloud": "☁️ Our **Cloud & DevOps** program covers AWS, Docker, Kubernetes, and CI/CD pipelines in 4 months. Perfect for engineers looking to master modern infrastructure!",
  "data science": "📊 Our **Data Science** program covers Python, SQL, Tableau, and Statistics over 5 months. Learn the complete data science workflow from raw data to actionable insights!",
};

function getMockReply(message) {
  const lower = message.toLowerCase();
  for (const [keyword, response] of Object.entries(MOCK_RESPONSES)) {
    if (lower.includes(keyword)) return response;
  }
  return "👋 Thanks for reaching out! I'm the ITQHUB Career Mentor. I can help you with information about our courses (Full Stack, AI, Cyber Security, Cloud & DevOps, Data Science), placements (100% support, up to 12 LPA), and more. What would you like to know?";
}

// ── Try calling Gemini with model fallback ──────────────────
async function callGemini(apiKey, messages) {
  const genAI = new GoogleGenerativeAI(apiKey);

  // Build valid history (must start with 'user')
  const rawHistory = messages.slice(0, -1);
  const validHistory = [];
  for (const msg of rawHistory) {
    if (validHistory.length === 0 && msg.role === "assistant") continue;
    validHistory.push({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    });
  }

  let latestMessage = messages[messages.length - 1].content;
  if (validHistory.length === 0) {
    latestMessage = `SYSTEM INSTRUCTION: ${SYSTEM_PROMPT}\n\nUSER MESSAGE: ${latestMessage}`;
  }

  // Try each model candidate until one works
  let lastError = null;
  for (const modelName of MODEL_CANDIDATES) {
    try {
      console.log(`🤖 Trying model: ${modelName}`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const chat = model.startChat({ history: validHistory });
      const result = await chat.sendMessage(latestMessage);
      console.log(`✅ Success with model: ${modelName}`);
      return result.response.text();
    } catch (err) {
      console.warn(`⚠️ Model "${modelName}" failed: ${err.message?.substring(0, 100)}`);
      lastError = err;

      // If it's a rate limit error (429), don't try other models — they share quota
      if (err.status === 429) {
        throw err;
      }
      // Otherwise try the next model
    }
  }
  throw lastError;
}

// ── Route: POST /api/chat ───────────────────────────────────
router.post("/", chatLimiter, async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If no API key, use mock mode
    if (!apiKey) {
      console.warn("⚠️ GEMINI_API_KEY missing. Using Smart Mock Mode.");
      await new Promise(resolve => setTimeout(resolve, 800));
      const mockReply = getMockReply(messages[messages.length - 1].content);
      return res.json({ reply: mockReply });
    }

    // Try Gemini API — if it fails with 429, fall back to mock
    try {
      const responseText = await callGemini(apiKey, messages);
      return res.json({ reply: responseText });
    } catch (apiError) {
      // If rate limited (429), fall back to smart mock instead of showing error
      if (apiError.status === 429) {
        console.warn("⚠️ Gemini quota exceeded. Falling back to Smart Mock Mode.");
        const mockReply = getMockReply(messages[messages.length - 1].content);
        return res.json({ reply: mockReply });
      }
      throw apiError;
    }
  } catch (error) {
    console.error("Chat API Error:", error.message);
    res.status(500).json({ error: error.message || "Failed to generate response." });
  }
});

export default router;
