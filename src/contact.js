import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("✅ Message Sent Successfully!");
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <br />
        <br />
        <input type="email" placeholder="Your Email" required />
        <br />
        <br />
        <textarea placeholder="Your Message" required></textarea>
        <br />
        <br />
        <button type="submit">Send Message</button>
      </form>

      <p>{message}</p>

      <h3>Connect with me</h3>
      <p>📧 alim@email.com</p>
      <p>🌐 LinkedIn: linkedin.com/in/alim</p>
      <p>💻 GitHub: github.com/alim</p>
    </div>
  );
}

export default Contact;
