import React from 'react'
import { useRecipeStore } from '../store/recipeStore'


const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)


const handleDelete = () => {
const ok = window.confirm('Are you sure you want to delete this recipe?')
if (!ok) return


deleteRecipe(recipeId)
if (onDeleted) onDeleted()
}


return (
<button onClick={handleDelete} aria-label="Delete recipe">Delete</button>
)
}


export default DeleteRecipeButton