import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {
  const { items, totalPrice, dispatch } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: ""
  });

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  if (items.length === 0) {
    return (
      <section className="checkout-page empty">
        <div className="container">
          <h1>Checkout</h1>
          <p>Your cart is empty.</p>
        </div>
      </section>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { name, email, phone, address, city, postal } = formData;

    if (!name || !email || !phone || !address || !city || !postal) {
      setError("Please fill all billing details.");
      return false;
    }

    setError("");
    return true;
  };

  const handlePayment = () => {
    if (!validateForm()) return;

    setShowModal(true);
  };

  const handleSuccess = () => {
    dispatch({ type: "CLEAR_CART" });
    setShowModal(false);
    navigate("/thank-you");
  };

  return (
    <section className="checkout-page">
      <div className="container checkout-grid">

        <div className="checkout-form">
          <h1>Billing Details</h1>

          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email Address" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input name="address" placeholder="Address" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="postal" placeholder="Postal Code" onChange={handleChange} />

          {error && <p className="form-error">{error}</p>}

          <button className="pay-btn" onClick={handlePayment}>
            Proceed to Payment
          </button>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          {items.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}

          <div className="summary-total">
            <strong>Total</strong>
            <strong>₹{totalPrice.toLocaleString()}</strong>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="payment-modal">
          <div className="payment-box">
            <h2>Payment Gateway Integrated</h2>
            <p>This is a demo payment confirmation.</p>

            <button onClick={handleSuccess}>
              Confirm Payment
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Checkout;