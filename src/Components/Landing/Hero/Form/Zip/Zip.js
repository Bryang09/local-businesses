import React from "react";

const Zip = props => {
  const { onZip } = props;
  return (
    <input
      type="text"
      name="zip"
      placeholder="Enter Zip Code"
      onChange={onZip}
    />
  );
};

export default Zip;
