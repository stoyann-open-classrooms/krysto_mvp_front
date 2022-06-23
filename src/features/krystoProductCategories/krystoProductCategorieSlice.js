import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  krystoProductCategories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const krystoProductCategorieSlice = createSlice({
  name: "krystoProduct",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = krystoProductCategorieSlice.actions;
export default krystoProductCategorieSlice.reducer;
