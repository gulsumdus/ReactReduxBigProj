// redux/reducers/configureStore.js
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./index"; // `index.js` içindeki rootReducer
import { thunk } from "redux-thunk"; //api için paket


const store = configureStore({
    reducer: rootReducer, // `rootReducer` doğrudan eklenmeli
  
});

export default store;




