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
      category: "breakfast",
      popularity: 8
    },
    {
      id: 2,
      title: "Vegetable Stir Fry",
      description: "Quick and healthy vegetable stir fry",
      ingredients: ["2 cups mixed vegetables", "2 tbsp soy sauce", "1 tbsp olive oil", "2 cloves garlic", "1 tsp ginger"],
      instructions: "Heat oil. Add garlic and ginger. Stir fry vegetables. Add soy sauce and serve.",
      cookingTime: 15,
      category: "lunch",
      popularity: 7
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies",
      ingredients: ["2 1/4 cups flour", "1 tsp baking soda", "1 tsp salt", "1 cup butter", "3/4 cup sugar", "2 cups chocolate chips"],
      instructions: "Cream butter and sugars. Add eggs and vanilla. Mix in dry ingredients. Bake at 375°F for 9-11 minutes.",
      cookingTime: 25,
      category: "dessert",
      popularity: 9
    },
    {
      id: 4,
      title: "Greek Salad",
      description: "Fresh and healthy Mediterranean salad",
      ingredients: ["2 cucumbers", "4 tomatoes", "1 red onion", "200g feta cheese", "kalamata olives", "olive oil", "lemon juice"],
      instructions: "Chop vegetables. Combine with feta and olives. Dress with olive oil and lemon juice.",
      cookingTime: 10,
      category: "lunch",
      popularity: 6
    },
    {
      id: 5,
      title: "Beef Tacos",
      description: "Flavorful Mexican-style beef tacos",
      ingredients: ["500g ground beef", "taco seasoning", "taco shells", "lettuce", "tomato", "cheese", "sour cream"],
      instructions: "Cook beef with seasoning. Warm taco shells. Assemble with toppings.",
      cookingTime: 20,
      category: "dinner",
      popularity: 8
    }
  ],
  
  // Search and filter states
  searchTerm: '',
  selectedCategory: 'all',
  maxCookingTime: '',
  
  // Favorites and recommendations
  favorites: [],
  recommendations: [],
  
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
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId)
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
  
  // Favorites actions
  addFavorite: (recipeId) => set((state) => {
    // Check if already in favorites to avoid duplicates
    if (state.favorites.includes(recipeId)) {
      return state;
    }
    return { favorites: [...state.favorites, recipeId] };
  }),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  toggleFavorite: (recipeId) => set((state) => {
    const isFavorite = state.favorites.includes(recipeId);
    if (isFavorite) {
      return { favorites: state.favorites.filter(id => id !== recipeId) };
    } else {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),
  
  isFavorite: (recipeId) => {
    return get().favorites.includes(recipeId);
  },
  
  // Recommendations actions
  generateRecommendations: () => set((state) => {
    const favoriteRecipes = state.favorites.map(id => 
      state.recipes.find(recipe => recipe.id === id)
    ).filter(Boolean);
    
    let recommendations = [];
    
    if (favoriteRecipes.length > 0) {
      // Generate recommendations based on favorite categories and popularity
      const favoriteCategories = [...new Set(favoriteRecipes.map(recipe => recipe.category))];
      
      recommendations = state.recipes
        .filter(recipe => 
          !state.favorites.includes(recipe.id) && // Don't recommend favorites
          favoriteCategories.includes(recipe.category) && // Same category as favorites
          recipe.popularity >= 7 // High popularity recipes
        )
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 3); // Top 3 recommendations
    } else {
      // If no favorites, recommend popular recipes
      recommendations = state.recipes
        .filter(recipe => recipe.popularity >= 8)
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 3);
    }
    
    return { recommendations };
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
  
  // Get favorite recipes
  get favoriteRecipes() {
    const { recipes, favorites } = get();
    return favorites.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean);
  },
  
  // Get unique categories for filter dropdown
  get categories() {
    const categories = ['all', ...new Set(get().recipes.map(recipe => recipe.category))];
    return categories;
  }
}))

export default useRecipeStore