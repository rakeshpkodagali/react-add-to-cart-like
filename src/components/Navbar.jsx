import React from "react";

const Navbar = ({ totalItems }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalItems}</span>
      </a>
    </nav>
  );
};

export default Navbar;
