import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* title */}
              <Title title="our products" center />
              {/* filteredProducts */}
              <ProductFilter />
              {/* products */}
              {/* row */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products: {filteredProducts.length}
                  </h6>
                </div>
              </div>
              <div className="row py-5">
                {filteredProducts.map((product) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}

export default Products;
