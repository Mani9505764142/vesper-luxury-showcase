import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import "../styles/ThankYou.css";

function ThankYou() {

  // Generate realistic order ID once
  const orderId = useMemo(() => {
    return "VES" + Math.floor(100000 + Math.random() * 900000);
  }, []);

  useEffect(() => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <section className="thankyou-page">
      <div className="container">

        <h1>Payment Successful</h1>

        <p className="success-message">
          Your order has been placed successfully.
        </p>

        <p className="confirmation-info">
          Order details and tracking updates will be sent to your WhatsApp and email shortly.
        </p>

        <p className="order-id">
          Order ID: <strong>{orderId}</strong>
        </p>

        <Link to="/products" className="continue-btn">
          Continue Shopping
        </Link>

      </div>
    </section>
  );
}

export default ThankYou;