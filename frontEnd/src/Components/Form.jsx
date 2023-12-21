import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/api";

function Form() {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [sscMarks, setSscMarks] = useState(0);
  const [hscMarks, setHscMarks] = useState(0);
  const [studentAddress, setStudentAddress] = useState("");

  const handleSubmit = async () => {
    console.log(studentName, studentNumber, sscMarks, hscMarks, studentAddress);
    try {
      let validNameFlag = studentName.match("^[a-zA-Z]+$");
      if (
        studentName !== "" &&
        validNameFlag &&
        studentNumber !== "" &&
        studentNumber.length === 10 &&
        studentNumber.charAt(0) !== "0" &&
        studentNumber.charAt(0) !== "-" &&
        sscMarks !== 0 &&
        sscMarks > 0 &&
        sscMarks <= 100 &&
        hscMarks !== 0 &&
        hscMarks > 0 &&
        hscMarks <= 100 &&
        studentAddress !== ""
      ) {
        await createStudent(
          studentName,
          studentNumber,
          sscMarks,
          hscMarks,
          studentAddress
        );
        setStudentName("");
        setStudentNumber(0);
        setSscMarks(0);
        setHscMarks(0);
        setStudentAddress("");
        navigate("/viewData");
      } else if (studentName === "") {
        alert("student name can not be empty!");
      } else if (!validNameFlag) {
        alert("student name can not contain numbers!");
      } else if (studentNumber === "") {
        alert("student mobile number can not be empty!");
      } else if (studentNumber.length !== 10) {
        alert("Please enter a valid mobile number!");
      } else if (studentNumber.charAt(0) === "0") {
        alert("Mobile number cannot start with 0!");
      } else if (studentNumber.charAt(0) === "-") {
        alert("Mobile number cannot be negative!");
      } else if (sscMarks === 0) {
        alert("student SSC Percentage can not be empty!");
      } else if (sscMarks > 100) {
        alert("student SSC Percentage can not be more than 100!");
      } else if (sscMarks < 0) {
        alert("student SSC Percentage can not be negative!");
      } else if (hscMarks === 0) {
        alert("student HSC Percentage can not be empty!");
      } else if (hscMarks > 100) {
        alert("student HSC Percentage can not be more than 100!");
      } else if (hscMarks < 0) {
        alert("student HSC Percentage can not be negative!");
      } else {
        alert("student Address can not be empty!");
      }
    } catch (err) {
      console.log("Error adding document: ", err);
    }
  };

  return (
    <div className="RegForm">
      <div className="fields">
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          className="name"
          id="name"
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
      </div>
      <div className="fields">
        <label htmlFor="phone">Phone no : </label>
        <input
          type="number"
          className="phone"
          id="phone"
          onChange={(e) => setStudentNumber(e.target.value)}
          required
        />
      </div>
      <div className="fields">
        <label htmlFor="ssc">SSC Marks in % : </label>
        <input
          type="number"
          className="marks"
          id="ssc"
          onChange={(e) => setSscMarks(e.target.value)}
          max={100}
          required
        />
      </div>
      <div className="fields">
        <label htmlFor="hsc">HSC Marks in % : </label>
        <input
          type="number"
          className="marks"
          id="hsc"
          onChange={(e) => setHscMarks(e.target.value)}
          max={100}
          required
        />
      </div>
      <div className="fields">
        <label htmlFor="address">Address : </label>
        <input
          type="textarea"
          className="address"
          id="address"
          onChange={(e) => setStudentAddress(e.target.value)}
          required
        />
      </div>
      <div className="btn">
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
