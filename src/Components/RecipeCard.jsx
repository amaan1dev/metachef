import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipeName, cuisineType, image }) => {
  return (
    <div className="RecipeCard">
      <img className="RecipeCard__image" src={image} alt={recipeName} />
      <div className="RecipeCard__details">
        <h2>{recipeName}</h2>
        <p>Cuisine: {cuisineType}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
