import React, { useContext } from 'react'
import './FoodItem.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id , name , price , description  , image}) => {

const {cartItems , addTocart , removeFromcart} = useContext(StoreContext)


  return (
    <div className='Food-Item'>
<div className="Food-item-img-container">
  <img src={image} alt="" className='Food-item-img'/>
  {!cartItems[id]
    ? <img src={assets.add_icon_white} alt="" className='add' onClick={()=>addTocart(id)} />
    : <div className='Food-item-counter'>
      <img src={assets.remove_icon_red} alt="" onClick={()=> removeFromcart(id)} />
      <p>{cartItems[id]}</p>
      <img src={assets.add_icon_green} alt=""  onClick={()=> addTocart(id)}/>
    </div>
  }
</div>

<div className="Food-item-info">
  <div className="Food-item-name-rating">
    <p>{name}</p>
    <img src={assets.rating_starts} alt="" />
  </div>

<p className='Food-item-desc'>{description}</p>
<p className='Food-item-price'>${price}</p>
</div>
    </div>
  )
}

export default FoodItem