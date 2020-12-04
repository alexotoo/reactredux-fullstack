import React from "react";

const ProductItem = ({ product, addProductToCart }) => {
  const { _id, image, title, description, SizesInStock, price } = product;

  return (
    <li className="product__list">
      <article className="product__card">
        <a href="#" className="product__link">
          <img src={image} alt="product" className="product__card-img" />
          <p>{title}</p>
        </a>
        <div className="product__card-price">
          <p className="py-2">${parseFloat(price).toFixed(2)}</p>
          <button
            id={_id}
            className="btn"
            onClick={() => addProductToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </article>
    </li>
  );
};

export default ProductItem;
