import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const initialState = {
  user: {},
  chatId: "null",
};
let currentUser;

onAuthStateChanged(auth, (user) => {
  currentUser = user.uid;
});

export const chatSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getChatUser: (state, action) => {
      state.user = action.payload;
    },
    getChatId: (state, action) => {
      state.chatId =
        currentUser > action.payload
          ? currentUser + action.payload
          : action.payload + currentUser;
    },
  },
});
// Action creators are generated for each case reducer function
export const { getChatUser, getChatId } = chatSlice.actions;

export default chatSlice.reducer;
