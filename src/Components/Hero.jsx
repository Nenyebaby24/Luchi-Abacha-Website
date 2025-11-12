import React from "react";
import { Link } from "react-scroll";
import abachaImg from "../assets/abacha.png";


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Authentic Abacha for Every Occasion</h1>
        <p>Enjoy the taste of home with Luchi Special Abacha — perfect for parties, events, and everyday cravings.</p>
        <div className="hero-buttons">
          <Link to="contact" smooth duration={600} className="cta-btn">Book Now</Link>
          <a href="https://wa.me/2348066120541?text=Hello%20Luchi!%20I%20want%20to%20order%20Abacha." target="_blank" rel="noreferrer" className="cta-btn secondary">
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={abachaImg} alt="Abacha dish" />
      </div>
    </section>
  );
};

export default Hero;
