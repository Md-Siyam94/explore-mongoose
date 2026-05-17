import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String,
        enum: ['Personal', 'Work', 'Other', 'mongodb'],
       default: 'Personal'
    },

},
    { timestamps: true })

const Note = mongoose.model('Note', noteSchema);

export default Note;