import { useState } from 'react'

const Navbar = ({ openAddIngredient, setOpenAddIngredient }) => {
  return (
    <>
    <div className='w-full flex bg-purple-400 p-3 justify-between items-center rounded-b-3xl'>
        <div>
            <h1 className='text-white text-3xl font-bold'>
                <span>Smart </span>
                <span className='text-purple-950'>Recipe</span>
            </h1>
        </div>
        <div>
            {/* <button className='bg-purple-950 text-white font-medium px-4 py-2 rounded-2xl' onClick={() => {
              setOpenAddIngredient({
                isShown: true,
                data: null
              })
            }}>ADD</button> */}
        </div>
    </div>
    </>
  )
}

export default Navbar