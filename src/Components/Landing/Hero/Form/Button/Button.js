import React from "react";

import { Link } from "react-router-dom";

const Button = props => {
  const { value, zip } = props;

  console.log(props);

  return (
    <>
      <Link
        to={`/${value}/${zip}`}
        className={value.length === 0 ? "disabled" : null}
      >
        <h4
          style={
            value.length === 0
              ? { background: "rgb(216, 216, 216)", color: "#333" }
              : null
          }
        >
          Search Now
        </h4>
      </Link>
    </>
  );
};

export default Button;
