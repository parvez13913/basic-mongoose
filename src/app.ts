import cors from "cors";
import express, { Application } from "express";
import userRoute from "./app/modules/user/user.route";

const app: Application = express();
// Using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoute);

// inseart a test data into mongodb
/*
  Step1: Interface
  Step2: Schema
  Step3: Model
  Ster4: Database on Model Quary
  */

export default app;
