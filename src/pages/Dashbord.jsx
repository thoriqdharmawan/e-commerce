import React, { useEffect } from "react";

// Router
import { useHistory } from "react-router-dom";

// Component
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

// Redux
import { connect } from "react-redux";

const Dashbord = params => {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.FBIdToken == null) history.push("/login");
  });

  return (
    <div id="app">
      <div className="main-wrapper">
        <div className="navbar-bg"></div>
        <Navbar />
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Dashbord);
