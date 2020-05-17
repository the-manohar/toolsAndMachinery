import React, { Component } from "react";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" exact component={SingleProduct} />
            <Route component={Default} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
