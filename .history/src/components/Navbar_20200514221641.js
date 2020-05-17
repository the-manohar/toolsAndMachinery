import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
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
                <FaCartPlus className="nav-icon" onClick={handleCart} />
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

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: #fafafa;
  border-bottom: 3px solid #5fb7ea;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
    cursor: pointer;
  }
  .cart-items {
    background: #5fb7ea;
    color: #ffffff;
    font-size: 0.1;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
