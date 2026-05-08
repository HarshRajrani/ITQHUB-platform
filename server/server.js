// ─────────────────────────────────────────────────────────
//  ITQHUB — Express Server
//  Production-grade entry point with MongoDB Atlas connection
// ─────────────────────────────────────────────────────────

import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ── Health Check ─────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// ── MongoDB Connection ───────────────────────────────────
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "itqhub",
    });
    console.log(`✅  MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌  MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

// ── Start Server ─────────────────────────────────────────
const start = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀  ITQHUB server running → http://localhost:${PORT}`);
  });
};

start();

export default app;
