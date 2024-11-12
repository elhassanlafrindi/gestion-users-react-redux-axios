import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../module/user/UserSlice";
export const store = configureStore({
  reducer: { user: userReducer },
});
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
