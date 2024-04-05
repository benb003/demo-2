"use client";
import { useEffect, useState } from "react";
import products from "../data";
import ProductItem from "./ProductItem";

const Products = () => {
  const [loadedproducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setLoadedProducts(products);
  }, []);

  return (
    <ul id="products">
      {loadedproducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
export default Products;
