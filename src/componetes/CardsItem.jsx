import React from 'react'

const CardsItem = () => {
  return (
    <div className="cart-item">
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt=""/>
   <span>
    <h1>Product Name</h1>
    <h3>Rate : $100</h3>
    <h3>Qty : 1</h3>
   </span>
   <button className="remove-btn">Remove Item</button>
</div>
  )
}

export default CardsItem
