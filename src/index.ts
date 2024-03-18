import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// Add built in middleware to deconstruct url parameters content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Middleware to use json body data

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// Allow cros origin resource sharing
const whitelist = ['http://localhost:5173']
const corsOptions = {
  origin: (origin: string, callback: any) => {
    whitelist.indexOf(origin) !== -1 ? callback(null, true) : callback(new Error('not allowed by cors'));
  },
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});