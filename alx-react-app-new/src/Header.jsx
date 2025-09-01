import React from 'react';

function Header() {
  return (
    <header style={{
                    backgroundColor: '#2c3e50',
                    backgroundImage: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '2rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    borderBottom: '5px solid #e74c3c'
                }}>
                    <h1 style={{
                        margin: 0,
                        fontSize: '2.8rem',
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        <i className="fas fa-globe-americas" style={{ marginRight: '15px' }}></i>
                        My Favorite Cities
                    </h1>
                    <p style={{
                        margin: '10px 0 0',
                        fontSize: '1.2rem',
                        fontWeight: 300,
                        opacity: 0.9
                    }}>
                        Discover the most amazing urban destinations around the world
                    </p>
                     </header>
            );
        }

export default Header;
