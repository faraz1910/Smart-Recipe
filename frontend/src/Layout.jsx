import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

const Layout = () => {

  const [openAddIngredient, setOpenAddIngredient] = useState({
    isShown: false,
    data: null,
  })

  const [ingredients, setIngredients] = useState(['Paneer', 'Tomato', 'Onion', 'Ginger', 'Garlic', 'Green Chilli', 'Capsicum', 'Coriander Leaves', 'Cumin Seeds', 'Turmeric Powder', 'Red Chilli Powder', 'Coriander Powder', 'Garam Masala', 'Salt', 'Oil', 'Water'])

  return (
    <>
    <Navbar openAddIngredient={openAddIngredient} setOpenAddIngredient={setOpenAddIngredient} ingredients={ingredients} setIngredients={setIngredients} />
    <Outlet context={{openAddIngredient, setOpenAddIngredient, ingredients, setIngredients}} />
    <Footer />
    </>
  )
}

export default Layout