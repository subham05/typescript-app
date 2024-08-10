import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const WALKTHROUGH = "walkthrough";

interface WalkthroughState {
  isWalkthroughDone: boolean;
}

const initialState: WalkthroughState = {
  isWalkthroughDone: false,
};

export const walkthroughSlice = createSlice({
  name: WALKTHROUGH,
  initialState,
  reducers: {
    walkThroughDone: (state, action: PayloadAction<{ isDone: boolean }>) => {
      state.isWalkthroughDone = action.payload.isDone;
    },
  },
});

// Export actions
export const { walkThroughDone } = walkthroughSlice.actions;

// Export reducer
export default walkthroughSlice.reducer;
