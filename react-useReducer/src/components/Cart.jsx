import { useContext } from "react";
import { ShopContext } from "../context/ShopProvider";
import CartProduct from "./CartProduct";

export default function Cart() {
  const { data } = useContext(ShopContext);

  return (
    <section className=" w-full h-[400px]">
      <div className=" w-full flex justify-center">
        <p className=" text-3xl py-10">Cart</p>
      </div>
      {data?.cartItems.length === 0 ? (
        <div className=" w-full h-full flex items-center justify-center">
          <p className=" text-2xl text-red-500">Cart is empty</p>
        </div>
      ) : (
        <div className=" w-full px-10 flex flex-col items-center gap-4">
          {data?.cartItems?.map((item) => {
            return <CartProduct key={item?.id} item={item} />;
          })}
        </div>
      )}
    </section>
  );
}
