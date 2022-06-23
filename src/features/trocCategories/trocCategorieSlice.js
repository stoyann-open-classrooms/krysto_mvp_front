import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  trocCategorie: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const trocCategorieSlice = createSlice({
  name: "trocCategorie",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = trocCategorieSlice.actions;
export default trocCategorieSlice.reducer;
