import express, { Application, Request, Response } from 'express';
 
 
 
 const app: Application = express();


 app.get('/', (req: Request, res: Response) => {
     res.json("Welcome to Explore Mongoose");
 });

 

 export default app;