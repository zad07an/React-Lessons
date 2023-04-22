import useFetch from "../hooks/useFetch";
import Product from "./Product";

export default function Shop() {
  const products = useFetch("https://dummyjson.com/products");

  return (
    <section className=" w-full py-10">
      <div className=" w-full flex justify-center">
        <p className=" text-3xl py-10">Shop</p>
      </div>
      <div className=" w-full px-10 grid grid-cols-4 gap-4">
        {products?.map((item) => {
          return <Product key={item?.id} item={item} />;
        })}
      </div>
    </section>
  );
}
