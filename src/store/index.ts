import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import counterReducer from "./counter/counterSlice";
import walkthroughReducer from "./walkthrough/walkthroughSlice";
import { CreateApi } from "./services/createApi";
export const store = configureStore({
  reducer: {
    counterReducer,
    authReducer,
    walkthroughReducer,
    [CreateApi.reducerPath]: CreateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CreateApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
