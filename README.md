# VESPER — Luxury Fragrance Product Showcase

A frontend technical assignment built as a luxury perfume brand showcase. VESPER is a fictitious high-end fragrance house, and this project demonstrates a complete product browsing and cart experience using React — with no backend, no UI framework, and no external component libraries.

---

## 1. Project Overview

VESPER is positioned as a modern luxury fragrance brand that values restraint, craftsmanship, and sensory experience. The design philosophy follows that same principle: minimal visual noise, generous whitespace, deliberate typography, and a muted editorial palette that lets the product imagery carry the narrative.

The goal of the project is not simply to render a product list, but to simulate the feel of a premium e-commerce experience — one where every layout decision and interaction detail signals quality. The technical implementation reflects that same intentionality: clean component architecture, predictable state management, and a responsive layout system built entirely with custom CSS.

---

## 2. Tech Stack

| Technology | Purpose | Rationale |
|---|---|---|
| **React 18** | UI rendering and component model | Industry standard for component-driven interfaces; hooks-based architecture keeps logic co-located and readable |
| **React Router v6** | Client-side routing | Declarative routing with nested route support; `useParams` and `useNavigate` map cleanly to product detail and checkout flows |
| **Context API** | Global cart state | Appropriate scope for this project — a full state management library (Redux, Zustand) would be over-engineered for a single shared cart slice |
| **Vite** | Build tooling and dev server | Significantly faster cold starts and HMR compared to Create React App; native ESM support aligns with modern React workflows |
| **Custom CSS** | Styling | Demonstrates core CSS proficiency without abstraction; full control over the cascade, layout, and responsive behavior without utility-class overhead |

---

## 3. Key Features

- **Landing page** with a full-viewport hero section, a concise brand statement, and a curated grid of 3–4 featured products
- **Product listing page** with a responsive multi-column grid that adapts across breakpoints
- **Product detail page** with a two-column layout (large image left, product information right) that collapses to a single stacked column on mobile
- **Full specification block** on each product detail page, including:
  - Fragrance notes (top, heart, base)
  - Volume / size options
  - Longevity and sillage
  - Occasion and scent category
- **Graceful error handling** for invalid or non-existent product IDs — displays a contextual error state rather than a broken page
- **Cart system** powered by Context API with add, remove, and quantity management
- **Simulated checkout flow** with a confirmation/thank-you page on completion
- **Static product data** — no backend dependency; all product records are defined in a local data file

---

## 4. Design Decisions

**Typography**
Two typefaces are used. A serif (e.g., *Cormorant Garamond* or *Playfair Display*) is used for headings and brand-level text to establish an editorial, luxury tone. A clean sans-serif (e.g., *Inter* or *DM Sans*) handles body copy, labels, and UI text for legibility and contrast against the display face.

**Color Palette**
The palette is intentionally restrained:
- Off-white / warm ivory background (`#F9F6F1`) to avoid clinical sterility
- Deep charcoal (`#1A1A1A`) for primary text
- Muted gold or warm taupe as a single accent color for interactive elements
- No saturated colors — the product photography and fragrance imagery provide all visual warmth

**Spacing System**
An 8px base unit is used throughout. All padding, margin, and gap values are multiples of 8 (8, 16, 24, 32, 48, 64, 96). This creates visual rhythm without requiring a utility framework.

**Motion**
Transitions are subtle and purposeful — hover states on product cards use a low-duration opacity and transform shift (not scale). Page-level transitions are not animated to keep the experience fast and distraction-free.

**Imagery**
Product images are treated as primary content, not decoration. On the detail page, the image occupies roughly half the viewport width on desktop. Aspect ratios are locked via CSS to prevent layout shift on load.

---

## 5. Component Structure

```
src/
├── assets/
│   └── images/               # Product and brand imagery
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── context/
│   └── CartContext.jsx       # Global cart state management
├── data/
│   └── products.js           # Static product records
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── ThankYou.jsx
│   ├── About.jsx
│   ├── Journal.jsx
│   └── Contact.jsx
├── styles/
│   ├── variables.css         # Color and spacing system
│   ├── reset.css             # CSS reset
│   ├── base.css              # Typography and base styles
│   ├── layout.css            # Container and grid logic
│   ├── Header.css
│   ├── Footer.css
│   ├── Home.css
│   ├── Products.css
│   ├── ProductDetail.css
│   ├── Cart.css
│   ├── Checkout.css
│   ├── ThankYou.css
│   ├── About.css
│   ├── Journal.css
│   └── Contact.css
├── App.jsx
└── main.jsx

```

Component responsibilities are intentionally narrow. Pages handle data retrieval and layout composition. UI components are stateless where possible and accept props for all variable content.

---

## 6. Responsiveness

The layout is built mobile-first. Breakpoints:

| Breakpoint | Layout Behavior |
|---|---|
| `< 600px` (mobile) | Single column product grid; stacked product detail layout; condensed navigation |
| `600px – 1024px` (tablet) | Two-column product grid; reduced hero typography scale |
| `> 1024px` (desktop) | Three to four-column product grid; two-column product detail; full navigation |

CSS Grid and Flexbox are used exclusively — no float-based layout. `auto-fill` with `minmax` handles the product grid reflow without JavaScript or class toggling.

---

## 7. Known Limitations and Trade-offs

- **No real checkout logic.** The checkout page collects form input but does not validate fields beyond basic HTML constraints or process any payment. The thank-you page is triggered by form submission only.
- **No persistence.** Cart state lives in React context and is lost on page refresh. A `localStorage` sync layer was intentionally omitted to keep the scope clean, but would be the first addition in a production iteration.
- **Static data only.** All product records are hardcoded in a local JS file. In a production context, this would be replaced with an API call to a headless CMS or backend service.
- **No accessibility audit.** While semantic HTML and keyboard-navigable interactive elements are used throughout, a formal WCAG 2.1 AA audit has not been performed. Focus management on the cart drawer and modal states is functional but not fully polished.
- **No image optimization pipeline.** Images are served as-is from the assets directory. A production build would use a CDN with responsive image variants (`srcset`).

---

## 8. Setup Instructions

Ensure you have **Node.js v18+** and **npm** installed before proceeding.

```bash
# Clone the repository
git clone https://github.com/Mani9505764142/vesper-luxury-showcase.git

# Navigate into the project directory
cd vesper

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` by default (Vite's standard port).

To build for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 9. Live Demo

> Live deployment link will be added here once hosted.

*Intended hosting target: Vercel or Netlify (static export via `npm run build`).*

---

## 10. Final Notes

This project was scoped and executed as a frontend technical assignment. The decisions made throughout — from the absence of a UI framework to the deliberate typographic system — reflect a preference for demonstrable fundamentals over abstraction. The codebase is structured for clarity and extension: adding new products requires only a new entry in `products.js`, and adding new pages follows the established route and layout conventions without modification to core infrastructure.

The VESPER brand concept was chosen to create a realistic design constraint: luxury products demand restraint, and restraint is harder to execute well than abundance. That tension informed every layout and styling decision in the project.