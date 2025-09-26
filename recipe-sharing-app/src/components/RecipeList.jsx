import React from 'react'
import { useRecipeStore } from '../store/recipeStore'


const RecipeList = () => {
const recipes = useRecipeStore((state) => state.recipes)


if (!recipes.length) return <p>No recipes yet. Add one above!</p>


return (
<section className="recipe-list">
{recipes.map((recipe) => (
<article className="recipe-card" key={recipe.id}>
<h3>{recipe.title}</h3>
<p>{recipe.description}</p>
</article>
))}
</section>
)
}


export default RecipeList