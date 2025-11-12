import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Luchi Special Abacha</div>

      {/* Hamburger icon */}
      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="home" smooth duration={600} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="about" smooth duration={600} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="services" smooth duration={600} onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="contact" smooth duration={600} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Social Icons */}
      <div className="nav-icons">
        <a href="mailto:udooluchi16@gmail.com" className="envelope"><FaEnvelope /></a>
        <a href="https://wa.me/2348066120541" target="_blank" rel="noreferrer" className="whatsapp"><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default Navbar;