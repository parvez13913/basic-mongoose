import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";

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
  Ster4: Database on Model Quary
  */
  res.send("Hello World!");
  next();
  const createUserToDb = async () => {
    const user = new User({
      id: "9009877",
      role: "Student",
      password: "abulbaba",
      name: {
        firstName: "Parvez",
        lastName: "Rahman",
      },
      // dateOfBirth: "1/08/2000",
      gender: "male",
      email: "abd@gmail.com",
      contactNo: "01777788888",
      emergencyContactNo: "0188877656554",
      presentAddress: "UAE",
      permanentAddress: "Dhaka,Bangladesh",
    });
    await user.save();
    console.log(user);
  };
  createUserToDb();
});

export default app;
