import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useRecipeStore } from './store/recipeStore'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'


export default function App() {
const setRecipes = useRecipeStore((state) => state.setRecipes)


useEffect(() => {
setRecipes([
{ id: 1, title: 'Spaghetti', description: 'Italian pasta dish' },
{ id: 2, title: 'Pancakes', description: 'Fluffy breakfast food' }
])
}, [setRecipes])


return (
<div>
<h1>Recipe Sharing App</h1>
<Routes>
<Route
path="/"
element={(
<>
<AddRecipeForm />
<RecipeList />
</>
)}
/>
<Route path="/recipe/:id" element={<RecipeDetails />} />
</Routes>
</div>
)
}