import React from 'react'
import CardsItem from '../componetes/CardsItem'

const Cards = () => {
  return (
    <div className="cart-container">

    <div className="cart-items">

    <CardsItem/>

    </div>
    <div className="bill-section">
        <h1>Total Amount : <br></br>  $100</h1>
        <button className="pay-btn">Pay Now</button>

</div>
   </div>
  )
}

export default Cards
