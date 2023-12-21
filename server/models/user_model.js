//**  For creating schema of a DB */

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentPhoneNumber: {
    type: Number,
    required: true,
  },
  sscMarks: {
    type: Number,
    required: true,
  },
  hscMarks: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Defining collection name

const Student = new mongoose.model("Student", userSchema);

module.exports = Student;
