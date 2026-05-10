import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[6-9]\d{9}$/, "Please provide a valid 10-digit Indian phone number"],
    },
    course: {
      type: String,
      default: "General Enquiry",
    },
    source: {
      type: String,
      default: "website",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "converted", "closed"],
      default: "new",
    },
    message: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Compound index to prevent duplicate leads per email+phone
leadSchema.index({ email: 1, phone: 1 }, { unique: true });

export default mongoose.model("Lead", leadSchema);
