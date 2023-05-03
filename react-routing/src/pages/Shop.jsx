import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/products-slice";
import { addToCart } from "../redux/features/cart-slice";

export default function Shop() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className=" w-full px-[60px] py-[40px] grid grid-cols-4 gap-4">
      {products?.map((item) => {
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
                onClick={() => dispatch(addToCart(item))}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
