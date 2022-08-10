import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    scores: [
      {
        name: {
          type: String,
          required: true
        }, 
        score: {
          type: Number,
          required: true
        },
    }],
    title: {
        type: String,
        unique: true,
        required: true,
    }
})

const Sample = mongoose.model('Sample1', dataSchema)

export default Sample