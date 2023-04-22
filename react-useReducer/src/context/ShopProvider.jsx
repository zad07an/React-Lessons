import { createContext, useReducer } from "react";
import { initialState } from "../reducer/initialState";
import reducer from "../reducer/reducer";

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, initialState);

  const handleAddToCart = (item) => {
    const exist = data?.cartItems?.find((product) => product?.id === item?.id);
    if (exist) {
      dispatch({ type: "INCREMENT", payload: item?.id });
      return;
    } else {
      dispatch({ type: "ADD_TO_CART", payload: item });
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const handleDecrement = (id) => {
    const exist = data?.cartItems?.find((item) => item?.id === id);
    if (exist.quantity <= 1) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
      return;
    } else {
      dispatch({ type: "DECREMENT", payload: id });
    }
  };

  return (
    <ShopContext.Provider
      value={{
        handleAddToCart,
        data,
        handleRemoveFromCart,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
