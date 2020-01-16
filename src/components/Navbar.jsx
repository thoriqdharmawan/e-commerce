import React from "react";

import profil from "../assets/img/avatar/avatar-1.png";

// Router
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg main-navbar">
      <form class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
          <li>
            <Link to="/" data-toggle="sidebar" class="nav-link nav-link-lg">
              <i class="fas fa-bars"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              data-toggle="search"
              class="nav-link nav-link-lg d-sm-none"
            >
              <i class="fas fa-search"></i>
            </Link>
          </li>
        </ul>

        <div class="search-element">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            data-width="250"
          />
          <button class="btn" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>

      <ul class="navbar-nav navbar-right">
        <li class="dropdown">
          <Link
            data-toggle="dropdown"
            class="nav-link dropdown-toggle nav-link-lg nav-link-user"
          >
            <img alt="profil" src={profil} class="rounded-circle mr-1" />
            <div class="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div>
          </Link>

          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-title">Logged in 5 min ago</div>
            <Link class="dropdown-item has-icon">
              <i class="far fa-user"></i> Profile
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="/" className="dropdown-item has-icon text-danger">
              <i class="fas fa-sign-out-alt"></i> Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
