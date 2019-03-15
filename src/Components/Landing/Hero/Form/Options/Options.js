import React from "react";

import "./Options.scss";

const Options = props => {
  console.log(props);
  // console.log(suggestions.length);

  const { suggestions, onValue } = props;

  const suggestion = suggestions.map((res, i) => {
    return (
      <div className="suggestion" key={i}>
        <h5 onClick={() => onValue(res.text)}>{res.text}</h5>
      </div>
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
