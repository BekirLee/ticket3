import React, { useEffect } from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/Product/Product";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <div>
      {products.map((item) => (
        <Product product={item} />
      ))}
    </div>
  );
};

export default Products;
