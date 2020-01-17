import React from "react";

// Component
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PostsComp from "../components/PostsComp";

const Posts = () => {
  return (
    <div id="app">
      <div className="main-wrapper">
        <div className="navbar-bg"></div>
        <Navbar />
        <Sidebar />
        <PostsComp />
      </div>
    </div>
  );
};

export default Posts;
