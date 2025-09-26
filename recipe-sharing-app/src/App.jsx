import React, { useEffect } from 'react'
import { useRecipeStore } from './store/recipeStore'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'


const sampleRecipes = [
{
id: 1,
title: 'Spaghetti Bolognese',
description: 'Classic Italian pasta with a rich tomato and beef sauce.'
},
{
id: 2,
title: 'Pancakes',
description: 'Fluffy pancakes — great with maple syrup and berries.'
}
]


export default function App() {
const setRecipes = useRecipeStore(state => state.setRecipes)


// initialize with sample recipes on first mount
useEffect(() => {
setRecipes(sampleRecipes)
}, [setRecipes])


return (
<div className="app-container">
<header>
<h1>Recipe Sharing App</h1>
<p>Built with React + Zustand — add and view recipes.</p>
</header>


<main>
<AddRecipeForm />
<RecipeList />
</main>


<footer>
<small>© Recipe Sharing App</small>
</footer>
</div>
)
}