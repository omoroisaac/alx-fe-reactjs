import { useState } from 'react'
import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false)
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

  const handleDelete = () => {
    deleteRecipe(recipeId)
    setShowConfirm(false)
    if (onDelete) {
      onDelete()
    }
  }

  return (
    <div className="delete-recipe-button">
      {showConfirm ? (
        <div className="delete-confirmation">
          <p>Are you sure?</p>
          <button onClick={handleDelete} className="confirm-delete-btn">
            Yes, Delete
          </button>
          <button onClick={() => setShowConfirm(false)} className="cancel-delete-btn">
            Cancel
          </button>
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