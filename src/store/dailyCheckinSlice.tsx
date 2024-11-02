// dailyCheckinSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dailyCheckinSlice = createSlice({
  name: "dailyCheckin",
  initialState: false,
  reducers: {
    setDailyCheckin: (_state, action: PayloadAction<boolean>) => action.payload,
  },
});

// Export the action to use in components
export const { setDailyCheckin } = dailyCheckinSlice.actions;

// Export the reducer to configure in the store
export default dailyCheckinSlice.reducer;
