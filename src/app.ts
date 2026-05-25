import express, { Application, Request, Response } from 'express';
import mongoose, { model } from 'mongoose';
import { Schema } from 'mongoose';


const app: Application = express();




app.get('/', (req: Request, res: Response) => {
    res.json("Welcome to Explore Mongoose");
});



export default app;