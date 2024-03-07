import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import formSlice from "./form/formSlice";

const store = configureStore({
  reducer: {
    counters: counterSlice,
    forms: formSlice,
  },
});

export default store;
