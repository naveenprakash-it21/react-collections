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

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="user-list">
      <SearchBar setSearch={setSearch} />
      <FilterDropdown />
      {loading ? (
        <p>Loading...</p>
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
            {filteredUsers
              .filter((user) =>
                user.name.first.toLowerCase().includes(search.toLowerCase())
              )
              .map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${user.name.first} ${user.name.last}`}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button onClick={() => handleDelete(user.login.uuid)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
