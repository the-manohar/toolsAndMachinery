import React from "react";
import { ProductConsumer } from "../context";

function HomePage() {
  return (
    <div>
      <ProductConsumer>{(value) => <h2>value</h2>}</ProductConsumer>
    </div>
  );
}

export default HomePage;
