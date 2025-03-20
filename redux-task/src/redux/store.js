import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";

const store = configureStore({ //Built-in middleware.
  reducer: {
    users: userSlice, //Registering the userSlice in the store
  },
});

export default store;

// reducer -> an obj where we define slices of state

