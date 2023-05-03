import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/features/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems?.length < 1) {
    return (
      <div>
        <p>No cart items</p>
      </div>
    );
  }
  return (
    <div className=" w-full px-[60px] py-[40px] grid grid-cols-4 gap-4">
      {cartItems?.map((item) => {
        return (
          <div
            key={item?.id}
            className=" flex items-center flex-col justify-between gap-4 border-2 border-gray-3 pb-4"
          >
            <div className=" h-[200px] overflow-hidden">
              <img src={item?.thumbnail} alt="" className=" w-full bg-cover" />
            </div>
            <div className=" text-lg">
              <p>{item?.title}</p>
            </div>
            <div>
              <p className=" text-xl">${item?.price}</p>
            </div>
            <div>
              <button
                className=" py-1 px-8 bg-purple-500 text-white rounded-sm"
                onClick={() => dispatch(removeFromCart(item?.id))}
              >
                Delete Product
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
