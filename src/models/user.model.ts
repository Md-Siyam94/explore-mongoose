import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/userInterface";


 const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipCode: {
            type: Number,
            required: true
        }
    }
});

export const User = model('User', userSchema)