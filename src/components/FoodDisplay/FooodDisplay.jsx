import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FooodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='FoodDisplay' id='FoodDisplay'>
        <h2>Top dishes near you</h2>
    <div className="FoodDisplay-List">
        {food_list.map((item , index)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem  key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
    </div>
    </div>
  )
}

export default FooodDisplay