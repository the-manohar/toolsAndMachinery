import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SideCart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map((item) => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img src={item.image} width="35" alt="cart item" />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-uppercase text-capitalize">
                        amount : {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total : $ {cartTotal}
            </h4>
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
