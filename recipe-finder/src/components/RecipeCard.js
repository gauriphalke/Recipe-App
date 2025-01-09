// src/components/RecipeCard.jsx
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveRecipe } from '../redux/store';

const RecipeCard = ({ recipe }) => {
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(saveRecipe(recipe.strMeal));
        alert(`${recipe.strMeal} has been saved!`);
    };

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold">{recipe.strMeal}</h2>
                <Link to={`/recipe/${recipe.idMeal}`} className="text-blue-500">View Details</Link>
                <button
                    onClick={handleSave}
                    className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                    Save Recipe
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;
