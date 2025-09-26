import React, { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'


const EditRecipeForm = ({ recipe, onClose }) => {
const updateRecipe = useRecipeStore((state) => state.updateRecipe)
const [title, setTitle] = useState(recipe.title || '')
const [description, setDescription] = useState(recipe.description || '')


const handleSubmit = (e) => {
e.preventDefault()
const trimmedTitle = title.trim()
if (!trimmedTitle) return


updateRecipe({ id: recipe.id, title: trimmedTitle, description: description.trim() })
if (onClose) onClose()
}


return (
<form onSubmit={handleSubmit} style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
<input value={title} onChange={(e) => setTitle(e.target.value)} aria-label="Edit title" />
<textarea value={description} onChange={(e) => setDescription(e.target.value)} aria-label="Edit description" />
<div style={{ display: 'flex', gap: '0.5rem' }}>
<button type="submit">Save changes</button>
<button type="button" onClick={onClose}>Cancel</button>
</div>
</form>
)
}


export default EditRecipeForm