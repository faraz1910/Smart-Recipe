import React, { useState } from 'react';
import axios from 'axios';
import AddIngredients from './components/AddIngredients';
import SearchInput from './components/SearchInput';
import RecipeCard from './components/RecipeCard';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleAddIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleDeleteIngredient = (ingredient) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };

  

  return (
    <div>
      <AddIngredients
        onAddIngredient={handleAddIngredient}
        onDeleteIngredient={handleDeleteIngredient}
        ingredients={ingredients}
        onClose={() => {}}
      />
      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={() => setSearchValue('')}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.recipe}
              description={recipe.steps}
            />
          ))
        ) : (
          <p>No recipes found. Please try different ingredients.</p>
        )}
      </div>
    </div>
  );
};

export default App;
