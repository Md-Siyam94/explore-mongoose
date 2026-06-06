import express, { Application, Request, Response } from 'express';
import mongoose, { model } from 'mongoose';
import { Schema } from 'mongoose';
import userRouter from './controllers/usersController';
import noteRouter from './controllers/notesController';


const app: Application = express();


app.use(express.json())
// app.use(cors())

// routes
app.use("/users", userRouter)
app.use("/notes", noteRouter)

app.get('/', (req: Request, res: Response) => {
    res.json("Welcome to Explore Mongoose");
});



export default app;