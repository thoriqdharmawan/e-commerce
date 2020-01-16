import React from "react";

// Component
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Dashbord = () => {
  return (
    <div id="app">
      <div class="main-wrapper">
        <div class="navbar-bg"></div>
        <Navbar />
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashbord;
