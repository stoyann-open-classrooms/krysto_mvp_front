import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  trocs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const trocSlice = createSlice({
  name: "troc",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = trocSlice.actions;
export default trocSlice.reducer;
