import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipeCard from "./ChefRecipeCard";
import ChefBanner from "./ChefBanner";

const ChefRecipe = () => {
  const recipeData = useLoaderData();

  return (
    <>
      <ChefBanner />
      <div className="container py-5">
        <div className="pb-4 pt-3">
          <h2 className="fw-semibold">Some of his Recipe's are: </h2>
        </div>
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
