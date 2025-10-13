import React from 'react';

function Home() {
  return (
    <div style={{ 
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{ 
        color: '#666',
        fontSize: '1.2rem',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;