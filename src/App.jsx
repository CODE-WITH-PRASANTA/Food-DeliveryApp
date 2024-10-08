import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin , setshowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <> </>}
     <div className='App'>
      <Navbar setshowLogin={setshowLogin} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<Placeorder />}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App