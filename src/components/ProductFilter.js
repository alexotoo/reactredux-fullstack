import React from "react";

const ProductFilter = ({
  productsCount,
  size,
  sort,
  sortProducts,
  filterProducts,
}) => {
  return (
    <div className="products-filter">
      <div className="products-filter__result">{productsCount} Products</div>
      <div className="products-filter__sort">
        Order{" "}
        <select name="" id="" value={size} onChange={sortProducts}>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>{" "}
        </select>{" "}
      </div>
      <div className="products-filter__size">
        Filter{" "}
        <select name="" id="" value={size} onChange={filterProducts}>
          {" "}
          <option>ALL</option>
          <option value="S">S</option>
          <option value="XL">X</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
