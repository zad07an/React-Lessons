import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../redux/features/single-product-slice";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleProduct, rejected } = useSelector(
    (state) => state.singleProduct
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  if (rejected) {
    return (
      <div>
        <p>{rejected}</p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <img src={singleProduct?.thumbnail} alt="" />
      </div>
      <div>
        <p>{singleProduct?.title}</p>
      </div>
    </div>
  );
}
