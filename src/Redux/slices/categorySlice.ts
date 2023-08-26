"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  activeStates: number | null;
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
    toggleActiveStates: (state, action: PayloadAction<number>) => {
      if (state.activeStates === action.payload) {
        state.activeStates = null;
      } else state.activeStates = action.payload;
    },
  },
});

export const { setActiveStates, toggleActiveStates } = categorySlice.actions;
export default categorySlice.reducer;
