import React from "react";
import { ProductConsumer } from "../context";

function HomePage() {
  return (
    <div>
      <ProductConsumer>
        {(value) => {
          console.log(value);
        }}
      </ProductConsumer>
    </div>
  );
}

export default HomePage;
