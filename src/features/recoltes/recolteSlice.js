import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  recoltes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const recolteSlice = createSlice({
  name: "recolte",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = recolteSlice.actions;
export default recolteSlice.reducer;
