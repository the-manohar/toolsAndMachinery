import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context";

function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductBcg} title="Single Product" />
    </>
  );
}

export default SingleProductPage;
