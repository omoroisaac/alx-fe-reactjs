import { useParams, Link, useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  )

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe not found</h2>
        <Link to="/" className="back-link">← Back to Recipes</Link>
      </div>
    )
  }

  return (
    <div className="recipe-details">
      <Link to="/" className="back-link">← Back to Recipes</Link>
      
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <div className="recipe-actions">
          <Link to={`/edit-recipe/${recipe.id}`} className="edit-btn">
            Edit Recipe
          </Link>
          <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
        </div>
      </div>

      <div className="recipe-meta">
        <span className="cooking-time">⏱️ {recipe.cookingTime} minutes</span>
      </div>

      <p className="recipe-description">{recipe.description}</p>

      <div className="recipe-section">
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-section">
        <h3>Instructions</h3>
        <ol className="instructions-list">
          {recipe.instructions?.split('. ').filter(step => step.trim()).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default RecipeDetails