import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const initialState = {
  users: [],
};

const querySnapshot = await getDocs(collection(db, "users"));
export const usersCollection = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  usersCollection.push({ ...doc.data() });
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.users.push("usersCollection");
    },
  }, 
});

// Action creators are generated for each case reducer function
export const { getUsers } = userSlice.actions;

export default userSlice.reducer;
