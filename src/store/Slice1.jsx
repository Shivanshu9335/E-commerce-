import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const Slice1 = createSlice({
  name: "counter",
  initialState,
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function
export const {} = Slice1.actions;

export default Slice1.reducer;
