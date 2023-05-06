import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products-slice";
import cartReducer from "../features/cart-slice";
import singleProductReducer from "../features/single-product-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
