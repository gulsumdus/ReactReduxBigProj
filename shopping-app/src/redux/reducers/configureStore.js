// redux/reducers/configureStore.js
import { configureStore } from '@reduxjs/toolkit';//videoya göre değil  video versiyon hatalı
import rootReducer from "./index" // Your reducer file

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,  // Ensure you're correctly assigning reducers
  },
});

export default store;




