import React from "react";

const Notes = ({ title, content }) => {
  return (
    <>
      <h2 class="section-title">{title}</h2>
      <p class="section-lead">{content}</p>
    </>
  );
};

export default Notes;
