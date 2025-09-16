// src/components/SearchResults.js
import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const Message = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.1rem;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #007bff;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled(Message)`
  color: #dc3545;
`;

const SearchResults = ({ users, loading, error, searchPerformed }) => {
  if (loading) {
    return (
      <Message>
        <LoadingSpinner />
        <p style={{ marginTop: '20px' }}>Searching GitHub users...</p>
      </Message>
    );
  }

  if (error) {
    return (
      <ErrorMessage>
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <p>Please try again later.</p>
      </ErrorMessage>
    );
  }

  if (searchPerformed && users.length === 0) {
    return (
      <Message>
        <h3>No users found</h3>
        <p>Try searching for a different username.</p>
      </Message>
    );
  }

  if (!searchPerformed) {
    return (
      <Message>
        <h3>Welcome to GitHub User Search</h3>
        <p>Enter a username above to start searching!</p>
      </Message>
    );
  }

  return (
    <ResultsContainer>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;