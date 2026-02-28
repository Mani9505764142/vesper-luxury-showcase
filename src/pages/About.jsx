import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-subtitle">Our Philosophy</p>
          <h1>
            Scent is Memory.<br />
            Scent is Identity.
          </h1>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="about-story">
        <div className="about-container">

          <div className="about-text">
            <h2>The House of Vesper</h2>

            <p>
              Vesper was born from the belief that fragrance is architecture —
              structured, layered, deliberate. Every composition is built with
              precision, restraint, and emotional depth.
            </p>

            <p>
              We do not chase trends. We build olfactory structures designed
              for the quiet hours — when presence speaks louder than noise.
            </p>

            <p>
              Each bottle represents duality: shadow and light, power and
              vulnerability, silence and intensity.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-values">
        <div className="about-container">

          <div className="value">
            <h3>Craftsmanship</h3>
            <p>
              Small-batch production. Obsessive formulation.
              No compromises.
            </p>
          </div>

          <div className="value">
            <h3>Ingredients</h3>
            <p>
              Rare raw materials sourced globally, selected for depth and
              character.
            </p>
          </div>

          <div className="value">
            <h3>Timelessness</h3>
            <p>
              Designed to endure. Not seasonal. Not disposable.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;