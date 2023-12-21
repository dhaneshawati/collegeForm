import React, { useEffect, useState } from "react";
import Student from "./Student";
import "./StudentsData.css";
import { useNavigate } from "react-router-dom";
import { getData } from "../services/api";

function StudentsData() {
  const [studentInfo, setStudentInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const dataResponse = await getData();
    setStudentInfo([...dataResponse]);
  };
  const handleRegistration = () => {
    navigate("/registration");
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
