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

  const [ingredients, setIngredients] = useState([])

  return (
    <>
    <Navbar openAddIngredient={openAddIngredient} setOpenAddIngredient={setOpenAddIngredient} ingredients={ingredients} setIngredients={setIngredients} />
    <Outlet context={{openAddIngredient, setOpenAddIngredient, ingredients, setIngredients}} />
    <Footer />
    </>
  )
}

export default Layout