import create from 'zustand'


export const useRecipeStore = create((set) => ({
recipes: [],


// add a recipe
addRecipe: (newRecipe) =>
set((state) => ({ recipes: [...state.recipes, newRecipe] })),


// replace whole list (useful for initialization)
setRecipes: (recipes) => set({ recipes }),


// update an existing recipe by id (expects full recipe object with id)
updateRecipe: (updated) =>
set((state) => ({
recipes: state.recipes.map((r) => (r.id === updated.id ? { ...r, ...updated } : r))
})),


// delete by id
deleteRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),


// optional convenience: clear all
clearRecipes: () => set({ recipes: [] })
}))