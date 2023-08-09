"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import cartCounterReducer from "./slices/cartCounterSlice";
import featureToggleReducer from "./slices/featureToggleSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
    searchReducer,
    cartCounterReducer,
    featureToggle: featureToggleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
