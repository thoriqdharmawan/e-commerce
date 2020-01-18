import React from "react";

const DataPosts = ({
  title,
  author,
  body,
  slug,
  category,
  createdAt,
  editedAt
}) => {
  return (
    <tr>
      <td className="center" id="table-data">
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
      <td id="table-data">
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
      <td id="table-data" className="center">
        {body}
      </td>
      <td id="table-data" className="center">
        {author}
      </td>
      <td id="table-data" className="center">
        {slug}
      </td>
      <td id="table-data" className="center">
        {category}
      </td>
      <td id="table-data" className="center">
        {createdAt}
      </td>
      <td id="table-data" className="center">
        {editedAt}
      </td>
    </tr>
  );
};

export default DataPosts;
