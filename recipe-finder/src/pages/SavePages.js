// src/pages/SavePage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSavedRecipes, removeRecipe } from '../redux/recipeSlice';

const SavePage = () => {
    const savedRecipes = useSelector(selectSavedRecipes);
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Saved Recipes</h1>
            {savedRecipes.length > 0 ? (
                <ul className="space-y-4">
                    {savedRecipes.map((recipe, index) => (
                        <li 
                            key={index} 
                            className="p-4 border rounded-lg flex justify-between items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                        >
                            <span className="text-lg text-gray-800">{recipe}</span>
                            <button
                                onClick={() => dispatch(removeRecipe(recipe))}
                                className="text-red-500 hover:text-red-700 font-semibold"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-lg text-center">No saved recipes yet.</p>
            )}
        </div>
    );
};

export default SavePage;

