import React from "react";

// Atoms
import DataPosts from "../atoms/DataPosts";

const TablePosts = () => {
  return (
    <table class="table table-striped">
      <tr>
        <th class="text-center pt-2">
          <div class="custom-checkbox custom-checkbox-table custom-control">
            <input
              type="checkbox"
              data-checkboxes="mygroup"
              data-checkbox-role="dad"
              class="custom-control-input"
              id="checkbox-all"
            />
            <label for="checkbox-all" class="custom-control-label">
              &nbsp;
            </label>
          </div>
        </th>
        <th>Title</th>
        <th>Category</th>
        <th>Author</th>
        <th>Created At</th>
        <th>Status</th>
      </tr>
      <DataPosts
        title="Laravel 5 Tutorial: Introduction"
        author="Rizal Fakhri"
        createdAt="2018-01-20"
        status="Published"
      />
      <DataPosts
        title="Laravel 6 Tutorial: Instalation"
        author="Thoriq"
        createdAt="2019-01-20"
        status="Published"
      />
    </table>
  );
};

export default TablePosts;
