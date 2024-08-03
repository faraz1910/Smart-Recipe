import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'
import axios from 'axios'

const Layout = () => {

  const [openAddIngredient, setOpenAddIngredient] = useState({
    isShown: false,
    data: null,
  })

  const handleSearch = async () => {
    // Convert ingredients array to the required dictionary format
    const ingredientsDict = ingredients.reduce((acc, ingredient, index) => {
      acc[`ingredient_${index + 1}`] = ingredient;
      return acc;
    }, {});

    try {
      const response = await axios.post('http://localhost:5000/generate-recipes', {
        ingredients: ingredientsDict
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setRecipes(response.data.recipes || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const [ingredients, setIngredients] = useState(['Paneer', 'Tomato', 'Onion', 'Ginger', 'Garlic', 'Green Chilli', 'Capsicum', 'Coriander Leaves', 'Cumin Seeds', 'Turmeric Powder', 'Red Chilli Powder', 'Coriander Powder', 'Garam Masala', 'Salt', 'Oil', 'Water'])

  return (
    <>
    <Navbar openAddIngredient={openAddIngredient} setOpenAddIngredient={setOpenAddIngredient} ingredients={ingredients} setIngredients={setIngredients} />
    <Outlet context={{openAddIngredient, setOpenAddIngredient, ingredients, setIngredients, handleSearch}} />
    <Footer />
    </>
  )
}

export default Layout