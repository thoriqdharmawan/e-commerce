import React from "react";

// Utils
import SidebarMenu from "../utils/SidebarMenu";
import HeroLogo from "../utils/HeroLogo";

const Sidebar = () => {
  return (
    <div class="main-sidebar">
      <aside id="sidebar-wrapper">
        <HeroLogo />
        <SidebarMenu />

        <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
          <a
            href="https://getstisla.com/docs"
            class="btn btn-primary btn-lg btn-block btn-icon-split"
          >
            <i class="fas fa-rocket"></i> Documentation
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
