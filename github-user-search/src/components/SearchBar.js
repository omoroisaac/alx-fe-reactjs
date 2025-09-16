// src/components/SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 25px;
  padding: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  width: 300px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #007bff;
  }
`;

const SearchButton = styled.button`
  background: #007bff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  margin-left: 5px;
  
  &:hover {
    background: #0056b3;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
        />
        <SearchButton type="submit" disabled={loading || !query.trim()}>
          <FiSearch size={20} />
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;