import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add your first recipe!</p>
      ) : (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
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