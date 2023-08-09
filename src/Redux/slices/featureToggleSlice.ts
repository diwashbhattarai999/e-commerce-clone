"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FeatureToggleState {
  search: boolean;
  cart: boolean;
  signIn: boolean;
}

const initialState: FeatureToggleState = {
  search: false,
  cart: false,
  signIn: false,
};

const featureToggleSlice = createSlice({
  name: "featureToggle",
  initialState,
  reducers: {
    toggleFeature: (
      state,
      action: PayloadAction<{ featureName: keyof FeatureToggleState }>
    ) => {
      const { featureName } = action.payload;
      state[featureName] = !state[featureName];
    },
  },
});

export const { toggleFeature } = featureToggleSlice.actions;
export const selectToggleFeatureState =
  (featureName: keyof FeatureToggleState) => (state: RootState) =>
    state.featureToggle[featureName];
export default featureToggleSlice.reducer;
