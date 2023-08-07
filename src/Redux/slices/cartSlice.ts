"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  isOpen: boolean;
}

const initialState: CartState = {
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
