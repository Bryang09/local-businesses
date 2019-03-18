import React from "react";

import "./Hero.scss";

import Form from "./Form/Form";

const Hero = props => {
  const {
    zip,
    search,
    onZip,
    onSearch,
    suggestions,
    onValue,
    value,
    submit
  } = props;

  return (
    <div className="Hero">
      <Form
        zip={zip}
        search={search}
        value={value}
        onZip={onZip}
        onSearch={onSearch}
        suggestions={suggestions}
        onValue={onValue}
        submit={submit}
      />
    </div>
  );
};

export default Hero;
