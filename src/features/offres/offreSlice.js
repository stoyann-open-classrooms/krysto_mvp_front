import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  offres: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const offreSlice = createSlice({
  name: "offre",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = offreSlice.actions;
export default offreSlice.reducer;
