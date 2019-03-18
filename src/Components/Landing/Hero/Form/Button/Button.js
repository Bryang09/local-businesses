import React from "react";

// import { Link } from "react-router-dom";

const Button = props => {
  const { value, zip, submit, search } = props;

  console.log(props);

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
