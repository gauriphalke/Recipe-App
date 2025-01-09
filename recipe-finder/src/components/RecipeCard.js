import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img 
                src={recipe.strMealThumb} 
                alt={`Image of ${recipe.strMeal}`} 
                className="w-full h-48 object-cover" 
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 truncate">{recipe.strMeal}</h2>
                <Link 
                    to={`/recipe/${recipe.idMeal}`} 
                    className="text-blue-500 hover:underline mt-2 block"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default RecipeCard;
