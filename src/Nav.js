import React from "react";
import { NavLink, Link} from "react-router-dom";
import "./Nav.css"

function Nav({search, setSearch}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/post">
                Post
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/about/5">
                About
              </NavLink>
            </li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}  //input la value change pannum pothu search la store agum
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
