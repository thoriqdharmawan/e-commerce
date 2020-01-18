import React, { useEffect, useState } from "react";

// Atoms
import DataPosts from "../atoms/DataPosts";

// Redux
import { connect } from "react-redux";
import { getPostsData } from "../../redux/actions/dataActions";

const TablePosts = params => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    params.getPostsData();
  }, []);

  useEffect(() => {
    console.log("redux data : ", params);
    console.log("state ", posts);
  }, [posts]);

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
        <th>Body</th>
        <th>Author</th>
        <th>Slug</th>
        <th>Category</th>
        <th>Created At</th>
        <th>Edited At</th>
      </tr>
      <DataPosts
        title="Laravel 5 Tutorial: Introduction"
        body="lorem"
        author="Rizal Fakhri"
        slug="panji-petualang"
        category="Tech"
        createdAt="2018-01-20"
        status="Published"
        editedAt="Mei"
      />
      <DataPosts
        title="Laravel 6 Tutorial: Instalation"
        body="lorem"
        author="Thoriq"
        slug="panji-petualang"
        category="Tech"
        createdAt="2019-01-20"
        status="Published"
        editedAt="Mei"
      />
    </table>
  );
};

const mapStateToProps = state => ({
  data: state.data,
  user: state.user
});

const mapActionToProps = {
  getPostsData
};

export default connect(mapStateToProps, mapActionToProps)(TablePosts);
