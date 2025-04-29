import mongoose from "mongoose"

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    try { mongoose.connect(process.env.MONGODB_URI!) } catch {}
}