import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  krystoProducts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const krystoProductSlice = createSlice({
  name: "krystoProduct",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = krystoProductSlice.actions;
export default krystoProductSlice.reducer;
