import React from "react";
import { useDispatch } from "react-redux";
import { filterUsers } from "../redux/actions/userActions";
import "../styles/FilterDropdown.css";

const FilterDropdown = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterUsers(event.target.value));
  };

  return (
    <select onChange={handleFilter} className="filter-dropdown">
      <option value="">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};

export default FilterDropdown;
