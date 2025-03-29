import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../redux/saga/productSaga"; // ✅ Ensure correct import

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), 
});

sagaMiddleware.run(rootSaga); // ✅ Ensure saga is running

export default store;
