import React from "react";
import ProductContext from "../contexts/ProductContext";

const ProductContext = createContext();
console.log(ProductContext.Provider);

// Components
import Product from "./Product";

const Products = () => {
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
