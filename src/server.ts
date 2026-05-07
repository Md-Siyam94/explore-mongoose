import { Server } from 'http';
import express, { Application } from 'express';
import app from './app';
import mongoose, { mongo } from 'mongoose';
let server: Server;
const port = 5000;
import dns from 'dns';
dns.setServers(["1.1.1.1", "8.8.8.8"])

// todoApp
// FYfda7i8z4iyp5Of

async function main() {
    try {
        await mongoose.connect('mongodb+srv://todoApp:FYfda7i8z4iyp5Of@cluster0.ttcu5.mongodb.net/todoApp?appName=Cluster0')
        console.log("mongodb connected")
        server = app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
}

main()