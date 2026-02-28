import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!feedback.trim()) return;

    alert("Thank you for your feedback.");
    setName("");
    setFeedback("");
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h2>VESPER</h2>
          <p>
            Crafted compositions built with restraint,
            precision, and architectural depth.
          </p>
        </div>

        <div className="footer-grid">

          {/* SHOP */}
          <div>
            <h4>Shop</h4>
            <Link to="/products">All Fragrances</Link>
            <Link to="/products">Limited Editions</Link>
            <Link to="/products">Gift Sets</Link>
          </div>

          {/* ABOUT */}
          <div>
            <h4>About</h4>
            <Link to="/about">Our Story</Link>
            <Link to="/journal">Journal</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* CONNECT */}
          <div>
            <h4>Connect</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              Pinterest
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>

          {/* FEEDBACK */}
          <div className="footer-feedback">
            <h4>Share Your Experience</h4>

            <input
              type="text"
              placeholder="Your Name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="feedback-input"
            />

            <textarea
              placeholder="Your thoughts about VESPER..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="feedback-textarea"
            />

            <button
              className="feedback-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Vesper. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;