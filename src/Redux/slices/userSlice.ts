"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  login_email: string;
  login_password: string;
  login_error: string;
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  sucess: string;
  error: string;
  forgot_email: string;
  forgot_error: string;
  forgot_sucess: string;
  reset_password: string;
  reset_confirm_password: string;
  reset_error: string;
}

const initialState: UserState = {
  login_email: "",
  login_password: "",
  login_error: "",
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  sucess: "",
  error: "",
  forgot_email: "",
  forgot_error: "",
  forgot_sucess: "",
  reset_password: "",
  reset_confirm_password: "",
  reset_error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
