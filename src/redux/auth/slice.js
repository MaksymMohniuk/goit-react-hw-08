import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState: INITIAL_STATE,

  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
