import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/actions/userActions";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const { filteredUsers, loading, error } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id, name) => {
    dispatch(deleteUser(id));
    toast.success(`${name} has been deleted!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "dark",
    });
  };

  const filteredResults = filteredUsers.filter((user) =>
    user.name.first.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-list">    
      <div className="search-container">
  <label htmlFor="search" className="search-label">Search Users:</label>
  <SearchBar setSearch={setSearch} />
</div>

      <FilterDropdown />
      <ToastContainer /> {/* Toast notification container */}

      {loading ? (
        <div className="loading-container">
          <img src="/custom1.gif" alt="Loading..." className="loading-gif" />
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
