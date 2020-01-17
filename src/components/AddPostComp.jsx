import React from "react";

// Organism
import Notes from "./organisms/Notes";
import MainContent from "./organisms/MainContent";

// Molecules
import FormNewPost from "./molecules/FormNewPost";

// Atoms
import BeradcrubHeader from "./atoms/BeradcrubHeader";

const AddPostComp = () => {
  return (
    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>Add Post</h1>
          <BeradcrubHeader first="Dashbord" second="Post" third="Add Post" />
        </div>

        <div class="section-body">
          <Notes
            title="Create New Post"
            content="On this page you can create a new post and fill in all fields."
          />
          <MainContent title="Create New Post" content={<FormNewPost />} />
        </div>
      </section>
    </div>
  );
};

export default AddPostComp;
