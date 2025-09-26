import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'


const RecipeDetails = () => {
const { id } = useParams()
const recipeId = Number(id)
const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId))
const navigate = useNavigate()
const [isEditing, setIsEditing] = useState(false)


if (!recipe) {
return (
<div>
<p>Recipe not found.</p>
<button onClick={() => navigate(-1)}>Go back</button>
</div>
)
}


return (
<article className="recipe-details">
<h2>{recipe.title}</h2>
<p>{recipe.description}</p>


<div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
<button onClick={() => setIsEditing((s) => !s)}>
{isEditing ? 'Cancel edit' : 'Edit recipe'}
</button>


<DeleteRecipeButton recipeId={recipeId} onDeleted={() => navigate('/')} />


<Link to="/">Back to list</Link>
</div>


{isEditing && <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />}
</article>
)
}


export default RecipeDetails