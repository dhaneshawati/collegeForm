const Student = require("../models/user_model");

//////////////*  HOME Logic   *///

const { json } = require("express");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to home by using router and controller");
  } catch (error) {
    console.log(error);
  }
};

//* REGISTRATION Logic */

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { studentName, studentPhoneNumber, sscMarks, hscMarks, address } =
      req.body;
    console.log(studentName, studentPhoneNumber, sscMarks, hscMarks, address);
    // Server side validations
    if (
      studentName !== undefined &&
      studentPhoneNumber !== undefined &&
      sscMarks !== undefined &&
      hscMarks !== undefined &&
      address !== undefined
    ) {
      const userExist = await Student.findOne({ studentPhoneNumber }); // VIMP Finding, creating document are async event
      if (userExist) {
        return res.status(400).json({ message: "Student already registered!" });
      }
      // creating Student in DB
      await Student.create({
        studentName,
        studentPhoneNumber,
        sscMarks,
        hscMarks,
        address,
      });
      res.status(200).json({
        studentName,
        studentPhoneNumber,
        sscMarks,
        hscMarks,
        address,
      });
    } else if (studentName === undefined) {
      return res.status(400).json({
        message: "Student name is not present in the body!",
      });
    } else if (studentPhoneNumber === undefined) {
      return res.status(400).json({
        message: "Student phone number is not present in the body!",
      });
    } else if (sscMarks === undefined) {
      return res.status(400).json({
        message: "Student SSC % is not present in the body!",
      });
    } else if (hscMarks === undefined) {
      return res.status(400).json({
        message: "Student HSC % is not present in the body!",
      });
    } else if (address === undefined) {
      return res.status(400).json({
        message: "Student address is not present in the body!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// ** Get Data Logic  **  //

const getData = async (req, res) => {
  try {
    const studentData = await Student.find({});
    res.status(200).json({
      data: studentData,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, register, getData };
