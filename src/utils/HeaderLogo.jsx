import React from "react";
import stislaFill from "../assets/img/stisla-fill.svg";

const HeaderLogo = () => {
  return (
    <div className="login-brand">
      <img
        src={stislaFill}
        alt="logo"
        width="100"
        className="shadow-light rounded-circle"
      />
    </div>
  );
};

export default HeaderLogo;
