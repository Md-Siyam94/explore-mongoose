import mongoose from "mongoose";

export interface INote {
    title: string,
    content: string,
    category: "Personal" | "Work" | "Other" | "mongodb",
    user:  mongoose.Schema.Types.ObjectId,
}