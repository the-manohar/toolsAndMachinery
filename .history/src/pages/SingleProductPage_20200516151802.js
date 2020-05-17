import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductBcg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context";

function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductBcg} title="Single Product" />
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            console.log(`hello from loading`);
            return <h1>Product loading....</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image,
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`}
                      alt="single product"
                      className="img-fluid"
                    />
                  </div>
                  <div className=" col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">Model : {title}</h5>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}

export default SingleProductPage;
