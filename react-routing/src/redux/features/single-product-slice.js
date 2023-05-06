import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dummyjson.com/products";

const initialState = {
  singleProduct: {},
  rejected: "",
};

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/fetchSingleProduct",
  async (id, {rejectWithValue}) => {
    try {
      const res = await axios.get(API_URL + "/" + id);
      return await res.data;
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.rejected = action.payload
      });
  },
});

export const {} = singleProductSlice.actions;
export default singleProductSlice.reducer;
