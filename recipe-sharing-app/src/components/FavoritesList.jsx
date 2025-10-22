import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const FavoritesList = () => {
  const favoriteRecipes = useRecipeStore(state => state.favoriteRecipes)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)

  if (favoriteRecipes.length === 0) {
    return (
      <div className="favorites-list">
        <div className="section-header">
          <h2>⭐ My Favorite Recipes</h2>
        </div>
        <div className="empty-favorites">
          <div className="empty-icon">❤️</div>
          <h3>No favorites yet</h3>
          <p>Start adding recipes to your favorites by clicking the heart icon on any recipe!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="favorites-list">
      <div className="section-header">
        <h2>⭐ My Favorite Recipes ({favoriteRecipes.length})</h2>
        <span className="section-subtitle">Your personal collection of loved recipes</span>
      </div>
      
      <div className="favorites-grid">
        {favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="favorite-card">
            <Link to={`/recipe/${recipe.id}`} className="recipe-link">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="recipe-meta">
                <span className="recipe-category">{recipe.category}</span>
                <span className="cooking-time">⏱️ {recipe.cookingTime} min</span>
              </div>
            </Link>
            <div className="favorite-actions">
              <button 
                onClick={() => removeFavorite(recipe.id)}
                className="remove-favorite-btn"
                title="Remove from favorites"
              >
                ❤️ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesList