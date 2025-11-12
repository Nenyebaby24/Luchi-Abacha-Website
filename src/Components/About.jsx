import React from "react";
import abachaThumb from "../assets/abacha.png"; // optional — use same abacha image or replace with another

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-text">
          <h2>About Luchi Special Abacha</h2>
          <p>
            Luchi Special Abacha is a family-run food business based in Efab Global Estate,
            serving authentic Abacha and traditional Nigerian delicacies prepared fresh for every
            occasion. We cater for small gatherings, large events, and corporate orders with
            delicious, carefully prepared meals.
          </p>
          <p>
            We pride ourselves on quality ingredients, on-time delivery, and outstanding customer
            service — making your event memorable one plate at a time.
          </p>
        </div>

        <div className="about-image">
          <img src={abachaThumb} alt="Luchi Special Abacha dish" />
        </div>
      </div>
    </section>
  );
};

export default About;
