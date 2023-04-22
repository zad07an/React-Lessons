import { useContext } from "react";
import { ShopContext } from "../context/ShopProvider";

export default function CartProduct({ item }) {
  const { handleRemoveFromCart, handleIncrement, handleDecrement } =
    useContext(ShopContext);

  return (
    <div className=" w-[800px] grid grid-cols-5 place-items-center border-2 border-gray-400 px-4">
      <div className=" w-[100px] h-[100px] flex items-center">
        <img src={item?.thumbnail} className=" w-full object-cover" alt="" />
      </div>
      <div>
        <p>{item?.title}</p>
      </div>
      <div>
        <p>${item?.price}</p>
      </div>
      <div className=" flex items-center gap-4">
        <button onClick={() => handleDecrement(item?.id)}>-</button>
        <p>{item?.quantity}x</p>
        <button onClick={() => handleIncrement(item?.id)}>+</button>
      </div>
      <div>
        <button
          className=" px-6 py-2 bg-red-500 text-white rounded-[5px]"
          onClick={() => handleRemoveFromCart(item?.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
