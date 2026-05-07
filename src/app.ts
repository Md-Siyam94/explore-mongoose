import express, { Application, Request, Response } from 'express';
import { model } from 'mongoose';
import { Schema } from 'mongoose';


const app: Application = express();


const noteSchema = new Schema({
    title: String,
    content: String
})

const Note = model('Note', noteSchema);


app.post('/create-notes', async (req: Request, res: Response) => {
    const newNote = new Note({
        title: "First Note",
        content: "This is the content of the first note"
    })
    await newNote.save();
    res.status(201).json({
        status: true,
        message: "Note created successfully",
        data: newNote
    });

});

app.get('/', (req: Request, res: Response) => {
    res.json("Welcome to Explore Mongoose");
});



export default app;