import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/userInterface";
import  validator  from "validator";

const addressSchema = new Schema({
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
},{
    _id: false
});

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
        // manual validator
        // validate: {
        //     validator: function(email){
        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        //     },
        //     message: function(props){
        //         return `${props?.value} is not a valid email`
        //     }
        // },
        validate: [validator.isEmail, "Email is invalid {VALUE}" ],
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: addressSchema,
        required: true
    }
        
    
});

export const User = model('User', userSchema)