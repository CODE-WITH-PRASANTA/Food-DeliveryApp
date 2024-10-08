import React from 'react';
import './Header.css';
import headerImg from '../../assets/header_img.png'; // Import the image

const Header = () => {
  return (
    <div className='Header' style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a detacting array of dishes crafted with the finest ingredient and satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
