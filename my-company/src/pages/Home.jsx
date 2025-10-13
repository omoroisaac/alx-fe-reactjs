import React from 'react';

function Home() {
  return (
    <div style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Welcome to TechCorp
      </h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '600px',
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        We are dedicated to delivering excellence in all our services. 
        Innovative solutions for modern businesses.
      </p>
      <button style={{
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;