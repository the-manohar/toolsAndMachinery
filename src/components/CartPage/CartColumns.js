import React from "react";

function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        <div className="col-lg-2">
          <p className="text-uppercase text-danger">products</p>
        </div>

        <div className="col-lg-2">
          <p className="text-uppercase text-danger">name of product</p>
        </div>

        <div className="col-lg-2">
          <p className="text-uppercase text-danger">price</p>
        </div>

        <div className="col-lg-2">
          <p className="text-uppercase text-danger">quantity</p>
        </div>

        <div className="col-lg-2">
          <p className="text-uppercase text-danger">remove</p>
        </div>

        <div className="col-lg-2">
          <p className="text-uppercase text-danger">total</p>
        </div>
      </div>
    </div>
  );
}

export default CartColumns;
