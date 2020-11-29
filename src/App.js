import React, { useState } from "react";
import ProductList from "./components/ProductList";
import data from "./data.json";

function App() {
  const initProducts = data.products;
  const [products, setProducts] = useState(initProducts);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  console.log(products);

  return (
    <div className="wrapper">
      <header className="header">
        <a href="#">shopping header</a>
      </header>

      <main className="main">
        <div className="main__content">
          <ProductList products={products} />
        </div>
        <div className="main__sidebar">side</div>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
