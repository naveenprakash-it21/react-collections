import { createReducer } from "@reduxjs/toolkit";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  deleteUserAction,
  filterUsers,
} from "../actions/userActions";

const initialState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
};

const userSlice = createReducer(initialState, (builder) => { // removing the switch case
  builder
    .addCase(fetchUsersStart, (state) => {
      state.loading = true;
    })
    .addCase(fetchUsersSuccess, (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
      state.loading = false;
    })
    .addCase(fetchUsersFailure, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(deleteUserAction, (state, action) => {
      //Only users not matching the uuid remain.
      state.users = state.users.filter((user) => user.login.uuid !== action.payload); // uuid (Unique user ID);
      //holds the currently displayed users
      state.filteredUsers = state.filteredUsers.filter((user) => user.login.uuid !== action.payload);
    })
    .addCase(filterUsers, (state, action) => {
      if (action.payload) { // male or female
        state.filteredUsers = state.users.filter((user) => user.gender === action.payload);
      } else {
        state.filteredUsers = state.users; // all api
      }
    });
});

export default userSlice;
