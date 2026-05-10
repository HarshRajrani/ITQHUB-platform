// ─────────────────────────────────────────────────────────
//  ITQHUB — Express Server
//  Production-grade entry point with MongoDB Atlas connection
// ─────────────────────────────────────────────────────────

import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import courseRoutes from "./routes/courses.js";
import leadRoutes from "./routes/leads.js";
import chatRoutes from "./routes/chat.js";
import Course from "./models/Course.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));


// ── MongoDB Connection ───────────────────────────────────
let dbConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes("<username>") || uri.includes("<password>")) {
    console.warn("⚠️   MONGODB_URI not configured — running without database.");
    console.warn("     Copy server/.env.example → server/.env and add your Atlas URI.");
    return;
  }

  try {
    const conn = await mongoose.connect(uri, { dbName: "itqhub" });
    dbConnected = true;
    console.log(`✅  MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌  MongoDB connection failed:", err.message);
    console.warn("⚠️   Server will continue without database.");
  }
};

// ── Update health check with DB status ───────────────────
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    database: dbConnected ? "connected" : "disconnected",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// ── API Routes ───────────────────────────────────────────
app.use("/api/courses", courseRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/chat", chatRoutes);

// ── Auto-seed courses if DB is empty ─────────────────────
const autoSeed = async () => {
  try {
    const count = await Course.countDocuments();
    if (count === 0) {
      console.log("📦  Seeding courses...");
      const res = await fetch(`http://localhost:${PORT}/api/courses/seed`, { method: "POST" });
      const data = await res.json();
      console.log(`✅  ${data.message}`);
    }
  } catch { /* silent — seed via API manually if needed */ }
};

// ── Start Server ─────────────────────────────────────────
const start = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀  ITQHUB server running → http://localhost:${PORT}`);
    if (dbConnected) autoSeed();
  });
};

start();

export default app;
