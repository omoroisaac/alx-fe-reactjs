// src/components/SearchResults.js
import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchResults = () => {
  return (
    <ResultsContainer>
      <UserCard />
      <UserCard />
      <UserCard />
    </ResultsContainer>
  );
};

export default SearchResults;