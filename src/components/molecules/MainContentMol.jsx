import React from "react";

// Molecules
import TablePosts from "./TablePosts";

const MainContentMol = () => {
  return (
    <div class="card-body">
      <div class="float-left">
        <select class="form-control selectric">
          <option>Action For Selected</option>
          <option>Move to Draft</option>
          <option>Move to Pending</option>
          <option>Delete Pemanently</option>
        </select>
      </div>
      <div class="float-right">
        <form>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" />
            <div class="input-group-append">
              <button class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="clearfix mb-3"></div>

      <div class="table-responsive">
        <TablePosts />
      </div>
    </div>
  );
};

export default MainContentMol;
