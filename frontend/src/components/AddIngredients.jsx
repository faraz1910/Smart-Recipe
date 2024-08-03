// AddIngredients.jsx
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddIngredients = ({ onAddIngredient, onDeleteIngredient, ingredients, onClose }) => {
  const [newIngredient, setNewIngredient] = useState("");

  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <IoMdClose className="text-2xl cursor-pointer" onClick={onClose} />
      </div>
      <div>
        <h1 className="text-lg font-medium uppercase">Ingredients</h1>
      </div>

      <div className="mt-5 flex gap-2">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex p-2 bg-purple-300 font-medium text-purple-950 rounded items-center">
            <h1 className="text-sm ">{ingredient}</h1>
            <IoMdClose
              className="text-sm ml-2 cursor-pointer"
              onClick={() => onDeleteIngredient(ingredient)}
            />
          </div>
        ))}
      </div>

      <div className="flex mt-5 items-center gap-3">
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter Ingredient"
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
        </div>
        <div className="">
          <button
            className="bg-purple-400 text-white font-medium px-4 py-2 rounded-md"
            onClick={() => {
              onAddIngredient(newIngredient);
              setNewIngredient("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIngredients;
