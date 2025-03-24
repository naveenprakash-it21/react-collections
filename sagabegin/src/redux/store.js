// import {createStore} from 'redux';
// import rootReducer from './rootReducer';
// const store = createStore(rootReducer); //function come from reducer or rootReducer
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
//import productSaga from './productSaga';
//import createSagaMiddle from '@redux-saga/core';

//const sagaMiddleware= createSagaMiddle();
const store = configureStore({
  reducer: rootReducer, // rootReducer replaces individual reducers
 // middleware:()=> [ sagaMiddleware]
});

//sagaMiddleware.run(productSaga)

export default store;