import React from "react";

import "./Hero.scss";

import Form from "./Form/Form";

const Hero = props => {
  const { zip, search, onZip, onSearch, suggestions } = props;

  return (
    <div className="Hero">
      <Form
        zip={zip}
        search={search}
        onZip={onZip}
        onSearch={onSearch}
        suggestions={suggestions}
      />
    </div>
  );
};

export default Hero;
