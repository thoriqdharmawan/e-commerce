import React, { useState } from "react";
import axios from "axios";

const FormRegister = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirm: "",
    country: "Indonesia",
    province: "West Java",
    city: "",
    postal_code: "",
    agree: false,
    timestamp: Math.round(new Date().getTime() / 1000)
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckChange = e => {
    setUser({
      ...user,
      agree: !user.agree
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await axios
      .post("/register", user)
      .then(response => {
        console.log("res :", response);
      })
      .catch(error => {
        console.log("err :", error.response);
      });
  };

  return (
    <div className="card card-primary">
      <div className="card-header">
        <h4>Register</h4>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="frist_name">First Name</label>
              <input
                onChange={handleChange}
                id="first_name"
                type="text"
                className="form-control"
                name="first_name"
                autoFocus
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="last_name">Last Name</label>
              <input
                onChange={handleChange}
                id="last_name"
                type="text"
                className="form-control"
                name="last_name"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              id="email"
              type="email"
              className="form-control"
              name="email"
            />
            <div className="invalid-feedback"></div>
          </div>

          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="password" className="d-block">
                Password
              </label>
              <input
                onChange={handleChange}
                id="password"
                type="password"
                className="form-control pwstrength"
                data-indicator="pwindicator"
                name="password"
              />
              <div id="pwindicator" className="pwindicator">
                <div className="bar"></div>
                <div className="label"></div>
              </div>
            </div>
            <div className="form-group col-6">
              <label htmlFor="password2" className="d-block">
                Password Confirmation
              </label>
              <input
                onChange={handleChange}
                id="password2"
                type="password"
                className="form-control"
                name="password_confirm"
              />
            </div>
          </div>

          <div className="form-divider">Your Home</div>
          <div className="row">
            <div className="form-group col-6">
              <label>Country</label>
              <select
                name="country"
                onChange={handleChange}
                className="form-control selectric"
              >
                <option value="Indonesia">Indonesia</option>
                <option value="Palestine">Palestine</option>
                <option value="Syria">Syria</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Thailand">Thailand</option>
              </select>
            </div>
            <div className="form-group col-6">
              <label>Province</label>
              <select
                onChange={handleChange}
                name="province"
                className="form-control selectric"
              >
                <option value="West Java">West Java</option>
                <option value="East Java">East Java</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>City</label>
              <input
                onChange={handleChange}
                name="city"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-6">
              <label>Postal Code</label>
              <input
                onChange={handleChange}
                name="postal_code"
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                onClick={handleCheckChange}
                type="checkbox"
                name="agree"
                className="custom-control-input"
                id="agree"
              />
              <label className="custom-control-label" htmlFor="agree">
                I agree with the terms and conditions
              </label>
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
