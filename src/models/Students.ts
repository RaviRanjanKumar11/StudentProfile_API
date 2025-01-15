import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  age: { type: Number, required: true },
  imageUrl: { type: String }, // Add image URL field
});

export default mongoose.models.Student || mongoose.model("Student", StudentSchema);
