import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [''],
    instructions: '',
    cookingTime: 0
  })

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

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.title.trim() && formData.description.trim()) {
      const newRecipe = {
        ...formData,
        ingredients: formData.ingredients.filter(ing => ing.trim() !== '')
      }
      addRecipe(newRecipe)
      setFormData({
        title: '',
        description: '',
        ingredients: [''],
        instructions: '',
        cookingTime: 0
      })
      navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <h2>Add New Recipe</h2>
      
      <div className="form-group">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Recipe Title"
          required
        />
      </div>

      <div className="form-group">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Recipe Description"
          rows="3"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          name="cookingTime"
          value={formData.cookingTime}
          onChange={handleInputChange}
          placeholder="Cooking Time (minutes)"
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
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleInputChange}
          placeholder="Enter step-by-step instructions..."
          rows="6"
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Add Recipe
      </button>
    </form>
  )
}

export default AddRecipeForm