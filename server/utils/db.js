const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

mongoose.connect(URI);

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection to DB is Successful!");
  } catch (error) {
    console.log("Database connection failed");
    process.exit(0);
  }
};
module.exports = connectDB;
