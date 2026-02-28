import "../styles/Journal.css";

import featuredImage from "../assets/images/vesper-architecture-of-silence.jpg";
import ingredientsImage from "../assets/images/vesper-ingredients-as-identity.jpg";
import timelessImage from "../assets/images/vesper-timeless-over-trend.jpg";
import lightShadowImage from "../assets/images/vesper-light-and-shadow.jpg";

function Journal() {
  return (
    <div className="journal-page">

      {/* HERO */}
      <section className="journal-hero">
        <div className="journal-container">
          <p className="journal-subtitle">Journal</p>
          <h1>Notes on Scent & Structure</h1>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="journal-featured">
        <div className="journal-container journal-featured-grid">

          <div className="featured-image">
            <img src={featuredImage} alt="The Architecture of Silence" />
          </div>

          <div className="featured-content">
            <p className="article-date">March 2026</p>
            <h2>The Architecture of Silence</h2>
            <p>
              Exploring the quiet power of restrained composition
              and the emotional geometry of scent.
            </p>
            <a href="#" className="journal-link">Read Article →</a>
          </div>

        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="journal-grid-section">
        <div className="journal-container journal-grid">

          <div className="journal-card">
            <div className="card-image">
              <img src={ingredientsImage} alt="Ingredients as Identity" />
            </div>
            <h3>Ingredients as Identity</h3>
            <p>How rare materials shape character and depth.</p>
          </div>

          <div className="journal-card">
            <div className="card-image">
              <img src={timelessImage} alt="Timeless Over Trend" />
            </div>
            <h3>Timeless Over Trend</h3>
            <p>Designing compositions that endure beyond seasons.</p>
          </div>

          <div className="journal-card">
            <div className="card-image">
              <img src={lightShadowImage} alt="Light & Shadow" />
            </div>
            <h3>Light & Shadow</h3>
            <p>The duality behind every Vesper bottle.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Journal;