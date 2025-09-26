import React, { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'


const AddRecipeForm = () => {
const addRecipe = useRecipeStore((state) => state.addRecipe)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


const handleSubmit = (event) => {
event.preventDefault()
const trimmedTitle = title.trim()
if (!trimmedTitle) return


addRecipe({ id: Date.now(), title: trimmedTitle, description: description.trim() })
setTitle('')
setDescription('')
}


return (
<form className="add-recipe-form" onSubmit={handleSubmit}>
<input
type="text"
placeholder="Recipe title"
value={title}
onChange={(e) => setTitle(e.target.value)}
aria-label="Recipe title"
/>


<textarea
placeholder="Short description"
value={description}
onChange={(e) => setDescription(e.target.value)}
aria-label="Recipe description"
/>


<button type="submit">Add Recipe</button>
</form>
)
}


export default AddRecipeForm