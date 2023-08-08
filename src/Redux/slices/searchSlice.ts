"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  isOpen: boolean;
}

const initialState: SearchState = {
  isOpen: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
