import { configureStore, createSlice } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';
// Slice for recipes
const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        savedRecipes: []
    },
    reducers: {
        saveRecipe: (state, action) => {
            if (!state.savedRecipes.includes(action.payload)) {
                state.savedRecipes.push(action.payload);
            }
        },
        removeRecipe: (state, action) => {
            state.savedRecipes = state.savedRecipes.filter(
                (recipe) => recipe !== action.payload
            );
        }
    }
});

const store = configureStore({
    reducer: {
        recipes: recipeReducer,
    }
});

export const { saveRecipe, removeRecipe } = recipeSlice.actions;
export const selectSavedRecipes = (state) => state.recipes.savedRecipes;




export default store;
