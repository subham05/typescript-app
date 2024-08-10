import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  value: number;
};
const initialState: CounterState = {
  value: 0,
};

const COUNTER = "counter";
export const counterSlice = createSlice({
  name: COUNTER,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
