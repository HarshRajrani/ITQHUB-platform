import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    icon: { type: String, default: "⟨/⟩" },
    title: { type: String, required: true, unique: true },
    duration: { type: String, required: true },
    level: { type: String, default: "Beginner → Advanced" },
    tech: [{ type: String }],
    description: { type: String, required: true },
    span: { type: String, default: "" }, // Tailwind col-span class for bento layout
    color: { type: String, default: "#38BDF8" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
