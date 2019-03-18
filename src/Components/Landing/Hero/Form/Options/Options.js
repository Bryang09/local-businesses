import React from "react";

import { Link } from "react-router-dom";
import "./Options.scss";

const Options = props => {
  console.log(props);

  const { suggestions, onValue, value, zip } = props;

  const suggestion = suggestions.map((res, i) => {
    return (
      <>
        <Link to={`/${res.text}/${zip}`} key={i}>
          <div className="suggestion" key={i}>
            <h5>{res.text}</h5>
          </div>
        </Link>
      </>
    );
  });

  return (
    <div
      className="Options"
      style={suggestions.length > 0 ? { display: "flex" } : { display: "none" }}
    >
      {suggestion}
    </div>
  );
};

export default Options;
