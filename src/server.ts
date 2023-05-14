const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// Database Connection

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Practice-mongoose");
    console.log("Database Connection Successfull");
  } catch (err) {
    console.log("Fail To connect Database", err);
  }
}

bootstrap();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
