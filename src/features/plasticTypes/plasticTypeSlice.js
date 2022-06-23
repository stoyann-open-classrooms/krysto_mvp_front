import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  plasticTypes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const plasticTypeSlice = createSlice({
  name: "plasticType",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = plasticTypeSlice.actions;
export default plasticTypeSlice.reducer;
