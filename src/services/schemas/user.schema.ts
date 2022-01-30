import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please inform your name"],
  },
  email: { type: String, required: [true, "Please inform your email"] },
  password: { type: String, required: [true, "Please inform youer email"] },
});

export default mongoose.models.userSchema || mongoose.model("User", userSchema);
