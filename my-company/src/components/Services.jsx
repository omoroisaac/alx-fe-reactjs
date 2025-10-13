import React from 'react';

function Services() {
  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>
        Our Services
      </h1>
      <ul style={{ 
        color: '#666',
        fontSize: '1.1rem',
        lineHeight: '1.8'
      }}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;