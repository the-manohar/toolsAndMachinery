import React, {Component} from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component{
    render(){
        <ProductContext.Provider value="hello from context">
            {this.props.children}
        </ProductContext.Provider>
        }return ()
    }


    const ProductConsumer = ProductContext.Consumer;

    export {ProductProvider , ProductConsumer}

