import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  reducers: {
    inputText(state, action) {
      if ("name" in action.payload) {
        state.name = action.payload.name;
      }
      if ("username" in action.payload) {
        state.username = action.payload.username;
      }
      if ("email" in action.payload) {
        state.email = action.payload.email;
      }
      if ("password" in action.payload) {
        state.password = action.payload.password;
      }
      if ("password_confirmation" in action.payload) {
        state.password_confirmation = action.payload.password_confirmation;
      }
      //   console.log(action.payload);
    },
    resetText(state) {
      (state.name = ""),
        (state.username = ""),
        (state.email = ""),
        (state.password = ""),
        (state.password_confirmation = "");
    },
  },
});

export const { inputText, resetText } = formSlice.actions;
export default formSlice.reducer;
