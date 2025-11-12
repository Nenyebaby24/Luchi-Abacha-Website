import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Luchi Special Abacha. All rights reserved.</p>
      <div className="footer-icons">
        <a href="mailto:luchispecialabacha@gmail.com" className="envelope"><FaEnvelope /></a>
        <a href="https://wa.me/2348066120541" className="whatsapp"><FaWhatsapp /></a>
      </div>
    </footer>
  );
};

export default Footer;
