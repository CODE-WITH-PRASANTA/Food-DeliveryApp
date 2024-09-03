import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FooodDisplay from '../../components/FoodDisplay/FooodDisplay'
import AppDown from '../../components/AppDown/AppDown'


const Home = () => {

  const [category , setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory} />
      <FooodDisplay category={category} />
      <AppDown/>
    </div>
  )
}

export default Home