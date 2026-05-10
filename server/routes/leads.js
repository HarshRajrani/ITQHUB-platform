import { Router } from "express";
import Lead from "../models/Lead.js";

const router = Router();

// ── Validation helpers ───────────────────────────────
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[6-9]\d{9}$/;

function validateLead({ name, email, phone }) {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push("Name must be at least 2 characters");
  if (!email || !emailRegex.test(email)) errors.push("Please provide a valid email");
  if (!phone || !phoneRegex.test(phone)) errors.push("Please provide a valid 10-digit phone number");
  return errors;
}

// POST /api/leads — create a new lead
router.post("/", async (req, res) => {
  try {
    // FIX: Include 'message' in the destructuring
    const { name, email, phone, course, message } = req.body;

    // Server-side validation
    const errors = validateLead({ name, email, phone });
    if (errors.length > 0) {
      return res.status(400).json({ error: errors[0], errors });
    }

    // Check for existing lead
    const existing = await Lead.findOne({
      $or: [{ email: email.toLowerCase() }, { phone }],
    });

    if (existing) {
      return res.status(409).json({
        error: "You've already submitted an enquiry. Our team will reach out soon!",
      });
    }

    const lead = await Lead.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone,
      course: course || "General Enquiry",
      message: message || "",
    });

    res.status(201).json({
      message: "Enquiry submitted successfully! Our team will contact you within 24 hours.",
      lead: { id: lead._id, name: lead.name },
    });
  } catch (err) {
    console.error("Lead submission error:", err);
    if (err.code === 11000) {
      return res.status(409).json({
        error: "You've already submitted an enquiry. Our team will reach out soon!",
      });
    }
    res.status(500).json({ 
      error: "Server Error: Unable to process enquiry.",
      details: err.message
    });
  }
});

// GET /api/leads — fetch all leads (Admin)
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

// PATCH /api/leads/:id/status — update lead status (Admin)
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!["new", "contacted", "converted", "closed"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const lead = await Lead.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.status(200).json(lead);
  } catch (err) {
    res.status(500).json({ error: "Failed to update lead status" });
  }
});

export default router;
