"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartCounterState {
  value: number;
}

const initialState: cartCounterState = {
  value: 0,
};

const cartCounterSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = cartCounterSlice.actions;
export default cartCounterSlice.reducer;
