import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const { items, dispatch, totalPrice } = useCart();
  const navigate = useNavigate(); // ✅ THIS WAS MISSING

  if (items.length === 0) {
    return (
      <section className="cart-page empty">
        <div className="container">
          <h1>Your Cart</h1>
          <p>Your cart is currently empty.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="container">
        <h1>Your Cart</h1>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString()}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT", payload: item.id })
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: item.id })
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: item.id })
                  }
                >
                  Remove
                </button>
              </div>

              <div className="cart-subtotal">
                ₹{(item.price * item.quantity).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>
            Total: ₹{totalPrice.toLocaleString()}
          </h2>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Make Payment
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;