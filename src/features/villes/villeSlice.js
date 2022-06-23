import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  villes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const villeSlice = createSlice({
  name: "ville",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = villeSlice.actions;
export default villeSlice.reducer;
