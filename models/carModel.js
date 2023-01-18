import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    company: String,
    model: String,
    year: String,
    img: String,
    price: Number,
    description: String,
    userCreated: mongoose.Types.ObjectId,
    videoLink: String,
    dateCreated: {
        type: Date,
        default: (Date.now() + 2 * 60 * 60 * 1000)
    }
})

export const CarModel = mongoose.model("cars", carSchema)