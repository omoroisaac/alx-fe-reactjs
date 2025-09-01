import React from 'react';

function Footer() {
  return (
    <footer style={{
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    textAlign: 'center',
                    padding: '30px',
                    borderTop: '5px solid #e74c3c'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        maxWidth: '1000px',
                        margin: '0 auto 25px'
                    }}>
                        <div style={{ margin: '15px' }}>
                            <h3 style={{
                                color: '#3498db',
                                marginBottom: '15px',
                                fontSize: '1.3rem'
                            }}>Explore</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ margin: '8px 0' }}>Destinations</li>
                                <li style={{ margin: '8px 0' }}>Travel Guides</li>
                                <li style={{ margin: '8px 0' }}>Photo Galleries</li>
                            </ul>
                        </div>
                        
                        <div style={{ margin: '15px' }}>
                            <h3 style={{
                                color: '#3498db',
                                marginBottom: '15px',
                                fontSize: '1.3rem'
                            }}>Connect</h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '15px',
                                fontSize: '1.5rem'
                            }}>
                                <i className="fab fa-facebook" style={{ color: '#3b5998' }}></i>
                                <i className="fab fa-twitter" style={{ color: '#1da1f2' }}></i>
                                <i className="fab fa-instagram" style={{ color: '#e4405f' }}></i>
                               <i className="fab fa-pinterest" style={{ color: '#bd081c' }}></i>
                            </div>
                        </div>
                        
                        <div style={{ margin: '15px' }}>
                            <h3 style={{
                                color: '#3498db',
                                marginBottom: '15px',
                                fontSize: '1.3rem'
                            }}>Contact</h3>
                            <p style={{ margin: '8px 0' }}>info@myfavoritecities.com</p>
                            <p style={{ margin: '8px 0' }}>+1 (555) 123-4567</p>
                        </div>
                    </div>
                                      
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.2)',
                        paddingTop: '20px',
                        fontSize: '0.9rem',
                        color: '#95a5a6'
                    }}>
                        <p>© 2023 My Favorite Cities. All rights reserved.</p>
                    </div>
                </footer>
            );
        }


export default Footer;
