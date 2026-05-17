

import express,{ Request, Response } from 'express';

import Note  from '../models/notes.model';

 const noteRouter = express.Router();


noteRouter.get('/', async (req: Request, res: Response) => {

    const note = await Note.find();

    res.status(200).json({
        note
    });

});

// get single note
noteRouter.get('/:id', async (req: Request, res: Response) => {

    const id = req.params.id;
    const query = { _id: id };
    const note = await Note.findOne(query);

    res.status(200).json({
        note
    });
})

// delete single note
noteRouter.delete('/:id', async (req: Request, res: Response) => {

    const id = req.params.id;
    const query = { _id: id };
    const note = await Note.findByIdAndDelete(query);

    res.status(200).json({
        success: true,
        message: "Note deleted successfully",
        note
    });
})

noteRouter.patch('/update-note/:id', async (req: Request, res: Response) => {

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

noteRouter.post('/create-notes', async (req: Request, res: Response) => {

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

export default noteRouter;