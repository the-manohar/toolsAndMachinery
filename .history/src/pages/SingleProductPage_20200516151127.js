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
          return <h3>{title}</h3>;
        }}
      </ProductConsumer>
    </>
  );
}

export default SingleProductPage;
