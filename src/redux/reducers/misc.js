import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenEditDialog: false,
  selectedUser: null,
};

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setIsOpenEditDialog: (state, action) => {
      state.isOpenEditDialog = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export default miscSlice;

export const { setIsOpenEditDialog, setSelectedUser } = miscSlice.actions;
