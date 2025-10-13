import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  )
  const updateRecipe = useRecipeStore(state => state.updateRecipe)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [''],
    instructions: '',
    cookingTime: 0
  })

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || '',
        description: recipe.description || '',
        ingredients: recipe.ingredients || [''],
        instructions: recipe.instructions || '',
        cookingTime: recipe.cookingTime || 0
      })
    }
  }, [recipe])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients]
    newIngredients[index] = value
    setFormData(prev => ({
      ...prev,
      ingredients: newIngredients
    }))
  }

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, '']
    }))
  }

  const removeIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      const newIngredients = formData.ingredients.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        ingredients: newIngredients
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (recipe) {
      const updatedRecipe = {
        ...recipe,
        ...formData,
        ingredients: formData.ingredients.filter(ing => ing.trim() !== '')
      }
      updateRecipe(updatedRecipe)
      navigate(`/recipe/${recipe.id}`)
    }
  }

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div className="edit-recipe-form">
      <h2>Edit Recipe</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cookingTime">Cooking Time (minutes)</label>
          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            value={formData.cookingTime}
            onChange={handleInputChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Ingredients</label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-input-group">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
              />
              <button 
                type="button" 
                onClick={() => removeIngredient(index)}
                className="remove-btn"
                disabled={formData.ingredients.length === 1}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addIngredient} className="add-btn">
            Add Ingredient
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            rows="6"
            placeholder="Enter step-by-step instructions..."
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Update Recipe
          </button>
          <button 
            type="button" 
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditRecipeForm