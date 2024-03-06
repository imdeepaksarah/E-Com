import React from 'react'

const ProductsCarts = ({product}) => {
  return (
    <div className="product">
        <img
          src={product.image}
          alt=""
        />
        <h1>{product.title} </h1>
        <span>
          <h3>Price : {product.price}</h3>
          <button className="add_cart">Add to cart</button>
        </span>
      </div>
  )
}

export default ProductsCarts
