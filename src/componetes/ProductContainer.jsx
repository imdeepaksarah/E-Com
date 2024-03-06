import React, { useContext } from "react";
import ProductsCarts from "./ProductsCarts";
import ProductContext from "../Contect/Products/ProductsContext";

const ProductContainer = () => {
  const {Products} = useContext(ProductContext)
 
    return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
     
        {
            // Products.map(product => <ProductsCarts key={product.id} product={product}/>)
            Products.map((product)=> <ProductsCarts key={product.id} product={product}/>)
        }


      
    </div>
  );
};

export default ProductContainer;
