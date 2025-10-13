import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Pancakes",
      description: "Fluffy homemade pancakes perfect for breakfast",
      ingredients: ["1 cup flour", "2 tbsp sugar", "1 tbsp baking powder", "1 cup milk", "1 egg", "2 tbsp melted butter"],
      instructions: "Mix dry ingredients. Add wet ingredients. Cook on griddle until golden brown.",
      cookingTime: 20,
      category: "breakfast"
    },
    {
      id: 2,
      title: "Vegetable Stir Fry",
      description: "Quick and healthy vegetable stir fry",
      ingredients: ["2 cups mixed vegetables", "2 tbsp soy sauce", "1 tbsp olive oil", "2 cloves garlic", "1 tsp ginger"],
      instructions: "Heat oil. Add garlic and ginger. Stir fry vegetables. Add soy sauce and serve.",
      cookingTime: 15,
      category: "lunch"
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies",
      ingredients: ["2 1/4 cups flour", "1 tsp baking soda", "1 tsp salt", "1 cup butter", "3/4 cup sugar", "2 cups chocolate chips"],
      instructions: "Cream butter and sugars. Add eggs and vanilla. Mix in dry ingredients. Bake at 375°F for 9-11 minutes.",
      cookingTime: 25,
      category: "dessert"
    }
  ],
  
  // Search and filter states
  searchTerm: '',
  selectedCategory: 'all',
  maxCookingTime: '',
  
  // Actions for recipes
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and filter actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  setMaxCookingTime: (time) => set({ maxCookingTime: time }),
  
  clearFilters: () => set({ 
    searchTerm: '',
    selectedCategory: 'all',
    maxCookingTime: ''
  }),
  
  // Computed filtered recipes
  get filteredRecipes() {
    const { recipes, searchTerm, selectedCategory, maxCookingTime } = get();
    
    return recipes.filter(recipe => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
      
      // Cooking time filter
      const matchesCookingTime = maxCookingTime === '' || recipe.cookingTime <= parseInt(maxCookingTime);
      
      return matchesSearch && matchesCategory && matchesCookingTime;
    });
  },
  
  // Get unique categories for filter dropdown
  get categories() {
    const categories = ['all', ...new Set(get().recipes.map(recipe => recipe.category))];
    return categories;
  }
}))

export default useRecipeStore