// store.ts
import { configureStore } from "@reduxjs/toolkit";
import dailyCheckinReducer from "./dailyCheckinSlice";

const store = configureStore({
  reducer: {
    dailyCheckin: dailyCheckinReducer,
  },
});

// TypeScript types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
