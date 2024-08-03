import React, { useState } from "react";
import SearchInput from "../../components/SearchInput";
import RecipeCard from "../../components/RecipeCard";
import Modal from "react-modal";
import AddIngredients from "../../components/AddIngredients";
import { useOutletContext } from "react-router-dom";
import Accordion from "../../components/Accordion";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const Home = () => {
  const {
    openAddIngredient,
    setOpenAddIngredient,
    ingredients,
    setIngredients,
    handleSearch
  } = useOutletContext();

  const [newIngredient, setNewIngredient] = useState("");

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
        <div className="flex m-auto items-center justify-center max-w-[50%] mt-5 bg-purple-300 p-4 rounded-3xl gap-3">
          {/* <SearchInput /> */}
          <div className="bg-white w-full rounded-xl px-4 flex gap-2">
            <input
              type="text"
              placeholder="Add ingredients..."
              className="p-2 bg-transparent outline-none w-full"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
            />
            <button
              className="hover:text-purple-900 text-purple-600"
              onClick={() => {
                if (newIngredient !== "") {
                  onAddIngredient(newIngredient);
                  setNewIngredient("");
                }
              }}
            >
              <FaPlus />
            </button>
          </div>
          <button className="font-medium bg-purple-900 px-4 py-2 rounded-xl text-white"onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Ingredients showing */}
      <div className="flex mx-4 m-auto items-center justify-center h-auto">
        <div className="mt-5 flex gap-2 h-auto flex-wrap mx-auto">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex p-2 bg-purple-300 font-medium text-purple-950 rounded items-center"
            >
              <h1 className="text-sm ">{ingredient}</h1>
              <IoMdClose
                className="text-sm ml-2 cursor-pointer"
                onClick={() => onDeleteIngredient(ingredient)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="container mx-auto py-10">
        <div className="">
          <Accordion />
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
