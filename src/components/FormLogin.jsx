import React, { useState } from "react";

// Router
import { Link, useHistory } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

const FormLogin = params => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  let history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
    params.loginUser(userData);

    return (await params.user.authenticated)
      ? history.push("/")
      : history.push("/login");
  };

  return (
    <div className="card-body">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="needs-validation"
        noValidate
      >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            className="form-control"
            name="email"
            tabIndex="1"
            required
            autoFocus
          />
          <div className="invalid-feedback">Please fill in your email</div>
        </div>

        <div className="form-group">
          <div className="d-block">
            <label htmlFor="password" className="control-label">
              Password
            </label>
            <div className="float-right">
              <Link to="/" className="text-small">
                Forgot Password?
              </Link>
            </div>
          </div>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            className="form-control"
            name="password"
            tabIndex="2"
            required
          />
          <div className="invalid-feedback">please fill in your password</div>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              name="remember"
              className="custom-control-input"
              tabIndex="3"
              id="remember-me"
            />
            <label className="custom-control-label" htmlFor="remember-me">
              Remember Me
            </label>
          </div>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            tabIndex="4"
          >
            Login
          </button>
        </div>
      </form>

      <div className="text-center mt-4 mb-3">
        <div className="text-job text-muted">Login With Social</div>
      </div>

      <div className="row sm-gutters">
        <div className="col-6">
          <Link to="/" className="btn btn-block btn-social btn-facebook">
            <span className="fab fa-facebook"></span> Facebook
          </Link>
        </div>

        <div className="col-6">
          <Link to="/" className="btn btn-block btn-social btn-twitter">
            <span className="fab fa-twitter"></span> Twitter
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {
  loginUser
};

export default connect(mapStateToProps, mapActionToProps)(FormLogin);
