import React from "react";
import { Link } from "react-router-dom";

function Missing() {
  return (
    <>
      <h3 className="text-danger fw-bold text-center mt-5">Page is not found</h3>
      <p className="text-center"><Link to={"/"}>Visit our home page</Link></p>
    </>
  );
}

export default Missing;
