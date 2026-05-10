import { Router } from "express";
import Course from "../models/Course.js";

const router = Router();

// GET /api/courses — fetch all active courses
router.get("/", async (_req, res) => {
  try {
    const courses = await Course.find({ isActive: true }).sort({ createdAt: 1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

// POST /api/courses/seed — seed initial courses (run once)
router.post("/seed", async (_req, res) => {
  try {
    const count = await Course.countDocuments();
    if (count > 0) {
      return res.json({ message: "Courses already seeded", count });
    }

    const courses = [
      {
        icon: "⟨/⟩",
        title: "Full-Stack Web Development",
        duration: "6 Months",
        tech: ["React", "Node.js", "MongoDB", "TypeScript"],
        description:
          "Build production-grade applications from day one. Master the modern MERN stack with real client projects.",
        span: "lg:col-span-2",
      },
      {
        icon: "📱",
        title: "Android Development",
        duration: "5 Months",
        tech: ["Kotlin", "Jetpack Compose", "Firebase"],
        description:
          "Create beautiful, performant Android apps using modern Kotlin and Jetpack Compose.",
        span: "",
      },
      {
        icon: "🛡",
        title: "Cyber Security",
        duration: "6 Months",
        tech: ["Ethical Hacking", "Pentesting", "SIEM"],
        description:
          "Think like an attacker, defend like a pro. Industry-recognized certifications included.",
        span: "",
      },
      {
        icon: "⚡",
        title: "AI & Machine Learning",
        duration: "6 Months",
        tech: ["Python", "TensorFlow", "NLP", "CV"],
        description:
          "From neural networks to production ML pipelines. Build AI systems that solve real problems.",
        span: "lg:col-span-2",
      },
      {
        icon: "☁",
        title: "Cloud & DevOps",
        duration: "4 Months",
        tech: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        description:
          "Master cloud infrastructure, containerization, and automated deployment pipelines.",
        span: "",
      },
      {
        icon: "◈",
        title: "Data Science",
        duration: "5 Months",
        tech: ["Python", "SQL", "Tableau", "Statistics"],
        description:
          "Turn raw data into actionable insights. Learn the complete data science workflow.",
        span: "",
      },
    ];

    const inserted = await Course.insertMany(courses);
    res.json({ message: "Courses seeded successfully", count: inserted.length });
  } catch (err) {
    res.status(500).json({ error: "Failed to seed courses", details: err.message });
  }
});

export default router;
