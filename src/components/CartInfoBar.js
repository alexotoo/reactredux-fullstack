import React from "react";

const CartInfoBar = ({ background, text }) => {
  //   console.log(props);
  //   console.log(props.age);
  return <div className={`bar -${background}`}>{text}</div>;
};

export default CartInfoBar;
