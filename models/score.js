import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
    score: Number
})

const Score = mongoose.model('Score', dataSchema)

export default Score