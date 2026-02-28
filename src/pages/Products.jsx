import { Link } from "react-router-dom";
import products from "../data/products";
import "../styles/Products.css";

function Products() {
  return (
    <section className="products-page">
      <div className="container">
        <div className="products-header">
          <h1>Our Collection</h1>
          <p>Architectural fragrances crafted with precision.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
  <img src={product.image} alt={product.name} />
</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="short-desc">{product.shortDescription}</p>
                <p className="price">₹{product.price.toLocaleString()}</p>

                <Link
                  to={`/products/${product.id}`}
                  className="view-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;