import React from "react";

function Post({ postTitle, postBody, setPostTitle, setPostBody, handleSubmit }) {
  return (
    <div className="container mt-4">
      <form
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Post
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={postBody}
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Post;
