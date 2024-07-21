import React, { useState } from "react";
import SearchInput from "../../components/SearchInput";
import RecipeCard from "../../components/RecipeCard";
import Modal from "react-modal";
import AddIngredients from "../../components/AddIngredients";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const {
    openAddIngredient,
    setOpenAddIngredient,
    ingredients,
    setIngredients,
  } = useOutletContext();

  const onDeleteIngredient = (item) => {
    setIngredients(ingredients.filter((ingredient) => ingredient !== item));
  };

  const onClose = () => {
    setOpenAddIngredient({
      isShown: false,
      data: null,
    });
  };

  const onAddIngredient = (item) => {
    setIngredients([...ingredients, item]);
  };

  return (
    <>
      {/* Search Box */}

      <div className="items-center w-full">
        <div className="flex m-auto items-center justify-center max-w-[50%] mt-5 bg-purple-300 p-4 rounded-3xl">
          <SearchInput />
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-md:m-5">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>

      {/* Modal for adding ingredients */}
      <Modal
        isOpen={openAddIngredient.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddIngredients
          onClose={onClose}
          ingredients={ingredients}
          onDeleteIngredient={onDeleteIngredient}
          onAddIngredient={onAddIngredient}
        />
      </Modal>
    </>
  );
};

export default Home;
