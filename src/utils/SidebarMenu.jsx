import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <ul class="sidebar-menu">
      <li class="menu-header">Dashboard</li>
      <li class="nav-item dropdown">
        <Link to="/">
          <i class="fas fa-fire"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* <li class="menu-header">Dashboard</li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link has-dropdown">
          <i class="fas fa-fire"></i>
          <span>Dashboard</span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="nav-link" href="index-0.html">
              General Dashboard
            </a>
          </li>
          <li>
            <a class="nav-link" href="index.html">
              Ecommerce Dashboard
            </a>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default SidebarMenu;
