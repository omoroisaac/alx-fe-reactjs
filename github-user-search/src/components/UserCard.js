// src/components/UserCard.js
import React from 'react';
import styled from 'styled-components';
import { FiUser, FiStar, FiGitBranch, FiLink } from 'react-icons/fi';

const Card = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
  width: 280px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 3px solid #007bff;
`;

const UserName = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const UserLogin = styled.p`
  color: #666;
  margin-bottom: 15px;
  font-size: 0.9rem;
`;

const UserBio = styled.p`
  color: #777;
  margin-bottom: 20px;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 10px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-weight: bold;
  color: #007bff;
  font-size: 1.1rem;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

const ProfileLink = styled.a`
  display: inline-flex;
  align-items: center;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    background: #0056b3;
    color: white;
    text-decoration: none;
  }

  svg {
    margin-right: 5px;
  }
`;

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <Card>
      <Avatar src={user.avatar_url} alt={user.login} />
      <UserName>{user.name || user.login}</UserName>
      <UserLogin>@{user.login}</UserLogin>
      
      {user.bio && <UserBio>{user.bio}</UserBio>}
      
      <StatsContainer>
        <Stat>
          <FiUser size={16} />
          <StatNumber>{user.followers}</StatNumber>
          <StatLabel>Followers</StatLabel>
        </Stat>
        <Stat>
          <FiStar size={16} />
          <StatNumber>{user.public_repos}</StatNumber>
          <StatLabel>Repos</StatLabel>
        </Stat>
        <Stat>
          <FiGitBranch size={16} />
          <StatNumber>{user.following}</StatNumber>
          <StatLabel>Following</StatLabel>
        </Stat>
      </StatsContainer>
      
      <ProfileLink href={user.html_url} target="_blank" rel="noopener noreferrer">
        <FiLink size={16} />
        View Profile
      </ProfileLink>
    </Card>
  );
};

export default UserCard;