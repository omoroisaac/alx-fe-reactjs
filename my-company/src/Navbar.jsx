import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#222",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "center",
      gap: "30px"
    }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
      <Link to="/about" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>About</Link>
      <Link to="/services" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Services</Link>
      <Link to="/contact" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
