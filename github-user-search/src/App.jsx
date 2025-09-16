// src/App.js
import React from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

function App() {
  return (
    <AppContainer>
      <Title>GitHub User Search</Title>
      <SearchBar />
      <SearchResults />
    </AppContainer>
  );
}

export default App;