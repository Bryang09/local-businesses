import React from "react";

import "./Form.scss";

import Options from "./Options/Options";

const Form = props => {
  const { zip, search, onZip, onSearch, suggestions } = props;

  const length = zip.length === 0 || search.length === 0;

  return (
    <div className="Form">
      <h2>Hello</h2>
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

        <Options suggestions={suggestions} />

        <a
          href="https://bryan-gonzalez.com"
          className={length ? "disabled" : null}
        >
          <h4
            style={
              length
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
