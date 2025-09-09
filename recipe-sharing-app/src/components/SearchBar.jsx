import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        margin: '10px 0',
        padding: '8px',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #ccc'
      }}
    />
  );
};

export default SearchBar;