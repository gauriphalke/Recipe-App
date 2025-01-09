import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async (query) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        return response.data.meals;
    }
);

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        status: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.recipes = action.payload;
                state.status = 'success';
            })
            .addCase(fetchRecipes.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export default recipeSlice.reducer;
