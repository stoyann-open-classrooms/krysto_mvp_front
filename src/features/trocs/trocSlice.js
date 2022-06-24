import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trocService from "./trocService";

const initialState = {
  trocs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getTrocs = createAsyncThunk(
  "trocs/gettrocs",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access_token;
      return await trocService.getTrocs(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const trocSlice = createSlice({
  name: "troc",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = trocSlice.actions;
export default trocSlice.reducer;
