// src/components/RecipeCard.jsx
import React from 'react';

const RecipeCard = ({ title, description }) => {
  return (
    <div className='border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
      <div>
        <h1 className='font-medium text-lg'>{title}</h1>
      </div>
      <div className='mt-2'>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
