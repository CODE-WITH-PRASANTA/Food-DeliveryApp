import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptatum est unde a perspiciatis impedit expedita quidem minima molestiae itaque, possimus quam. Qui quae tempore quasi. Aliquam, doloribus eius, laborum dolorum, laudantium et corrupti quia optio adipisci consequatur aspernatur blanditiis autem nemo at animi voluptates? Temporibus, laboriosam ipsum inventore maxime delectus consectetur dicta optio a culpa. Dicta minima deserunt ea!</p>

<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
    </div>

    <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
    </div>

    <div className="footer-content-right">
    <h2>Get In Touch</h2>
    <ul>
        <li>+1-21-1800-1600</li>
        <li>contact@tamato.com</li>
    </ul>
    </div>
</div>

<hr />

<p className='Footer-Copy-Right'>Copyright 2024 @ Tamato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer