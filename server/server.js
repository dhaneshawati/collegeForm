const express = require("express");
require("dotenv").config(); ///* Required when we use .env file for securing URI and passwords */
const app = express();
const PORT = 5000;
const router = require("./router/auth-router"); // required for creating routes
const connectDB = require("./service/db");
const cors = require("cors");

app.use(express.json()); // MIDDLEWARE for req.body JSON File
app.use("/api/auth", router); // required for creating routes through router
app.use(
  cors({
    // VVIMP -> to remove CORS error and allow diff origins.
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
  });
});
