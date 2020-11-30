import React, { useState } from "react";
import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";
import data from "./data.json";

function App() {
  const initProducts = data.products;
  const [products, setProducts] = useState(initProducts);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  //filter by product price
  const sortProducts = (e) => {
    let target = e.target.value;
    setSort(target);
    if (target === "lowest") {
      let newSortbyLowPrice = products.sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(newSortbyLowPrice);
    } else if (target === "highest") {
      let newSortbyHighPrice = products.sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(newSortbyHighPrice);
    }
  };

  //filter by available sizes
  const filterProducts = (e) => {
    let target = e.target.value;

    if (target === "" || target === "ALL") {
      setSize(target);
      setProducts(initProducts);
    } else {
      let newfilteredProducts = initProducts.filter((products) => {
        return products.SizesInStock.includes(target);
      });
      console.log(newfilteredProducts);
      setSize(target);
      setProducts(newfilteredProducts);
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <a href="#">shopping header</a>
      </header>

      <main className="main">
        <div className="main__content">
          <ProductFilter
            productsCount={products.length}
            size={size}
            sort={sort}
            sortProducts={sortProducts}
            filterProducts={filterProducts}
          />
          <ProductList products={products} />
        </div>
        <div className="main__sidebar">side</div>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
