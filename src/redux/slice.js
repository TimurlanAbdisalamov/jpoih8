import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    text: "",
  },
  reducers: {
    incrementCount: (state) => {
      if (state.count < 15) { // Ограничение на 15
        state.count++;
      }
    },
    decrementCount: (state) => {
      if (state.count > 0) { // Ограничение на 0
        state.count--;
      }
    },
    resetCount: (state) => {
      state.count = 0; // Сбрасываем в начальное состояние
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { incrementCount, decrementCount, resetCount, setText } = counterSlice.actions;
export default counterSlice.reducer;
