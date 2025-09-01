import React from 'react';

function UserProfile(props) {
  return (
    <div style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '12px',
                    padding: '25px',
                    margin: '20px',
                    backgroundColor: 'white',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    maxWidth: '500px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: '#3498db',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '20px',
                            fontSize: '2rem',
                            color: 'white',
                            fontWeight: 'bold'
                        }}>
                            {props.name.charAt(0)}
                             </div>
                        <div>
                            <h2 style={{
                                color: '#2c3e50',
                                margin: '0 0 5px',
                                fontSize: '1.8rem'
                            }}>
                                {props.name}
                            </h2>
                            <p style={{
                                margin: 0,
                                color: '#7f8c8d',
                                fontSize: '1rem'
                            }}>
                                <i className="fas fa-map-marker-alt" style={{ marginRight: '5px' }}></i>
                                {props.location}
                                 </p>
                        </div>
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '15px'
                    }}>
                        <div style={{
                            textAlign: 'center',
                            padding: '10px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            flex: 1,
                            margin: '0 5px'
                        }}>
                            <p style={{
                                margin: 0,
                                color: '#7f8c8d',
                                fontSize: '0.9rem'
                            }}>Age</p>
                            <p style={{
                                margin: 0,
                                color: '#2c3e50',
                                fontSize: '1.4rem',
                                fontWeight: 'bold'
                            }}>{props.age}</p>
                            </div>
                        
                        <div style={{
                            textAlign: 'center',
                            padding: '10px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            flex: 1,
                            margin: '0 5px'
                        }}>
                            <p style={{
                                margin: 0,
                                color: '#7f8c8d',
                                fontSize: '0.9rem'
                            }}>Cities Visited</p>
                            <p style={{
                                margin: 0,
                                color: '#2c3e50',
                                fontSize: '1.4rem',
                                fontWeight: 'bold'
                            }}>{props.citiesVisited}</p>
                        </div>
                    </div>
                    
                    <div style={{
                        backgroundColor: '#e8f4fc',
                        padding: '15px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #3498db'
                         }}>
                        <h3 style={{
                            color: '#2c3e50',
                            margin: '0 0 10px',
                            fontSize: '1.2rem'
                        }}>
                            <i className="fas fa-user" style={{ marginRight: '8px' }}></i>
                            Bio
                        </h3>
                        <p style={{
                            margin: 0,
                            color: '#34495e',
                            lineHeight: '1.6',
                            fontSize: '1rem'
                        }}>{props.bio}</p>
                        </div>
                </div>
            );
        }

export default UserProfile;
