// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { searchUsers, getUserDetails } from './services/githubApi';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setSearchPerformed(true);

    try {
      // First search for users
      const searchResult = await searchUsers(query);
      
      // If we have users, get detailed information for each
      if (searchResult.items && searchResult.items.length > 0) {
        const userDetailsPromises = searchResult.items.slice(0, 10).map(user => 
          getUserDetails(user.login)
        );
        
        const detailedUsers = await Promise.all(userDetailsPromises);
        setUsers(detailedUsers);
      } else {
        setUsers([]);
      }
    } catch (err) {
      setError(
        err.response?.status === 403 
          ? 'Rate limit exceeded. Please try again later.' 
          : err.response?.status === 404
          ? 'No users found. Please try a different search.'
          : 'Failed to search users. Please check your connection and try again.'
      );
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContainer>
      <Title>GitHub User Search</Title>
      <SearchBar onSearch={handleSearch} loading={loading} />
      <SearchResults 
        users={users} 
        loading={loading} 
        error={error}
        searchPerformed={searchPerformed}
      />
    </AppContainer>
  );
}

export default App;