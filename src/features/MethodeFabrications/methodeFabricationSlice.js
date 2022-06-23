import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  methodeFabrications: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const methodeFabricationSlice = createSlice({
  name: "methodeFabrication",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = methodeFabricationSlice.actions;
export default methodeFabricationSlice.reducer;
