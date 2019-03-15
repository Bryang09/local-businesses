import React from "react";

import "./Options.scss";

const Options = props => {
  console.log(props);

  const { suggestions } = props;

  const suggestion = suggestions.map((res, i) => {
    return (
      <div className="suggestion" key={i}>
        <h5>{res.text}</h5>
      </div>
    );
  });

  return <div className="Options">{suggestion}</div>;
};

export default Options;
