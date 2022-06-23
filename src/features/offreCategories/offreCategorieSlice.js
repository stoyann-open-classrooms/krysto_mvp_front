import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  offreCategories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const offreCategorieSlice = createSlice({
  name: "offreCategorie",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = offreCategorieSlice.actions;
export default offreCategorieSlice.reducer;
