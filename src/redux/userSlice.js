import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: [],
  users: [],
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.currentUser = action.payload;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser } = userSlice.actions;

export default userSlice.reducer;
