import { Model, model, Schema } from "mongoose";
import { IUser,  UserInstaceMethod } from "../interfaces/userInterface";
import  validator  from "validator";
import bcrypt from "bcryptjs"
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

const userSchema = new Schema<IUser, Model<IUser>, UserInstaceMethod>({
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
userSchema.method("hashPassword", async function(plainPassword: string){
const password = await bcrypt.hash(plainPassword, 10)
       return password
})

export const User = model('User', userSchema)