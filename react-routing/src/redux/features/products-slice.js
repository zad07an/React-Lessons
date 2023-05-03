import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const res = await axios.get(API_URL);
    return await res.data.products;
  } catch (err) {
    console.log(err)
  }
})

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: []
  },
  reducers: {
    addToCart() {
      // ...
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
  }
})

export const {addToCart} = productsSlice.actions;
export default productsSlice.reducer;