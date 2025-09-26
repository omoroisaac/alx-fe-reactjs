import React, { useEffect } from 'react'
},
{
id: 2,
title: 'Pancakes',
description: 'Fluffy pancakes — great with maple syrup and berries.'
}
]


export default function App() {
const setRecipes = useRecipeStore((state) => state.setRecipes)


useEffect(() => {
setRecipes(sampleRecipes)
}, [setRecipes])


return (
<div className="app-container">
<header>
<h1>
<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
Recipe Sharing App
</Link>
</h1>
<p>Built with React + Zustand — add, view, edit, and delete recipes.</p>
</header>


<main>
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


<Route path="/recipes/:id" element={<RecipeDetails />} />
</Routes>
</main>


<footer>
<small>© Recipe Sharing App</small>
</footer>
</div>
)
}