import React from "react";
import { useParams } from "react-router-dom";

function Podetail({ posts, handleDelete }) {
  const { id } = useParams(); //id data type is string
  const post = posts.find((post) => post.id.toString() === id); //oru post mattum dhaan irukkum
  // console.log(typeof(id))
//   console.log(post);
  return (
    <>
      {post && (
        <div className="container">
          <h1>{post.title}</h1>
          <small>{post.datetime}</small>
          <h3>{post.body}</h3>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </div>
      )}
      {!post && <h1>Post is not found</h1>}
    </>
  );
}

export default Podetail;
