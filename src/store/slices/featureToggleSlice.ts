"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FeatureToggleState {
  search: boolean;
  cart: boolean;
  signIn: boolean;
  signUp: boolean;
  forgot: boolean;
  categories: boolean;
  sidebar: boolean;
  account: boolean;
}

const initialState: FeatureToggleState = {
  search: false,
  cart: false,
  signIn: false,
  signUp: false,
  forgot: false,
  categories: false,
  sidebar: false,
  account: false,
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
    setFeatureTrue: (
      state,
      action: PayloadAction<{ featureName: keyof FeatureToggleState }>
    ) => {
      const { featureName } = action.payload;
      state[featureName] = true;
    },
    setFeatureFalse: (
      state,
      action: PayloadAction<{ featureName: keyof FeatureToggleState }>
    ) => {
      const { featureName } = action.payload;
      state[featureName] = false;
    },
  },
});

export const { toggleFeature, setFeatureTrue, setFeatureFalse } =
  featureToggleSlice.actions;
export const selectToggleFeatureState =
  (featureName: keyof FeatureToggleState) => (state: RootState) =>
    state.featureToggle[featureName];
export default featureToggleSlice.reducer;
