import React from "react";

const ProductItem = ({ product }) => {
  const { _id, image, title, description, SizesInStock, price } = product;

  return (
    <li className="product__list">
      <article className="product__card">
        <a href="#" className="product__link">
          <img src={image} alt="product" className="product__card-img" />
          <p>{title}</p>
        </a>
        <div className="product__card-price">
          <p className="py-2">${price}</p>
          <button className="btn">Add to Cart</button>
        </div>
      </article>
    </li>
  );
};

export default ProductItem;
