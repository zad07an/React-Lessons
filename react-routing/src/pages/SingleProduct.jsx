import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function SingleProduct() {

  const [searchParams, setSearchParams] = useSearchParams("");

  const {id} = useParams();
  
  useEffect(() => {
    setSearchParams("key=product" + id)
  }, [id])

  return (
    <div>Product {id}</div>
  )
}
