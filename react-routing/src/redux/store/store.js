import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products-slice";
import cartReducer from "../features/cart-slice"

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
});

export default store;
