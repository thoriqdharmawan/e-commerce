import React, { useEffect } from "react";

// Router
import { useHistory } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

const Logout = params => {
  let history = useHistory();
  useEffect(() => {
    params.logoutUser();
    if (!params.user.authenticated) history.push("/login");
  });

  return <div></div>;
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapActionToProps)(Logout);
