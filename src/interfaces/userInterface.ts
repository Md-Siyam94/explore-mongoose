export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: "user"| "admin",
    address: {
        country: string,
        city: string,
        zipCode: number,
    }
}