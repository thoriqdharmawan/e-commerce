import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = ({ icon, title, ...rest }) => {
  return (
    <li class="nav-item dropdown">
      <Link {...rest}>
        <i class={icon}></i>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default SidebarMenu;
