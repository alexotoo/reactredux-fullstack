import React from "react";
import CartInfoBar from "./CartInfoBar";

const CartContent = ({ cart, cartItemUnitCount, removeItemFromCart }) => {
  console.log(cart.length);

  //calculate subTotal
  const cartsubTotal = () => {
    if (!cart.length) {
      return 0;
    } else {
      let totalCart = cart.map((item) => {
        return item.price * item.unit;
      });
      return totalCart.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    }
  };
  let subTotal = parseFloat(cartsubTotal()).toFixed(2);
  console.log(subTotal);

  return (
    <div className="cart">
      <div className="cart__header">
        {cart.length === 0 ? (
          <div>
            <CartInfoBar text={"Your Cart is empty"} background={"green"} />
            <CartInfoBar text={"Sign In"} background={"green"} />
            <CartInfoBar text={"Start Shopping"} background={"gray"} />
          </div>
        ) : (
          <div className="cartbardiv">
            <CartInfoBar text={"Cart"} background={"green"} />
            <div className="flex bolder">
              <span>{cart.length} Product(s)</span>
              <span> Subtotal: ${subTotal}</span>
            </div>

            <CartInfoBar text={"Continue Shopping"} background={"gray"} />
            <CartInfoBar text={"Checkout"} background={"orange"} />
          </div>
        )}
      </div>
      <div>
        <ul>
          {cart.map((item) => (
            <li key={item._id} className="cart__items">
              <div>
                <img src={item.image} alt="" className="cart__items-img"></img>
              </div>
              <div className="flex-me">
                <p className="bolder ">{item.title}</p>
                <div className="cart__items-unit">
                  <span
                    className="neg"
                    onClick={() =>
                      cartItemUnitCount({ ...item, count: "--neg" })
                    }
                  >
                    -
                  </span>{" "}
                  <span>{item.unit}</span>{" "}
                  <span
                    className="pos"
                    onClick={() =>
                      cartItemUnitCount({ ...item, count: "++pos" })
                    }
                  >
                    +
                  </span>
                </div>
              </div>

              <div className="flex-me">
                <button onClick={() => removeItemFromCart(item)}>x</button>
                <p className="bolder ">
                  {parseFloat(item.price * item.unit).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartContent;
