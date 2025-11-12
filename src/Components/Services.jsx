import React from "react";
// optional icons (if you installed react-icons)
import { FaUtensils, FaTruck, FaBuilding } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <p className="services-intro">
        We cater for a variety of occasions — from small family dinners to large events.
      </p>

      <div className="service-cards">
        <div className="service-card">
          <div className="service-icon"><FaUtensils /></div>
          <h3>Event Catering</h3>
          <p>Full-service catering for weddings, birthdays, and parties — fresh Abacha made to order.</p>
        </div>

        <div className="service-card">
          <div className="service-icon"><FaTruck /></div>
          <h3>Home Delivery</h3>
          <p>Order for home delivery — freshly prepared and delivered on time to your doorstep.</p>
        </div>

        <div className="service-card">
          <div className="service-icon"><FaBuilding /></div>
          <h3>Corporate & Bulk Orders</h3>
          <p>Large orders for offices, seminars, and corporate events with flexible pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
