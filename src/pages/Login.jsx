import React from "react";
import { Link } from "react-router-dom";

// Components
import FormLogin from "../components/FormLogin";

// Utils
import HeaderLogo from "../utils/HeaderLogo";

const Login = () => {
  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
              <HeaderLogo />

              <div className="card card-primary">
                <div className="card-header">
                  <h4>Login</h4>
                </div>
                <FormLogin />
              </div>

              <div className="mt-5 text-muted text-center">
                Don't have an account? <Link to="/register">Register</Link>
              </div>
              <div className="simple-footer">Copyright &copy; Stisla 2018</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
