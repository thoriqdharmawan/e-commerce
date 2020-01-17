import React from "react";
import { Link } from "react-router-dom";

// Utils
import SidebarMenu from "../utils/SidebarMenu";
import HeroLogo from "../utils/HeroLogo";

const Sidebar = () => {
  return (
    <div class="main-sidebar">
      <aside id="sidebar-wrapper">
        <HeroLogo />
        <ul class="sidebar-menu">
          <li class="menu-header">Menu</li>
          <SidebarMenu to="/" icon="fas fa-fire" title="Dashboard" />
          <SidebarMenu
            to="/addpost"
            icon="fas fa-paper-plane"
            title="Add Post"
          />
          <SidebarMenu to="/posts" icon="fas fa-list-ul" title="Posts" />
          <SidebarMenu to="/logout" icon="fas fa-sign-out-alt" title="Logout" />
        </ul>

        <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
          <Link to="/" class="btn btn-primary btn-lg btn-block btn-icon-split">
            <i class="fas fa-rocket"></i> Documentation
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
