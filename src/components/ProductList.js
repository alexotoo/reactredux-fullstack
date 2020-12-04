import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, addProductToCart }) => {
  return (
    <ul className="product">
      {products.map((product) => {
        return (
          <ProductItem
            key={product._id}
            product={product}
            addProductToCart={addProductToCart}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
