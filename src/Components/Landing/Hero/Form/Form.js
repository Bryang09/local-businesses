import React from "react";

import "./Form.scss";

import Options from "./Options/Options";
import Zip from "./Zip/Zip";
import Button from "./Button/Button";

const Form = props => {
  const {
    zip,
    onZip,
    onSearch,
    suggestions,
    onValue,
    value,
    submit,
    search
  } = props;

  console.log(value.length);

  return (
    <div className="Form">
      <h2>Search For Businesses Near You!</h2>
      <form>
        <div className="inputs">
          <Zip onZip={onZip} />

          {zip.length > 0 ? (
            <input
              type="text"
              name="search"
              placeholder="What Are You Searching For?"
              onChange={onSearch}
            />
          ) : (
            <input
              type="text"
              name="search"
              placeholder="What Are You Searching For?"
              disabled
            />
          )}
        </div>

        <Button value={value} zip={zip} submit={submit} search={search} />
        <Options
          suggestions={suggestions}
          onValue={onValue}
          value={value}
          zip={zip}
        />
      </form>
    </div>
  );
};

export default Form;
