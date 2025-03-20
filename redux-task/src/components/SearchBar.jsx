import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ setSearch }) => { //props
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
