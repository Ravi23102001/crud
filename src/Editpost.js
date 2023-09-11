import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Missing from "./Missing";

function Editpost({
  posts,
  editTitle,
  editBody,
  setEditTitle,
  setEditBody,
  handleUpdate,
}) {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  //   console.log(post.title, "posts");

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  },[]);

  return (
    <>
      {editTitle && (
        <div className="container mt-4">
          <h1>Edit post</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
                placeholder="Body"
              >
                Post
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={() => handleUpdate(id)}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}

      {!editTitle && <h1>Loading...</h1>}
    </>
  );
}

export default Editpost;
