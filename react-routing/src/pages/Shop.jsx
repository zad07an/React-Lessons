import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/products-slice";
import { addToCart } from "../redux/features/cart-slice";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [cats, setCats] = useState([]);

  const uniqueCats = [...new Set(products?.map((item) => item?.category))];

  const handleChange = (e) => {
    let { value, checked } = e.target;
    checked
      ? setCats((prev) => [...prev, value])
      : setCats(cats.filter((item) => item !== value));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleViewProduct = (id) => {
    navigate("/product/" + id);
  };

  return (
    <div className=" w-full px-[60px] py-[40px] grid grid-cols-4 gap-4">
      <div>
        {uniqueCats?.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={item}
                onChange={handleChange}
                id={index}
              />
              <label htmlFor={index}>{item}</label>
            </div>
          );
        })}
      </div>
      {products
        ?.filter((item) =>
          cats?.length > 0
            ? item.category === cats.find((cat) => cat === item?.category)
            : item
        )
        ?.map((item) => {
          return (
            <div
              key={item?.id}
              className=" flex items-center flex-col justify-between gap-4 border-2 border-gray-3 pb-4"
            >
              <div
                className=" h-[200px] overflow-hidden"
                onClick={() => handleViewProduct(item?.id)}
              >
                <img
                  src={item?.thumbnail}
                  alt=""
                  className=" w-full bg-cover"
                />
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
