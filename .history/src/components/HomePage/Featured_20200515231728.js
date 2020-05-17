import React from "react";
import Product from "../Product";
import Title from "../Title";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center />
        <div className="row">
          <ProductConsumer>
            {(value) => {
              const { featuredProducts } = value;
              return featuredProducts.map((product) => (
                <Product key={product.id} product={product} />;
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}

export default Featured;
