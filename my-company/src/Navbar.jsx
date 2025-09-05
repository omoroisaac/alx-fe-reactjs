import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 15px",
    borderRadius: "5px"
  };

  const navStyle = {
    backgroundColor: "#222",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.3)"
  };

  const hover = (e) => (e.target.style.backgroundColor = "#00bcd4");
  const leave = (e) => (e.target.style.backgroundColor = "transparent");

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} onMouseOver={hover} onMouseOut={leave}>Home</Link>
      <Link to="/about" style={linkStyle} onMouseOver={hover} onMouseOut={leave}>About</Link>
      <Link to="/services" style={linkStyle} onMouseOver={hover} onMouseOut={leave}>Services</Link>
      <Link to="/contact" style={linkStyle} onMouseOver={hover} onMouseOut={leave}>Contact</Link>
    </nav>
  );
}

export default Navbar;