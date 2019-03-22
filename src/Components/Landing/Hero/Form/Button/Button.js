import React from "react";

// import { Link } from "react-router-dom";

const Button = props => {
  const { zip, submit, search } = props;

  return (
    <>
      <h4
        onClick={submit}
        className={zip.length > 0 && search.length > 0 ? null : "disabled"}
      >
        Search Now
      </h4>
    </>
  );
};

export default Button;
