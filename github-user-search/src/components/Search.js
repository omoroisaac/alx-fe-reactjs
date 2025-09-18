// src/components/Search.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { fetchUserData } from '../services/githubService';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 400px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  &:focus {
    box-shadow: 0 2px 15px rgba(0,0,0,0.2);
  }
`;

const SearchButton = styled.button`
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #0056b3;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ResultContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 4px solid #007bff;
`;

const UserName = styled.h2`
  color: #333;
  margin-bottom: 0.5rem;
`;

const UserLogin = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const ProfileLink = styled.a`
  display: inline-block;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
  
  &:hover {
    background: #0056b3;
    text-decoration: none;
    color: white;
  }
`;

const Message = styled.div`
  color: #666;
  font-size: 1.1rem;
  text-align: center;
  padding: 2rem;
`;

const ErrorMessage = styled(Message)`
  color: #dc3545;
`;

const LoadingMessage = styled(Message)`
  color: #007bff;
`;

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    setSearchPerformed(true);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContainer>
      <Title>GitHub User Search</Title>
      
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
        <SearchButton type="submit" disabled={loading || !username.trim()}>
          {loading ? 'Searching...' : 'Search'}
        </SearchButton>
      </SearchForm>

      {loading && (
        <LoadingMessage>
          <p>Loading...</p>
        </LoadingMessage>
      )}

      {error && (
        <ErrorMessage>
          <p>Looks like we can't find the user</p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>{error}</p>
        </ErrorMessage>
      )}

      {userData && !loading && !error && (
        <ResultContainer>
          <UserAvatar src={userData.avatar_url} alt={userData.login} />
          <UserName>{userData.name || userData.login}</UserName>
          {userData.name && <UserLogin>@{userData.login}</UserLogin>}
          {userData.bio && <p style={{ color: '#666', marginBottom: '1rem' }}>{userData.bio}</p>}
          <ProfileLink 
            href={userData.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </ProfileLink>
        </ResultContainer>
      )}

      {searchPerformed && !userData && !loading && !error && (
        <Message>
          <p>No user found. Try searching for a different username.</p>
        </Message>
      )}
    </SearchContainer>
  );
};

export default Search;