import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/viewData");
  };

  return (
    <div className="navbar">
      <div className="group">
        <div className="tabs" onClick={handleHome}>
          Home
        </div>
        <div className="tabs">About</div>
        <div className="tabs">Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar;
