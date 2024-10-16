import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    address: { type: String, required: true} ,
    department: {type: String, required: true} ,
    position: {type: String, required: true	} ,
    hireDate: Date,
    createdAt: { type: Date, default: Date.now() },
    createdAt: { type: Date, default: Date.now() }
})

export default mongoose.model('Profile', profileSchema)


