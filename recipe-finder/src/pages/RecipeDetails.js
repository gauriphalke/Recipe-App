import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                if (res.data.meals) {
                    setRecipe(res.data.meals[0]);
                } else {
                    setError('Recipe not found');
                }
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching recipe');
                setLoading(false);
            });
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-lg text-gray-500">Loading...</p>
        </div>
    );
    if (error) return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-lg text-red-600">{error}</p>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
            <div className="flex justify-center">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-64 h-64 object-cover rounded-lg shadow-md" />
            </div>
            <div className="mt-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800">{recipe.strMeal}</h1>
                <p className="text-xl text-gray-600 mt-2"><strong>Category:</strong> {recipe.strCategory}</p>
                <p className="text-lg text-gray-700 mt-4"><strong>Instructions:</strong></p>
                <p className="mt-2 text-gray-600 leading-relaxed">{recipe.strInstructions}</p>
            </div>
        </div>
    );
}

export default RecipeDetails;
