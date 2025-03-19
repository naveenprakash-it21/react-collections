
// CENTRALIZED STATE STORAGE

import {configureStore} from "@reduxjs/toolkit"; // Create redux store
import CounterReducer from "../counterSlice"

const storage  = configureStore({
    reducer:{
      counter :CounterReducer,
    },
});

export default storage;
