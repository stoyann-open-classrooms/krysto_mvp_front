import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  partenaires: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const partenaireSlice = createSlice({
  name: "partenaire",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = partenaireSlice.actions;
export default partenaireSlice.reducer;
