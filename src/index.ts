import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const fs = require('fs');
var path = require('path');

// Add built in middleware to deconstruct url parameters content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Middleware to use json body data

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});