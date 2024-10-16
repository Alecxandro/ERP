import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin", "manager", "employee"], default: "employee"},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export default mongoose.model("User", userSchema);