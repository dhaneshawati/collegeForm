import React from "react";
import "./Student.css";

function Student({ serial, name, number, ssc, hsc, add }) {
  return (
    <div className="student">
      <div className="data">
        <p className="data-content">{serial}</p>
      </div>
      <div className="data">
        <p className="data-content">{name}</p>
      </div>
      <div className="data">
        <p className="data-content">{number}</p>
      </div>
      <div className="data">
        <p className="data-content">{ssc}</p>
      </div>
      <div className="data">
        <p className="data-content">{hsc}</p>
      </div>
      <div className="data address">
        <p className="data-content">{add}</p>
      </div>
    </div>
  );
}

export default Student;
