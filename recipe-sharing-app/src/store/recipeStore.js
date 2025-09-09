import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set, get) => ({
      recipes: [],
      searchTerm: '',
      filteredRecipes: [],

      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
          filteredRecipes: [...state.recipes, newRecipe], // keep filters in sync
        })),

      setRecipes: (recipes) =>
        set({
          recipes,
          filteredRecipes: recipes,
        }),

      setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes(); // trigger filtering whenever term changes
      },

      filterRecipes: () =>
        set((state) => ({
          filteredRecipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          ),
        })),
    }),
    {
      name: 'recipe-storage', // localStorage key
    }
  )
);