import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  userDetails: {},
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAccessToken, updateUserDetails } = authReducer.actions;

export default authReducer.reducer;
