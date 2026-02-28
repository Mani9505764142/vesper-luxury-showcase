import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    alert("Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <div className="container contact-container">

        <div className="contact-left">
          <h1>Contact VESPER</h1>
          <p>
            For inquiries, collaborations, or bespoke fragrance requests,
            reach out to our atelier.
          </p>

          <div className="contact-info">
            <p>Email: contact@vesperfragrance.com</p>
            <p>Phone: +91 xxxxx xxxxx</p>
            <p>Location: Hyderabad, India</p>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;