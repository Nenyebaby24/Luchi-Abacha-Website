import React, { useState } from "react";


const Contact = () => {
  const [form, setForm] = useState({ name: "", date: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappURL = `https://wa.me/2348066120541?text=Hello%20Luchi!%0AMy%20name%20is%20${form.name}.%0AI%20want%20to%20book%20Abacha%20on%20${form.date}.%0AMessage:%20${form.message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Book Your Abacha</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <input type="date" name="date" required onChange={handleChange} />
        <textarea name="message" placeholder="Additional details..." onChange={handleChange}></textarea>
        <button type="submit" className="cta-button">Send via WhatsApp</button>
      </form>
    </section>
  );
};

export default Contact;
