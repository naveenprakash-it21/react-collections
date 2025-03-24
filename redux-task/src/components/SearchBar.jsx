import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      id="search"
      className="search-bar"
      placeholder="Search by name..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
