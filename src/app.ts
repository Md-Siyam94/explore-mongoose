import express, { Application, Request, Response } from 'express';
import { model } from 'mongoose';
import { Schema } from 'mongoose';


const app: Application = express();


const noteSchema = new Schema({
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

const Note = model('Note', noteSchema);


app.get('/notes', async (req: Request, res: Response) => {

    const note = await Note.find();

    res.status(200).json({
        note
    });

});
app.post('/note/create-notes', async (req: Request, res: Response) => {

    const newNote = req.body; // Assuming the request body contains the note data
    // method 1
    // const newNote = new Note({
    //     title: "First Note",
    //     content: "This is the content of the first note",
    //     category: "Personal"
    // })
    // await newNote.save();

    // method 2
    const note = await Note.create(newNote);

    res.status(201).json({
        status: true,
        message: "Note created successfully",
        data: note
    });

});

app.get('/', (req: Request, res: Response) => {
    res.json("Welcome to Explore Mongoose");
});



export default app;