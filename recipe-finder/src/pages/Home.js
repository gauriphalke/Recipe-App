import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/recipeSlice';
import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { recipes, status } = useSelector(state => state.recipes);

    const searchHandler = () => {
        if (query.trim()) {
            dispatch(fetchRecipes(query));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
            {/* Search Bar Section */}
            <div className="flex flex-col items-center gap-4 mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Recipe Finder</h1>
                <div className="flex w-full max-w-lg gap-4">
                    <input
                        type="text"
                        className="flex-1 p-3 border-2 border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Search for a recipe..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button 
                        onClick={searchHandler} 
                        className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300
                            ${query ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}
                        `}
                        disabled={!query}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Loading and Error Messages */}
            {status === 'loading' && <p className="text-center text-lg font-semibold">Loading...</p>}
            {status === 'failed' && <p className="text-center text-red-500 font-semibold">Error fetching data. Please try again.</p>}

            {/* Recipe Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recipes?.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>

            {/* No Results Message */}
            {recipes?.length === 0 && status === 'succeeded' && (
                <p className="text-center text-gray-500 font-semibold mt-8">
                    No recipes found. Try a different search term!
                </p>
            )}
        </div>
    );
}

export default Home;
