import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'


const Placeorder = () => {
  const {getTotalAmount} = useContext(StoreContext)

  return (
    <form className='placeorder'>
      <div className="placeorder-left">
        <p className='tittle'>Delivery Information</p>
        <div className="multi-filed">
          <input type="text" placeholder='First Nmae' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="text" placeholder='Email Adress'/>
        <input type="text" placeholder='Street' />

        <div className="multi-filed">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className="multi-filed">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone' />

      </div>


      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deliver Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount()+2}</b>
            </div>

            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>

      </div>
    </form>
  )
}

export default Placeorder