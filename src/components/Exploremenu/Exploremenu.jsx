import React from 'react'
import './Exploremenu.css'

import {menu_list} from '../../assets/assets'

const Exploremenu = ({category , setCategory}) => {
  return (
    <div className='Explore-menu' id='Exploremenu' >
        <h1>Explore our menu</h1>
        <p className='ExploreMenu-Text'>Choose from a diverse menu featuring a detacting array of dishes crafted with the finest ingredient and satisfy your craving and elevate your dining experience , On the delicious meal at a time.</p>

        <div className="Exploremenu-List">
            {menu_list.map((item , index)=>{
                return (
                    <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='ExploreMenu-List-Item'>
                        <img className={category===item.menu_name?"active": ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>

        <hr />
    </div>
  )
}

export default Exploremenu