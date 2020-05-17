import React from "react";
import { ProductConsumer } from "../../context";
import PayPalBtn from "./PayPalBtn";

function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clearCart
                </button>
                <h3>subTotal: &#x20B9;{cartSubTotal}</h3>
                <h3>Tax: &#x20B9;{cartTax}</h3>
                <h3>Total: &#x20B9;{cartTotal}</h3>
                <PayPalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}

export default CartTotals;
