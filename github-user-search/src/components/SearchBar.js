// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  width: 300px;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #007bff;
  }
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search GitHub users..."
      />
    </SearchContainer>
  );
};

export default SearchBar;