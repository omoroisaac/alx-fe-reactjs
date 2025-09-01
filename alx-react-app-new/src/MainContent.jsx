import React from 'react';

function MainContent() {
  return (
   <main style={{
                    padding: '30px',
                    backgroundColor: '#f8f9fa',
                    minHeight: 'calc(100vh - 200px)'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <h2 style={{
                            textAlign: 'center',
                            color: '#2c3e50',
                            fontSize: '2.2rem',
                             margin: '0 0 30px',
                            paddingBottom: '15px',
                            borderBottom: '2px solid #e0e0e0'
                        }}>
                            <i className="fas fa-star" style={{ color: '#f39c12', marginRight: '10px' }}></i>
                            Top City Recommendations
                        </h2>
                        
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '25px'
                        }}>
                               {/* City Card 1 */}
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                width: '300px',
                                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{
                                    height: '180px',
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>
                                <div style={{ padding: '20px' }}>
                                      <h3 style={{
                                        margin: '0 0 10px',
                                        color: '#2c3e50',
                                        fontSize: '1.5rem'
                                    }}>New York City</h3>
                                    <p style={{
                                        margin: '0 0 15px',
                                        color: '#7f8c8d',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5'
                                    }}>The city that never sleeps with incredible energy and diversity.</p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                        }}>
                                        <span style={{
                                            backgroundColor: '#e74c3c',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: 'bold'
                                        }}>Must Visit</span>
                                        <span style={{
                                            color: '#f39c12',
                                            fontSize: '1.1rem'
                                        }}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* City Card 2 */}
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                width: '300px',
                                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{
                                    height: '180px',
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{
                                        margin: '0 0 10px',
                                        color: '#2c3e50',
                                        fontSize: '1.5rem'
                                        }}>Tokyo</h3>
                                    <p style={{
                                        margin: '0 0 15px',
                                        color: '#7f8c8d',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5'
                                    }}>A fascinating blend of ancient traditions and cutting-edge technology.</p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{
                                            backgroundColor: '#3498db',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: 'bold'
                                        }}>Cultural Hub</span>
                                        <span style={{
                                            color: '#f39c12',
                                            fontSize: '1.1rem'
                                        }}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                         </div>
                                </div>
                            </div>
                            
                            {/* City Card 3 */}
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                width: '300px',
                                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                                  transition: 'transform 0.3s ease'
                            }}>
                                <div style={{
                                    height: '180px',
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1587334274527-ba54f0b5a357?ixlib=rb-4.0.3)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{
                                        margin: '0 0 10px',
                                        color: '#2c3e50',
                                        fontSize: '1.5rem'
                                    }}>Paris</h3>
                                      <p style={{
                                        margin: '0 0 15px',
                                        color: '#7f8c8d',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5'
                                    }}>The city of light, love, and some of the world's most iconic art and architecture.</p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{
                                            backgroundColor: '#9b59b6',
                                            color: 'white',
                                            padding: '5px 10px',
                                              borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: 'bold'
                                        }}>Romantic</span>
                                        <span style={{
                                            color: '#f39c12',
                                            fontSize: '1.1rem'
                                        }}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                                  </div>
                    </div>
                </main>
            );
        }
                      
export default MainContent;
