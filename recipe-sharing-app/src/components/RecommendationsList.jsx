import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations)
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)
  const favorites = useRecipeStore(state => state.favorites)

  // Generate recommendations when favorites change
  useEffect(() => {
    generateRecommendations()
  }, [favorites, generateRecommendations])

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <div className="section-header">
          <h2>💫 Recommended For You</h2>
        </div>
        <div className="empty-recommendations">
          <div className="empty-icon">🔍</div>
          <h3>Finding your perfect recipes...</h3>
          <p>Add some recipes to your favorites to get personalized recommendations!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="recommendations-list">
      <div className="section-header">
        <h2>💫 Recommended For You</h2>
        <span className="section-subtitle">
          {favorites.length > 0 
            ? "Based on your favorite recipes" 
            : "Popular recipes you might like"
          }
        </span>
      </div>
      
      <div className="recommendations-grid">
        {recommendations.map((recipe) => (
          <div key={recipe.id} className="recommendation-card">
            <div className="recommendation-badge">Recommended</div>
            <Link to={`/recipe/${recipe.id}`} className="recipe-link">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="recipe-meta">
                <span className="recipe-category">{recipe.category}</span>
                <span className="cooking-time">⏱️ {recipe.cookingTime} min</span>
                <span className="popularity">⭐ {recipe.popularity}/10</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendationsList