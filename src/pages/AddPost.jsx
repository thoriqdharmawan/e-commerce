import React from "react";

// Component
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddPostComp from "../components/AddPostComp";

const AddPost = () => {
  return (
    <div id="app">
      <div className="main-wrapper">
        <div className="navbar-bg"></div>
        <Navbar />
        <Sidebar />
        <AddPostComp />
      </div>
    </div>
  );
};

export default AddPost;
