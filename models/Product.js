import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    sku: { type: String, required: true},
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date }
});

export default mongoose.model('Product', productSchema);