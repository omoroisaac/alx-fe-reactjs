import React from 'react';

function Services() {
  const services = [
    {
      title: "Technology Consulting",
      description: "Expert guidance on technology strategy and implementation.",
      icon: "💻"
    },
    {
      title: "Market Analysis",
      description: "Comprehensive market research and competitive analysis.",
      icon: "📊"
    },
    {
      title: "Product Development",
      description: "End-to-end product development from concept to launch.",
      icon: "🚀"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies for digital growth.",
      icon: "🎯"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      description: "Robust security solutions to protect your digital assets.",
      icon: "🔒"
    }
  ];

  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Our Services
      </h1>
      <p style={{
        textAlign: 'center',
        color: '#666',
        fontSize: '1.1rem',
        marginBottom: '3rem',
        maxWidth: '600px',
        margin: '0 auto 3rem auto'
      }}>
        We offer a comprehensive suite of services to help your business thrive in the digital age.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {services.map((service, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0',
              transition: 'transform 0.3s, box-shadow 0.3s',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              {service.icon}
            </div>
            <h3 style={{
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              {service.title}
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;