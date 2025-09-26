import React from 'react'
import { useRecipeStore } from '../store/recipeStore'


const DeleteRecipeButton = ({ recipeId }) => {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)


const handleDelete = () => {
deleteRecipe(recipeId)
}


return (
<button onClick={handleDelete}>Delete</button>
)
}


export default DeleteRecipeButton