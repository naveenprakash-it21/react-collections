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

const userSlice = createReducer(initialState, (builder) => {
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
      state.users = state.users.filter((user) => user.login.uuid !== action.payload);
      state.filteredUsers = state.filteredUsers.filter((user) => user.login.uuid !== action.payload);
    })
    .addCase(filterUsers, (state, action) => {
      if (action.payload) {
        state.filteredUsers = state.users.filter((user) => user.gender === action.payload);
      } else {
        state.filteredUsers = state.users;
      }
    });
});

export default userSlice;
