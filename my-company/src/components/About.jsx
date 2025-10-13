import React from 'react';

function About() {
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
        About Us
      </h1>
      <p style={{ 
        color: '#666',
        fontSize: '1.1rem',
        lineHeight: '1.6'
      }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;