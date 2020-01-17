import React from "react";

const MainContent = ({ title, content }) => {
  return (
    <div class="row mt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>{title}</h4>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
