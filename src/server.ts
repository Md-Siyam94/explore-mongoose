import {Server} from 'http';
import express, {Application} from 'express';
import app from './app';
let server: Server;
const port = 5000;



async function main() {
    try{
        
             server = app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }catch(error){
        console.error(error);
    }
}

main()