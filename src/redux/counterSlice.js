import { createSlice } from "@reduxjs/toolkit";

const initialState = { counterValue: 111 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    reset: (state) => {
      state.counterValue = 111;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;