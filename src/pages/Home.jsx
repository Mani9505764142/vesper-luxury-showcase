import { Link } from "react-router-dom";
import products from "../data/products";
import heroImage from "../assets/images/vesper-hero.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="container hero-content">
          <p className="hero-subtitle">
            EST. 2026 • FINE FRAGRANCE
          </p>

          <h1 className="hero-title">
            Scent is <span>Architecture</span>
          </h1>

          <p className="hero-description">
            Crafted compositions designed for the modern connoisseur.
            Discover layered olfactory structures built with precision and restraint.
          </p>

          <Link to="/products" className="hero-btn">
            Explore Collection →
          </Link>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="brand-story">
        <div className="container story-grid">
          <div className="story-left">
            <h2>
              Shadows <br />
              & <span>Scent</span>
            </h2>
          </div>

          <div className="story-right">
            <p className="story-lead">
              We believe in the power of scent to transform quiet moments into profound experiences.
              Our fragrances are not just perfumes; they are memories bottled in darkness and light.
            </p>

            <p>
              Each bottle is a testament to the night. Conceived in solitude, crafted with obsession.
              Vesper represents the duality of the modern soul — strong yet vulnerable, hidden yet present.
              We source rare ingredients from the farthest corners of the earth to bring you closer to yourself.
            </p>

            <Link to="#" className="story-link">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <h2>Featured Collection</h2>
            <p>
              Signature compositions crafted with architectural precision.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <h3>{product.name}</h3>

                <p className="price">
                  ₹{product.price.toLocaleString()}
                </p>

                <Link
                  to={`/products/${product.id}`}
                  className="view-btn"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="container newsletter-content">
          <div className="newsletter-icon">✉</div>

          <h2>Join the Inner Circle</h2>

          <p>
            Subscribe for exclusive access to limited releases, private sales,
            and the stories behind our scents.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;