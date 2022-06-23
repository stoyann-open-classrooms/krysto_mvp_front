import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profilService from "./profilService";

const initialState = {
  profils: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create new profil
export const createProfil = createAsyncThunk(
  "profil/create",
  async (profilData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access_token;
      return await profilService.createProfil(profilData, token);
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

// Get user Profil
export const getProfils = createAsyncThunk(
  "profils/getProfils",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access_token;
      return await profilService.getProfils(token);
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

export const profilSlice = createSlice({
  name: "profil",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfil.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProfil.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profils.push(action.payload);
      })
      .addCase(createProfil.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProfils.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfils.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profils = action.payload;
      })
      .addCase(getProfils.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = profilSlice.actions;
export default profilSlice.reducer;
