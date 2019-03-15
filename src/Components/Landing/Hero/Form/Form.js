import React from "react";

import "./Form.scss";

import Options from "./Options/Options";

const Form = props => {
  const { zip, search, onZip, onSearch, suggestions, onValue, value } = props;

  const length = zip.length === 0 || search.length === 0;

  console.log(value.length);

  return (
    <div className="Form">
      <h2>Search For Businesses Near You!</h2>
      <form>
        <div className="inputs">
          <input
            type="text"
            name="zip"
            placeholder="Enter Zip Code"
            onChange={onZip}
          />

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

        <Options suggestions={suggestions} onValue={onValue} />

        <a
          href="https://bryan-gonzalez.com"
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
        </a>
      </form>
    </div>
  );
};

export default Form;
