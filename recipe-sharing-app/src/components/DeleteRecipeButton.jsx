import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false)
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteRecipe(recipeId)
    setShowConfirm(false)
    if (onDelete) {
      onDelete()
    } else {
      // Navigate to home if no custom onDelete handler provided
      navigate('/')
    }
  }

  return (
    <div className="delete-recipe-button">
      {showConfirm ? (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this recipe?</p>
          <div className="delete-confirmation-actions">
            <button onClick={handleDelete} className="confirm-delete-btn">
              Yes, Delete
            </button>
            <button onClick={() => setShowConfirm(false)} className="cancel-delete-btn">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setShowConfirm(true)} className="delete-btn">
          Delete Recipe
        </button>
      )}
    </div>
  )
}

export default DeleteRecipeButton