import express, { Request, Response } from 'express';
import { User } from '../models/user.model';
const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    const users = await User.find();
    return res.status(200).json({
        message: "User route"
    });
});

userRouter.post('/create-user', async (req: Request, res: Response) => {
    const user = new User(req.body);
    const filter = {email: user?.email}
   const existingUser = await User.findOne(filter)
   if(existingUser){
    return res.json({insertedId: null, message: "User already exist! please login."})
   }
    await user.save();
   return res.status(201).json({
        message: "User created successfully"
    });
});

userRouter.get('/:email', async(req: Request, res: Response)=>{
    const email = req.params.email;
    const filter = {email: email};
    const user = await User.findOne({filter})
    console.log(user);
})



export default userRouter;