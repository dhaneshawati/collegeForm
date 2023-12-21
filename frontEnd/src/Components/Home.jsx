import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Home() {
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
