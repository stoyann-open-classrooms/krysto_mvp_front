import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  transactionOffres: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const transactionOffreSlice = createSlice({
  name: "transactionOffre",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = transactionOffreSlice.actions;
export default transactionOffreSlice.reducer;
