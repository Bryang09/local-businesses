import React from "react";

import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = props => {
  return (
    <div className="Nav">
      <Link to="/">
        <i className="fas fa-home" />
      </Link>
    </div>
  );
};

export default Nav;
