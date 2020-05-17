import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import "../App.css";

export default function HomePage() {
  return (
    <>
      <Hero title="TOOLS & MACHINERY" max="true">
        <Link
          to="/products"
          className="main-link"
          style={{ marginTop: "2rem" }}
        >
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
