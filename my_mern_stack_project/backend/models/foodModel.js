import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },  // Image should probably be a string (URL or path)
    category: { type: String, required: true },  // Category should likely be a string or an ObjectId
});

// Check if the model already exists to avoid recompilation of the model on hot reloads
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
