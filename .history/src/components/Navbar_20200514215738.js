import React from "react";
import { FaBars, faCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleCart, handleSidebar } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="tech store" />
              <div className="nav-cart">
                <FaCart className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

export default Navbar;
