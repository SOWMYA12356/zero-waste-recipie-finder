import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => alert("Message sent successfully!");

  return (
    <div className="auth-box">
      <h1>Contact Us</h1>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default Contact;
