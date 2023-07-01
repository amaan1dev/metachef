import React from "react";

export const FilterRecipe = ({ handleFilterChange }) => {
  return (
    <div className="filtersBox">
      <input
        type="text"
        placeholder="Search the item you want"
        onChange={handleFilterChange}
      />
      <div className="filterOptions">
        <label>
          <input type="radio" name="recipeName" onChange={handleFilterChange} />
          Recipe Name
        </label>
        <label>
          <input type="radio" name="ingredients" onChange={handleFilterChange} />
          Ingredients
        </label>
        <label>
          <input type="radio" name="cuisineType" onChange={handleFilterChange} />
          Cuisine Type
        </label>
      </div>
    </div>
  );
};
