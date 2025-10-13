import React from 'react';

function About() {
  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        About Us
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '3rem'
      }}>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>Our Story</h3>
          <p style={{ lineHeight: '1.6', color: '#555' }}>
            Founded in 1990, TechCorp has been at the forefront of technological innovation. 
            We started as a small team of passionate developers and have grown into a 
            multinational corporation serving clients worldwide.
          </p>
        </div>
        
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>Our Mission</h3>
          <p style={{ lineHeight: '1.6', color: '#555' }}>
            To empower businesses with cutting-edge technology solutions that drive growth, 
            efficiency, and innovation in an ever-evolving digital landscape.
          </p>
        </div>
        
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>Our Values</h3>
          <ul style={{ lineHeight: '1.6', color: '#555', paddingLeft: '1.5rem' }}>
            <li>Innovation & Creativity</li>
            <li>Customer Excellence</li>
            <li>Integrity & Transparency</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;