import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import productSaga from "../redux/saga/productSaga";

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(sagaMiddleware),
});

// Run saga middleware
sagaMiddleware.run(productSaga);

export default store;
