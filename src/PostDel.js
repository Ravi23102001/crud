import React from "react";
import { Link } from "react-router-dom";

function PostDel({ posts }) {
  return (
    <>
      {posts.map((posts) => (
        <div className="list-group" key={posts.id}>
          <Link
            to={`post/${posts.id}`}
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{posts.title}</h5>
              <small>{posts.datetime}</small>
            </div>
            <p className="mb-1">{posts.body<=10 ? (posts.body):`${(posts.body.slice(0,10))}...`}</p>
          </Link>
          
        </div>
      ))}
    </>
  );
}

export default PostDel;
