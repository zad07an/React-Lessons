import { useContext } from "react";
import { ShopContext } from "../context/ShopProvider";

export default function Product({ item }) {
  const { handleAddToCart } = useContext(ShopContext);

  return (
    <div className=" flex items-center justify-between flex-col gap-4">
      <div className=" h-[320px]">
        <img
          src={item?.thumbnail}
          className=" w-full h-full object-cover"
          alt=""
        />
      </div>
      <div>
        <p>{item?.title}</p>
      </div>
      <div>
        <p>{item?.price}</p>
      </div>
      <div>
        <button onClick={() => handleAddToCart(item)}>Add to cart</button>
      </div>
    </div>
  );
}
