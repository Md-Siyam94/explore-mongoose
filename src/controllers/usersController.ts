import express, { Request, Response } from 'express';
import { User } from '../models/user.model';
import z from 'zod';
import bcrypt from "bcryptjs";
const userRouter = express.Router();
// const userZodSchema = z.object(
//     {
//         firstName: z.string(),
//         lastName: z.string(),
//         email: z.string(),
//         password: z.string(),
//         address: {
//             country: z.string(),
//             city: z.string(),
//             zipCode: z.number()
//         },
//         // witch is not requeird should decleired as optional
//         role: z.enum(["user", "admin"]).default("user"),
//     }
// )

userRouter.get('/', async (req: Request, res: Response) => {
    const users = await User.find();
    return res.status(200).json({
        message: "User route",
        users
    });
});

userRouter.post('/create-user', async (req: Request, res: Response) => {
    // const user = new User(req.body);
    try {
        // const body = await userZodSchema.parseAsync(req.body);
        const body = new User(req.body)
       
    const filter = { email: body.email }
        const existingUser = await User.findOne(filter)
        if (existingUser) {
            return res.json({ insertedId: null, message: "User already exist! please login." })
        }   
       const user = new User(body);
        const password = await user.hashPassword(body.password)
        user.password = password
        await user.save();
        console.log(user.password);
        return res.status(201).json({
            message: "User created successfully",
            success: true,
            data: user
        });
    } catch(error: any) {
        console.log(error);
        res.status(200).json({
            message: "User has not created",
            success: false,
            
            error
        });
    }

});

userRouter.get('/:email', async (req: Request, res: Response) => {
    const email = req.params.email;
    const filter = { email: email };
    const user = await User.findOne({ filter })
    console.log(user);
})



export default userRouter;