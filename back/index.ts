import express, { Express, Request, Response } from "express";
import apiRouter from "./src/routers/apiRouter"
import connectToMongo from './src/db/connetctToDb'


const app: Express = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});

connectToMongo()

app.use("/api",apiRouter)
