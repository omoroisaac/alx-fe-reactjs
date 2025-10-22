import React from 'react'
import useRecipeStore from '../store/recipeStore'

const RecipeFilters = () => {
  const selectedCategory = useRecipeStore(state => state.selectedCategory)
  const setSelectedCategory = useRecipeStore(state => state.setSelectedCategory)
  const maxCookingTime = useRecipeStore(state => state.maxCookingTime)
  const setMaxCookingTime = useRecipeStore(state => state.setMaxCookingTime)
  const clearFilters = useRecipeStore(state => state.clearFilters)
  const categories = useRecipeStore(state => state.categories)

  const hasActiveFilters = selectedCategory !== 'all' || maxCookingTime !== ''

  return (
    <div className="recipe-filters">
      <h3>Filter Recipes</h3>
      
      <div className="filters-grid">
        <div className="filter-group">
          <label htmlFor="category-filter">Category</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="cooking-time-filter">Max Cooking Time (min)</label>
          <select
            id="cooking-time-filter"
            value={maxCookingTime}
            onChange={(e) => setMaxCookingTime(e.target.value)}
            className="filter-select"
          >
            <option value="">Any Time</option>
            <option value="15">15 minutes or less</option>
            <option value="30">30 minutes or less</option>
            <option value="45">45 minutes or less</option>
            <option value="60">60 minutes or less</option>
          </select>
        </div>

        {hasActiveFilters && (
          <div className="filter-group">
            <label>&nbsp;</label>
            <button 
              onClick={clearFilters}
              className="clear-filters-btn"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipeFilters