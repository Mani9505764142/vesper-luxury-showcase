import noir from "../assets/images/noir.jpg";
import golden from "../assets/images/golden.jpg";
import velvet from "../assets/images/velvet.jpg";
import obsidian from "../assets/images/obsidian.jpg";
import amber from "../assets/images/amber.jpg";

const products = [
  {
    id: "noir-ember",
    name: "Noir Ember",
    category: "Woody",
    price: 4900,

    shortDescription: "Smoky woods with warm amber depth.",

    fullDescription:
      "Noir Ember opens with dark spice and citrus brightness before settling into resinous warmth. The dry-down leaves a refined smoky trail designed for evening wear and quiet authority.",

    fragranceNotes: {
      top: "Black Pepper, Bergamot",
      heart: "Incense, Labdanum",
      base: "Amber, Vetiver",
    },

    size: "100ml",
    longevity: "8–10 hours",
    occasion: "Evening, Formal",

    image: noir,
  },

  {
    id: "golden-resin",
    name: "Golden Resin",
    category: "Oriental",
    price: 5400,

    shortDescription: "Warm resin layered with soft florals.",

    fullDescription:
      "Golden Resin blends luminous florals with rich balsamic undertones. It evolves slowly, revealing depth and elegance suited for refined occasions.",

    fragranceNotes: {
      top: "Saffron, Citrus",
      heart: "Rose, Myrrh",
      base: "Resin, Sandalwood",
    },

    size: "100ml",
    longevity: "7–9 hours",
    occasion: "Events, Festive",

    image: golden,
  },

  {
    id: "velvet-smoke",
    name: "Velvet Smoke",
    category: "Gourmand",
    price: 4700,

    shortDescription: "Soft smoky sweetness with depth.",

    fullDescription:
      "Velvet Smoke balances sweetness and charred woods with smooth elegance. A comforting yet bold signature crafted for colder evenings.",

    fragranceNotes: {
      top: "Cardamom, Plum",
      heart: "Smoke, Leather",
      base: "Vanilla, Cedarwood",
    },

    size: "100ml",
    longevity: "6–8 hours",
    occasion: "Night, Winter",

    image: velvet,
  },

  {
    id: "obsidian-bloom",
    name: "Obsidian Bloom",
    category: "Floral",
    price: 5200,

    shortDescription: "Dark florals wrapped in mineral depth.",

    fullDescription:
      "Obsidian Bloom combines deep florals with mineral undertones and subtle spice. Designed as a confident signature scent.",

    fragranceNotes: {
      top: "Pink Pepper, Neroli",
      heart: "Jasmine, Tuberose",
      base: "Musk, Patchouli",
    },

    size: "100ml",
    longevity: "7–9 hours",
    occasion: "Evening, Signature",

    image: obsidian,
  },

  {
    id: "amber-noctis",
    name: "Amber Noctis",
    category: "Amber",
    price: 5600,

    shortDescription: "Golden warmth layered with nocturnal depth.",

    fullDescription:
      "Amber Noctis delivers glowing amber richness with a shadowed woody finish. Luxurious and commanding without excess.",

    fragranceNotes: {
      top: "Citrus, Saffron",
      heart: "Amber, Rose",
      base: "Oud, Cedar",
    },

    size: "100ml",
    longevity: "8–10 hours",
    occasion: "Luxury, Formal",

    image: amber,
  },
];

export default products;