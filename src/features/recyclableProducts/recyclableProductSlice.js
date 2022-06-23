import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  recyclableProducts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const recyclableProductSlice = createSlice({
  name: "recyclableProduct",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = recyclableProductSlice.actions;
export default recyclableProductSlice.reducer;
