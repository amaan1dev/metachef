import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ recipeName, cuisineType, image, recipeId }) => {
  return (
    <Link to={`/recipes/${recipeId}`} className="RecipeCard">
      <img className="RecipeCard__image" src={image} alt={recipeName} />
      <div className="RecipeCard__details">
        <h2>{recipeName}</h2>
        <p>Cuisine: {cuisineType}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
