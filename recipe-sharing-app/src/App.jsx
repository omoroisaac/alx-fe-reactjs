import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Recipe Store with Zustand</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;