import mongoose from "mongoose";
import app from "./app";

const port = 5000;

// Database Connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Practice-mongoose");
    console.log("Database Connection Successfull");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log("Fail To connect Database", err);
  }
}

bootstrap();
