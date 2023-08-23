"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  activeStates: number;
}

const initialState: CategoryState = {
  activeStates: 1,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveStates: (state, action: PayloadAction<number>) => {
      state.activeStates = action.payload;
    },
  },
});

export const { setActiveStates } = categorySlice.actions;
export default categorySlice.reducer;
