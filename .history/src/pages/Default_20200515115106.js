import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
function Default() {
  return (
    <>
      <Hero img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase">Page not Found</h2>
      </Hero>
    </>
  );
}

export default Default;
