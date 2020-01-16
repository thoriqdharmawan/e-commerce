import React from "react";

// Components
import FormRegister from "../components/FormRegister";

// Utils
import HeaderLogo from "../utils/HeaderLogo";
import Copyright from "../utils/Copyright";

const Register = () => {
  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <HeaderLogo />
              <FormRegister />
              <Copyright />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
