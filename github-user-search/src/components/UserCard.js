// src/components/UserCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

const UserCard = () => {
  return (
    <Card>
      <h3>User Card Placeholder</h3>
      <p>User information will appear here</p>
    </Card>
  );
};

export default UserCard;