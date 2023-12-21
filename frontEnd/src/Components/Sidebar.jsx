import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleRegistration = () => {
    console.log("reg clicked !");
    navigate("/registration");
  };
  const handleViewData = () => {
    console.log("data clicked!");
    navigate("/viewData");
  };

  return (
    <div className="sidebar">
      <button className="pages_btn" onClick={handleRegistration}>
        Register Student
      </button>
      <button className="pages_btn" onClick={handleViewData}>
        View Students
      </button>
    </div>
  );
}

export default Sidebar;
