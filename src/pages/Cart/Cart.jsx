import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const navigate = useNavigate();
  const {food_list , cartItems , removeFromcart , getTotalAmount} = useContext(StoreContext);

  return (
    <div className='Cart'>
      <div className="cart-items">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />
        {food_list.map((item,index)=>{
          if (cartItems[item.id]>0) {
            return (
              <>
              <div className='cart-items-tittle cart-item-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price*cartItems[item.id]}</p>
                <p onClick={()=>removeFromcart(item.id)} className='Cross'>x</p>
              </div>
              <hr />
              </>
            )
          }
        })}
      </div>


      <div className="cart-button">
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

            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>

        <div className="cart-promocode">
            <div>
              <p>If you have a promocde , Enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='PROMOCODE' />
                <button>Submit</button>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Cart