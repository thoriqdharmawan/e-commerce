import React from "react";

const BeradcrubHeader = ({ first, second, third }) => {
  return (
    <div class="section-header-breadcrumb">
      <div class="breadcrumb-item active">
        <a href="#">{first}</a>
      </div>
      <div class="breadcrumb-item">
        <a href="#">{second}</a>
      </div>
      <div class="breadcrumb-item">{third}</div>
    </div>
  );
};

export default BeradcrubHeader;
