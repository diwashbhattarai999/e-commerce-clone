"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartCounterReducer from "./slices/cartCounterSlice";
import featureToggleReducer from "./slices/featureToggleSlice";

export const store = configureStore({
  reducer: {
    cartCounterReducer,
    featureToggle: featureToggleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
