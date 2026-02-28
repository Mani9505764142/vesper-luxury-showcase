import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import "../styles/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="product-detail error">
        <div className="container error-container">
          <h2>Product Not Found</h2>
          <p>
            The fragrance you are looking for does not exist or may
            have been removed.
          </p>

          <Link to="/products" className="back-btn">
            Back to Collection
          </Link>
        </div>
      </section>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  return (
    <section className="product-detail">
      <div className="container detail-grid">

        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>

          <p className="detail-price">
            ₹{product.price.toLocaleString()}
          </p>

          <p className="detail-description">
            {product.fullDescription}
          </p>

          <div className="specs">
            <h3>Specifications</h3>
            <ul>
              <li><strong>Size:</strong> {product.size}</li>
              <li><strong>Top Notes:</strong> {product.fragranceNotes.top}</li>
              <li><strong>Heart Notes:</strong> {product.fragranceNotes.heart}</li>
              <li><strong>Base Notes:</strong> {product.fragranceNotes.base}</li>
              <li><strong>Longevity:</strong> {product.longevity}</li>
              <li><strong>Occasion:</strong> {product.occasion}</li>
              <li><strong>Category:</strong> {product.category}</li>
            </ul>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </section>
  );
}

export default ProductDetail;