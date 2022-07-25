import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
    text: String
})

const Model = mongoose.model('Data', dataSchema)

export default Model