import React, { useEffect } from "react";

import profil from "../assets/img/avatar/avatar-1.png";

// Redux
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/userActions";

// Router
import { Link } from "react-router-dom";

const Navbar = params => {
  return (
    <nav className="navbar navbar-expand-lg main-navbar">
      <form className="form-inline mr-auto">
        <ul className="navbar-nav mr-3">
          <li>
            <Link to="/" data-toggle="sidebar" className="nav-link nav-link-lg">
              <i className="fas fa-bars"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              data-toggle="search"
              className="nav-link nav-link-lg d-sm-none"
            >
              <i className="fas fa-search"></i>
            </Link>
          </li>
        </ul>

        <div className="search-element">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            data-width="250"
          />
          <button className="btn" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      <ul className="navbar-nav navbar-right">
        <li className="dropdown">
          <Link
            to="/"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle nav-link-lg nav-link-user"
          >
            <img alt="profil" src={profil} className="rounded-circle mr-1" />
            <div className="d-sm-none d-lg-inline-block">
              {`Hi, ${params.user.credentials[0].first_name} ${params.user.credentials[0].last_name}`}
            </div>
          </Link>

          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-title">Logged in 5 min ago</div>
            <Link to="/" className="dropdown-item has-icon">
              <i className="far fa-user"></i> Profile
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="/" className="dropdown-item has-icon text-danger">
              <i className="fas fa-sign-out-alt"></i> Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {
  getUserData
};

export default connect(mapStateToProps, mapActionToProps)(Navbar);
