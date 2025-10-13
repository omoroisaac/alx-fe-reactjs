import { Link, useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'
import FavoriteButton from './FavoriteButton'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)
  const selectedCategory = useRecipeStore((state) => state.selectedCategory)
  const maxCookingTime = useRecipeStore((state) => state.maxCookingTime)
  const navigate = useNavigate()

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all' || maxCookingTime !== ''
  const displayRecipes = hasActiveFilters ? filteredRecipes : recipes

  return (
    <div className="recipe-list">
      <div className="recipe-list-header">
        <h2>All Recipes</h2>
        <div className="recipe-count">
          Showing {displayRecipes.length} of {recipes.length} recipes
          {hasActiveFilters && ' (filtered)'}
        </div>
      </div>

      {displayRecipes.length === 0 ? (
        <div className="no-recipes-message">
          {hasActiveFilters ? (
            <>
              <h3>No recipes match your filters</h3>
              <p>Try adjusting your search criteria or clearing filters to see all recipes.</p>
            </>
          ) : (
            <p>No recipes yet. Add your first recipe!</p>
          )}
        </div>
      ) : (
        <div className="recipes-grid">
          {displayRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-card-header">
                <FavoriteButton recipeId={recipe.id} size="small" />
              </div>
              <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
                  <span className="recipe-category">{recipe.category}</span>
                  <span className="cooking-time">⏱️ {recipe.cookingTime} min</span>
                  <span className="ingredient-count">
                    🛒 {recipe.ingredients?.length || 0} ingredients
                  </span>
                </div>
              </Link>
              <div className="recipe-card-actions">
                <Link to={`/edit-recipe/${recipe.id}`} className="edit-link">
                  Edit
                </Link>
                <DeleteRecipeButton recipeId={recipe.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RecipeList