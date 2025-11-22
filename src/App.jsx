import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTopButton from "./Components/BackToTopButton";
import "./App.css";

function App() {
  return (
    <>
      <Navbar>
        {/* Back to Portfolio button inside Navbar */}
        <a
          href="https://portfolio-ten-virid-57.vercel.app/"
          target="_self"
          className="back-portfolio-btn"
        >
          ← Back to Portfolio
        </a>
      </Navbar>
      
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;



