import { useState } from 'react';
import { searchUsers, getUserDetails } from './services/githubAPI';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const searchResult = await searchUsers(query);
      
      // Get detailed information for each user
      const usersWithDetails = await Promise.all(
        searchResult.items.map(async (user) => {
          try {
            const userDetails = await getUserDetails(user.login);
            return userDetails;
          } catch (error) {
            console.error(`Error fetching details for ${user.login}:`, error);
            return user; // Return basic user info if details fail
          }
        })
      );
      
      setUsers(usersWithDetails);
    } catch (error) {
      setError('Failed to search users. Please try again.');
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Find GitHub users and explore their profiles</p>
      </header>
      
      <main className="app-main">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <UserList users={users} isLoading={isLoading} />
      </main>
      
      <footer className="app-footer">
        <p>Built with React & GitHub API</p>
      </footer>
    </div>
  );
}

export default App;