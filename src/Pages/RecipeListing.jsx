import React, { useEffect, useState } from "react";
import { fakeFetch } from "../Data/recipeData";
import RecipeCard from "../Components/RecipeCard";
import { FilterRecipe } from "../Components/FilterRecipe";

export const RecipeListing = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterBy, setFilterBy] = useState("recipeName");

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/recipes");
      setRecipeData(response.data);
      setFilteredRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filterValue === "") {
      setFilteredRecipes(recipeData);
    } else {
      const filtered = recipeData.filter((recipe) => {
        const propertyValue = recipe[filterBy];
        if (typeof propertyValue === "string") {
          return propertyValue.toLowerCase().includes(filterValue.toLowerCase());
        }
        return false;
      });
      setFilteredRecipes(filtered);
    }
  }, [filterValue, filterBy, recipeData]);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.name;
    if (selectedFilter === filterBy) {
      setFilterValue("");
      setFilterBy("");
    } else {
      setFilterValue("");
      setFilterBy(selectedFilter);
    }
  };

  return (
    <div className="RecipeListing">
      <FilterRecipe
        handleFilterChange={handleFilterChange}
        selectedFilter={filterBy}
      />

      <h1>All Recipes</h1>
      {filteredRecipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipeName={recipe.recipeName}
          cuisineType={recipe.cuisineType}
          image={recipe.image}
        />
      ))}
    </div>
  );
};
