import React from "react";

const Search = props => {
  const { onSearch } = props;
  return (
    <input
      type="text"
      name="search"
      placeholder="What Are You Searching For?"
      onChange={onSearch}
    />
  );
};

export default Search;
