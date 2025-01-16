import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard'; // Import RecipeCard component

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Fetch data from TheMealDB API (example with search term "chicken")
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'); 
        setRecipes(response.data.meals); 
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4"> 
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Popular Recipes You Can't Miss</h1>
      <p className="mb-4 text-center">“If you are a chef, no matter how good a chef you are, it’s not good cooking for yourself; the joy is in cooking for others. It’s the same with music.”</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} /> 
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
