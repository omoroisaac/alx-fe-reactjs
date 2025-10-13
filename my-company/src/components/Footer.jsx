import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#34495e',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{ margin: '0 0 1rem 0' }}>
          &copy; 2024 TechCorp. All rights reserved.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
          <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          <span style={{ cursor: 'pointer' }}>Careers</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;