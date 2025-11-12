import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Luchi Special Abacha</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="home" smooth duration={600}>Home</Link>
        <Link to="about" smooth duration={600}>About</Link>
        <Link to="services" smooth duration={600}>Services</Link>
        <Link to="contact" smooth duration={600}>Contact</Link>
      </div>

      <div className="nav-icons">
        <a href="mailto:udochinenye16@gmail.com" className="envelope"><FaEnvelope /></a>
        <a href="https://wa.me/2348066120541" target="_blank" rel="noreferrer" className="whatsapp"><FaWhatsapp /></a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
    </nav>
  );
};

export default Navbar;
