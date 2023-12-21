import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/registration");
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default Home;
