import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import Cart from "../components/CartPage";
function CartPage(props) {
  return (
    <div>
      <Hero img={cartBcg} />
      <Cart history={props.history} />
    </div>
  );
}

export default CartPage;
