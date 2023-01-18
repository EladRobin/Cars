import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: String,
        lastName: String
    },
    email: String,
    password: String,
    dateCreated: {
        type: Date,
        default: (Date.now() + 2 * 60 * 60 * 1000)
    },
    role: {
        type: String,
        default: 'user'
    },
    myCars: [mongoose.Types.ObjectId]
})

export const UserModel = mongoose.model("users", userSchema)