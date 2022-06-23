import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  marques: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const marqueSlice = createSlice({
  name: "marque",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = marqueSlice.actions;
export default marqueSlice.reducer;
