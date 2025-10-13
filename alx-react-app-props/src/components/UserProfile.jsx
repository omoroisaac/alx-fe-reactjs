import React, { useContext } from 'react';  // Must import useContext
import UserContext from '../UserContext';   // Must import UserContext

function UserProfile() {
  const userData = useContext(UserContext);  // Must use useContext with UserContext

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;