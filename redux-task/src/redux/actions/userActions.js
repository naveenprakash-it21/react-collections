import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const fetchUsersStart = createAction("users/fetchStart");
export const fetchUsersSuccess = createAction("users/fetchSuccess");
export const fetchUsersFailure = createAction("users/fetchFailure");
export const deleteUserAction = createAction("users/deleteUser");
export const filterUsers = createAction("users/filterUsers");

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart()); // Triggers loading state.
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    dispatch(fetchUsersSuccess(response.data.results)); // Updating Redux state
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

export const deleteUser = (id) => (dispatch) => {
  dispatch(deleteUserAction(id));
};

