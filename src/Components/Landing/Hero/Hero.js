import React from "react";

import "./Hero.scss";

import Form from "./Form/Form";

const Hero = props => {
  const { zip, search, onZip, onSearch, suggestions, onValue, value } = props;

  return (
    <div className="Hero">
      <Form
        zip={zip}
        search={search}
        onZip={onZip}
        onSearch={onSearch}
        suggestions={suggestions}
        value={value}
        onValue={onValue}
      />
    </div>
  );
};

export default Hero;
