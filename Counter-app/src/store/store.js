
// CENTRALIZED STATE STORAGE

import {configureStore} from "@reduxjs/toolkit"; // Create redux store
import counterReducer from "../counterSlice"

const store  =configureStore({

    reducer:{
      counter :counterReducer,
      
    },
});

export default store;

