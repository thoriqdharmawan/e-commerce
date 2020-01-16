import React from "react";
import { Link } from "react-router-dom";

const HeroLogo = () => {
  return (
    <>
      <div class="sidebar-brand">
        <Link to="/">Jepture</Link>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <Link to="/">JT</Link>
      </div>
    </>
  );
};

export default HeroLogo;
