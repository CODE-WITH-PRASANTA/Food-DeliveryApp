import React from 'react'
import './AppDown.css'
import { assets } from '../../assets/assets'

const AppDown = () => {
  return (
    <div className='app-down' id='appdown'>
        <p>For Better Experience Download <br /> Tamato App</p>
        <div className="app-down-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDown