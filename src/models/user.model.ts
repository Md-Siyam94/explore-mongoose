import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/userInterface";


 const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        validate: {
            validator: function(email){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            },
            message: function(props){
                return `${props?.value} is not a valid email`
            }
        },
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    
 });

export const User = model('User', userSchema)