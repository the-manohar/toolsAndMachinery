import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function Cart() {
  return (
    <div>
      <Title title="your cart items" center />
      <CartColumns />
      <CartList />
      <CartTotals />
    </div>
  );
}

export default Cart;
