import React from "react";

const DataPosts = ({ title, author, createdAt, status }) => {
  return (
    <tr>
      <td>
        <div class="custom-checkbox custom-control">
          <input
            type="checkbox"
            data-checkboxes="mygroup"
            class="custom-control-input"
            id="checkbox-2"
          />
          <label for="checkbox-2" class="custom-control-label">
            &nbsp;
          </label>
        </div>
      </td>
      <td>
        {title}
        <div class="table-links">
          <a href="#">View</a>
          <div class="bullet"></div>
          <a href="#">Edit</a>
          <div class="bullet"></div>
          <a href="#" class="text-danger">
            Trash
          </a>
        </div>
      </td>
      <td>
        <a href="#">Web Developer</a>,<a href="#">Tutorial</a>
      </td>
      <td>
        <a href="#">
          <img
            alt="gb"
            class="rounded-circle"
            width="35"
            data-toggle="title"
            title=""
          />{" "}
          <div class="d-inline-block ml-1">{author}</div>
        </a>
      </td>
      <td>{createdAt}</td>
      <td>
        <div class="badge badge-primary">{status}</div>
      </td>
    </tr>
  );
};

export default DataPosts;
