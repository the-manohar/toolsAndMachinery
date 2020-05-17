import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import Cart from "../components/CartPage";
function CartPage() {
  return (
    <div>
      <Hero img={cartBcg} />
      <Cart />
    </div>
  );
}

export default CartPage;
