import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1;
      // console.log(state.value);
    },
    decrement(state) {
      if (state.value > 0) {
        state.value -= 1;
      } else state.value = 0;
      // console.log(state.value);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
