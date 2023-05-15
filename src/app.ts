import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { Schema } from "mongoose";

const app: Application = express();
// Using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inseart a test data into mongodb
  /*
  Step1: Interface
  Step2: Schema
  Step3: Model
  Ster4: Database Quary
  */
  // res.send("Hello World!");
  // next();
  // Creating an Interface
  interface IUser {
    id: string;
    role: "Student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // Creating Schema using interface

  const userSchema = new Schema<IUser>({
    id: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });
});

export default app;
