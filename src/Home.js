import React from "react";
import PostDel from "./PostDel";

function Home({ posts }) {
  // console.log(posts, "po");
  return (
    <div className="home">
      {posts.length ? (
        <PostDel  posts={posts} />
      ) : (
        <p className=" h4 text-danger text-center mt-5">No Posts To display</p>
      )}
    </div>
  );
}

export default Home;
