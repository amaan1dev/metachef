import React from "react";

export const RecipeDetailsPage = ({ recipe }) => {
  return (
    <div className="recipeDetailsPage">
      <h1>Recipe Details Page</h1>
      <div className="recipeDetails">
        <h2>{recipe.recipeName}</h2>
        <p>Cuisine: {recipe.cuisineType}</p>
        <p>Ingredients: {recipe.ingredients.join(", ")}</p>
        <p>Instructions: {recipe.instructions}</p>
        <img src={recipe.image} alt={recipe.recipeName} />
      </div>
    </div>
  );
};
