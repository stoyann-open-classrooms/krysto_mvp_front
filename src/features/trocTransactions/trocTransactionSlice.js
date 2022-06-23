import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  trocTransactions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const trocTransactionOffreSlice = createSlice({
  name: "trocTransactionOffre",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = trocTransactionOffreSlice.actions;
export default trocTransactionOffreSlice.reducer;
