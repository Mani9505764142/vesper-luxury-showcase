# VESPER — Luxury Fragrance Product Showcase

A frontend-only product showcase built as part of a frontend developer technical assignment. The project focuses on layout structure, component organization, responsive behavior, and clean state management using React and custom CSS.

---

## Tech Stack

| Technology | Role |
|---|---|
| React 18 | Component-based UI |
| React Router v6 | Client-side routing |
| Context API | Cart state management |
| Vite | Development server and build tool |
| Custom CSS | All styling — no UI frameworks or component libraries |

---

## Pages and Features

**Landing Page (`/`)**
- Hero section with brand name, tagline, and a CTA linking to the products page
- Brief brand introduction (2–3 lines)
- Featured products section displaying 3–4 products styled differently from the main product grid layout

**Product Listing Page (`/products`)**
- Responsive product grid: 3–4 columns on desktop, 2 on tablet, 1 on mobile
- Consistent image proportions via `object-fit`

**Product Detail Page (`/products/:id`)**
- Two-column layout: large image on the left, product information on the right
- Collapses to a single stacked column on mobile
- Displays: full description, price, and a specifications block
- Specifications include: size, top notes, heart notes, base notes, longevity, and occasion
- All specification values are static — size is not selectable
- Fallback UI rendered for invalid or non-existent product IDs

**Cart (`/cart`)**
- Managed via Context API
- Supports: add to cart, remove from cart, quantity adjustment
- Cart state is not persisted — resets on page refresh

**Checkout (`/checkout`)**
- Form-only page
- No payment integration

**Thank You (`/thank-you`)**
- Confirmation page rendered after checkout form submission

---

## What This Project Does Not Include

- No backend or database
- No authentication
- No payment gateway
- No persistent cart storage
- No cart drawer or modal
- No size or variant selection
- No image optimization pipeline
- No external UI frameworks or component libraries

---

## Project Structure

```
src/
├── assets/
│   └── images/
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
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
│   ├── variables.css
│   ├── reset.css
│   ├── base.css
│   ├── layout.css
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

---

## Responsiveness

Layout is built mobile-first using CSS Grid and Flexbox throughout. No JavaScript is used for responsive behavior.

| Breakpoint | Behavior |
|---|---|
| `< 600px` | Single column grid, stacked product detail layout |
| `600px – 1024px` | Two-column product grid |
| `> 1024px` | Three to four-column product grid, two-column product detail |

---

## Design Notes

- Spacing follows an 8px base unit system
- Two typefaces: a serif for headings, a sans-serif for body and UI text
- Color palette is minimal: warm ivory background, dark charcoal text, single muted accent
- Transitions are limited to hover states on interactive elements

---

## Known Limitations

- Cart does not persist across page refreshes
- Checkout form has no validation beyond native HTML constraints
- Product data is static and hardcoded in `products.js`
- No formal accessibility audit has been done

---

## Setup

Requires **Node.js v18+**.

```bash
git clone https://github.com/Mani9505764142/vesper-luxury-showcase.git
cd vesper-luxury-showcase
npm install
npm run dev
```

Development server runs at `http://localhost:5173`.

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Live Demo

*To be added after deployment.*
