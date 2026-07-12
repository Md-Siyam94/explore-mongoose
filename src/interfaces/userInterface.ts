import { Model } from "mongoose"

export interface IAddress {
    country: string,
    city: string,
    zipCode: number
}

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: "user"| "admin",
    address: IAddress
}

export interface UserInstaceMethod{
    hashPassword(password: string): string
}

export interface UserStaticMethod extends Model<IUser>{
    hashPassword(password: string): string
}