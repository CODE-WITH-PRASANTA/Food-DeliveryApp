import React, { useState } from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/assets'

const LoginPopup = ({setshowLogin}) => {

    const [currState , setcurrState] = useState("Login")

  return (
    <div className='LoginPopup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>

            <div className="login-popoup-input">
                {
                    currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />
                }
                

                <input type="email" placeholder='Your Email' required />

                <input type="password" placeholder='Password' required />
            </div>

            <button>{currState==="Sign Up"?"Create Accout" : "Login"}</button>

            <div className="Login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing , i agree the term of use & privacy policy. </p>
            </div>
{
    currState==="Login"?<p>Create a new account? <span onClick={()=>setcurrState("Sign Up")}>Click Here</span></p>
    :<p>Already have an account?<span onClick={()=>setcurrState("Login")}>Login here</span></p>           
}
        </form>
    </div>
  )
}

export default LoginPopup