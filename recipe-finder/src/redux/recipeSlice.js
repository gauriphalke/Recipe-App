// src/redux/recipeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching recipes
export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async (query) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        return data.meals || [];  // return the array of meals or empty array if no recipes found
    }
);

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        savedRecipes: [],  // Initialize savedRecipes to an empty array
        status: 'idle',  // 'idle', 'loading', 'succeeded', 'failed'
    },
    reducers: {
        saveRecipe: (state, action) => {
            // Add the recipe to savedRecipes array
            state.savedRecipes.push(action.payload);
        },
        removeRecipe: (state, action) => {
            // Remove the recipe from savedRecipes array
            state.savedRecipes = state.savedRecipes.filter(recipe => recipe !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { saveRecipe, removeRecipe } = recipeSlice.actions;
export const selectSavedRecipes = (state) => state.recipes.savedRecipes;
export default recipeSlice.reducer;
