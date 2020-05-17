import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
export default function SideCart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>cart items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: #fafafa;
  z-index: 1;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid #5fb7ea;
  transition: all 0.3s ease-in-out;
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
