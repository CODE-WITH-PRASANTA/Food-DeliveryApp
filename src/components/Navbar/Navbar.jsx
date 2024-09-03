import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js'
import {Link} from 'react-router-dom' 
import { StoreContext } from '../../Context/StoreContext.jsx'

const Navbar = ({setshowLogin}) => {


  const [menu , setMenu] = useState("Home")

  const {getTotalAmount} = useContext(StoreContext) 


  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#Exploremenu' onClick={()=>setMenu("Menu")} className={menu==="Menu"? "active":""}>Menu</a>
        <a href='#appdown' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"? "active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"? "active":""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt=""  />
        <div className="navbar-searchicon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setshowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar