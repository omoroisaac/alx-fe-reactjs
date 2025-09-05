function Services() {
  const services = ["Technology Consulting", "Market Analysis", "Product Development"];
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <ul style={{ lineHeight: "1.8" }}>
        {services.map((service, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;