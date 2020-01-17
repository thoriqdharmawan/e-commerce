import React from "react";

// Router
import { Link } from "react-router-dom";

// Atoms
import BeradcrubHeader from "../atoms/BeradcrubHeader";

const PostsHeader = () => {
  return (
    <div class="section-header">
      <h1>Posts</h1>
      <div class="section-header-button">
        <Link to="/addpost" class="btn btn-primary">
          Add New
        </Link>
      </div>
      <BeradcrubHeader first="Dashboard" second="Posts" third="All Posts" />
    </div>
  );
};

export default PostsHeader;
