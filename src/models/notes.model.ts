import mongoose, { Schema } from "mongoose";
import { INote } from "../interfaces/noteInterface";

const noteSchema = new Schema<INote>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: ['Personal', 'Work', 'Other', 'mongodb'],
       default: 'Personal'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

},
    { timestamps: true })

const Note = mongoose.model('Note', noteSchema);

export default Note;