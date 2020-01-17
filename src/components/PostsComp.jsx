import React from "react";

// Organism
import MainContent from "./organisms/MainContent";
import Tags from "./organisms/Tags";
import Notes from "./organisms/Notes";
import PostsHeader from "./organisms/PostsHeader";

// Molecules
import MainContentMol from "./molecules/MainContentMol";

const PostsComp = () => {
  return (
    <div class="main-content">
      <div class="section-body">
        <section class="section">
          <PostsHeader />
          <div class="section-body">
            <Notes
              title="Posts"
              content="You can manage all posts, such as editing, deleting and more."
            />
            <Tags />
            <MainContent title="All Posts" content={<MainContentMol />} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostsComp;
