import React, { useState, useEffect } from "react";
import CartContent from "./components/CartContent";
import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";
import data from "./data.json";

let intialCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function App() {
  const initProducts = data.products;
  const [products, setProducts] = useState(initProducts);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState(intialCart);
  const [isInCart, setIsInCart] = useState(false);

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

  //add item to Cart
  const addProductToCart = (product) => {
    const newCartItems = [...cart];
    let itemInCardAlready = false;
    newCartItems.forEach((item) => {
      if (item._id === product._id) {
        item.unit++;
        itemInCardAlready = true;
        setCart(newCartItems);
      }
    });
    if (!itemInCardAlready) {
      setCart([...newCartItems, { ...product, unit: 1 }]);
    }
  };

  //set Cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //set item units in Card
  const cartItemUnitCount = (product) => {
    const newCartItems = [...cart];
    let values = Object.values(product);
    newCartItems.forEach((item) => {
      if (item._id === product._id) {
        if (values.includes("--neg") && item.unit > 1) {
          item.unit--;
          setCart(newCartItems);
        } else if (values.includes("++pos") && item.unit >= 1) {
          item.unit++;

          setCart(newCartItems);
        }
      }
    });
  };
  //remove item fromCart
  const removeItemFromCart = (product) => {
    const newCartItems = [...cart];
    const remainingItemsInCart = newCartItems.filter(
      (item) => item._id !== product._id
    );
    setCart(remainingItemsInCart);
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
          <ProductList
            products={products}
            addProductToCart={addProductToCart}
          />
        </div>
        <div className="main__sidebar">
          <CartContent
            cart={cart}
            cartItemUnitCount={cartItemUnitCount}
            removeItemFromCart={removeItemFromCart}
          />
        </div>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
