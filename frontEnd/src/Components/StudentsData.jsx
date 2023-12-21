import React, { useEffect, useState } from "react";
import Student from "./Student";
import "./StudentsData.css";
import { useNavigate } from "react-router-dom";

function StudentsData() {
  const [studentInfo, setStudentInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // ** It is an API for getData from DB and send response of all documents as json
    fetch("/api/auth/studentData")
      .then((res) => res.json())
      .then((studentData) => {
        setStudentInfo([...studentData.data]);
      });
  };
  const handleRegistration = () => {
    navigate("/");
  };
  return (
    <div className="studentsData">
      <div className="container">
        <div className="studentContainer">
          <div className="btn-container">
            <button className="reg_btn" onClick={handleRegistration}>
              Register new Student
            </button>
          </div>
          <div className="header">
            <p className="data-field">Sr No. : </p>
            <p className="data-field">Name : </p>
            <p className="data-field">Phone no : </p>
            <p className="data-field">SSC %: </p>
            <p className="data-field">HSC %: </p>
            <p className="data-field">Address : </p>
          </div>
          {studentInfo.map((student, index) => (
            <Student
              name={student.studentName}
              number={student.studentPhoneNumber}
              ssc={student.sscMarks}
              hsc={student.hscMarks}
              add={student.address}
              serial={index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentsData;
