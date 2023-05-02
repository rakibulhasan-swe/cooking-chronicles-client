import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipeCard from "./ChefRecipeCard";

const ChefRecipe = () => {
  const recipeData = useLoaderData();

  return (
    <>
      <div className="container py-5">
        <div className="row g-4">
          {recipeData.map((recipe) => (
            <ChefRecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChefRecipe;
