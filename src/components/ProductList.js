import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <ul className="product">
      {products.map((product) => {
        return <ProductItem key={product._id} product={product} />;
      })}
    </ul>
  );
};

export default ProductList;
