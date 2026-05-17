import express, { Application, Request, Response } from 'express';
import mongoose, { model } from 'mongoose';
import { Schema } from 'mongoose';


const app: Application = express();


app.use(express.json());

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


app.get('/notes', async (req: Request, res: Response) => {

    const note = await Note.find();

    res.status(200).json({
        note
    });

});

// get single note
app.get('/note/:id', async (req: Request, res: Response) => {

    const id = req.params.id;
    const query = { _id: id };
    const note = await Note.findOne(query);

    res.status(200).json({
        note
    });
})

// delete single note
app.delete('/note/:id', async (req: Request, res: Response) => {

    const id = req.params.id;
    const query = { _id: id };
    const note = await Note.findByIdAndDelete(query);

    res.status(200).json({
        success: true,
        message: "Note deleted successfully",
        note
    });
})

app.patch('/note/update-note/:id', async (req: Request, res: Response) => {

    const id = req.params.id;
    const query = { _id: id };
    const updateData = req.body;

    const note = await Note.findOneAndUpdate(query, updateData, { new: true });

    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        note
    });
});

app.post('/note/create-notes', async (req: Request, res: Response) => {

    const newNote = req.body; // Assuming the request body contains the note data
    console.log(newNote)
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
         note
    });

});

app.get('/', (req: Request, res: Response) => {
    res.json("Welcome to Explore Mongoose");
});



export default app;