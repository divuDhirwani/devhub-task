import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAccessToken } = authReducer.actions;

export default authReducer.reducer;
