import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userExists: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    userNotExists: (state, action) => {
      state.user = null;
      state.loading = true;
    },
  },
});

export default authSlice;

export const { userExists, userNotExists } = authSlice.actions;
