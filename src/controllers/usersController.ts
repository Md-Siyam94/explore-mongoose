import express, { Request, Response } from 'express';
import { User } from '../models/user.model';
const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    const users = await User.find();
    res.status(200).json({
        message: "User route"
    });
});

userRouter.post('/users', async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({
        message: "User created successfully"
    });
});



export default userRouter;