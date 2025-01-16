import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RecipeList from '../components/RecipeList';


const Main = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedRecipes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='); // Fetch random recipes
        const data = await response.json();
        setFeaturedRecipes(data.meals); // Assuming 'meals' is the key for the recipe array in the API response
      } catch (error) {
        console.error('Error fetching featured recipes:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the Recipe App</h1>
      <p className="text-lg mb-6 text-center">Explore delicious recipes and start cooking!</p>

      {isLoading && (
        <p className="text-center">Loading featured recipes...</p>
      )}

      {error && (
        <p className="text-center text-red-500">Error fetching featured recipes: {error.message}</p>
      )}

      {featuredRecipes.length > 0 && (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
          showIndicators={false}
        >
          {featuredRecipes.map((recipe) => (
            <div key={recipe.idMeal}> 
              <img src={recipe.strMealThumb} alt={recipe.strMeal} /> 
            </div>
          ))}
        </Carousel>
      )}

      <h2 className="mt-8 mb-4"><RecipeList /></h2>
      
    </div>
  );
};

export default Main;
