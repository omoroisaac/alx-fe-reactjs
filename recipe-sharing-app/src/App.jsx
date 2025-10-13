import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeList from './store/components/RecipeList'
import AddRecipeForm from './store/components/AddRecipeForm'
import RecipeDetails from './store/components/RecipeDetails'
import EditRecipeForm from './store/components/EditRecipeForm'
import SearchBar from './store/components/SearchBar'
import RecipeFilters from './store/components/RecipeFilters'
import FavoritesList from './store/components/FavoritesList'
import RecommendationsList from './store/components/RecommendationsList'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Recipe Sharing App</h1>
          <p>Share and discover amazing recipes!</p>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={
              <>
                <AddRecipeForm />
                <div className="search-filters-section">
                  <SearchBar />
                  <RecipeFilters />
                </div>
                <RecommendationsList />
                <FavoritesList />
                <RecipeList />
              </>
            } />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App