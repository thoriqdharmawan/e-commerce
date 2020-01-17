import React from "react";

const Tags = () => {
  return (
    <div class="row">
      <div class="col-12">
        <div class="card mb-0">
          <div class="card-body">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  All <span class="badge badge-white">5</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Draft <span class="badge badge-primary">1</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pending <span class="badge badge-primary">1</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trash <span class="badge badge-primary">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
