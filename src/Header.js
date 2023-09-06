import React from "react";
import "./Header.css"

function Header({head}) {
  return (
    <h1 className="text-dark text-center bg-info">{head}</h1>
  );
}

export default Header;
