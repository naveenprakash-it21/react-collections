import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/actions/userActions";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";
import "../styles/UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const { filteredUsers, loading, error } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");
  const [deletedUser, setDeletedUser] = useState(null); // Store deleted user message

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id, name) => {
    dispatch(deleteUser(id));
    setDeletedUser(`${name || "User"} has been deleted.`); // Default to "User" if name is undefined

    setTimeout(() => {
      setDeletedUser(null);
    }, 3000);
  };

  const filteredResults = filteredUsers.filter((user) =>
    user.name.first.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-list">
      <SearchBar setSearch={setSearch} />
      <FilterDropdown />

      {/* Display deleted user message */}
      {deletedUser && <p className="deleted-message">{deletedUser}</p>}

      {loading ? (
  <div className="loading-container">
    <img src="/custom3.png" alt="Loading..." className="loading-gif" />
  </div>
) : error ? (
  <p className="error">{error}</p>
) : (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filteredResults.length > 0 ? (
        filteredResults.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{`${user.name.first} ${user.name.last}`}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>
              <button onClick={() => handleDelete(user.login.uuid, user.name.first)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" style={{ textAlign: "center" }}>No data found</td>
        </tr>
      )}
    </tbody>
  </table>
)}
      
    </div>
  );
};

export default UserList;
