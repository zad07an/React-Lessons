export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        products: action.payload,
      };
    case "ADD_TO_CART":
      return {
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item?.id !== action.payload
        ),
      };
    case "INCREMENT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item?.id === action.payload
            ? { ...item, quantity: item?.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item?.id === action.payload
            ? { ...item, quantity: item?.quantity - 1 }
            : item
        ),
      };
  }
}
