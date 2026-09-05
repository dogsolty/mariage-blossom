// Mariage Blossom — Specimen catalogue
export const PRODUCTS = [
  {
    id: "obsidius-tee",
    code: "MB-001",
    name: "Obsidius Filamentosum Tee",
    latin: "Obsidius Filamentosum",
    category: "T-Shirt",
    price: 8800,
    currency: "JPY",
    image:
      "https://media.base44.com/images/public/user_6a5670bce7cb5e8397b50da8/c2cb9093d_Gemini_Generated_Image_rc05wtrc05wtrc05.jpg",
    specs: {
      Fabric: "Heavyweight Bio-Cotton 240gsm",
      Print: "Subsurface Reactive Dye",
      Fit: "Boxy / Oversized",
      Origin: "Crafted in Kyoto",
    },
    note: "The signature specimen. A vascular bloom etched in dried-blood crimson across an obsidian field.",
  },
  {
    id: "ma1-bomber",
    code: "MB-002",
    name: "MA-1 Bio-Synthetic Bomber",
    latin: "Aetheris Chitin",
    category: "MA-1",
    price: 34800,
    currency: "JPY",
    image:
      "https://media.base44.com/images/public/6a9c19976dd455a77a87beb9/a45a3d95b_generated_b6ab03c2.jpg",
    specs: {
      Shell: "Recycled Nylon Ripstop",
      Lining: "Bioluminescent Filament Weave",
      Fill: "PrimaLoft Bio",
      Origin: "Assembled in Osaka",
    },
    note: "A vacuum-sealed exoskeleton. The lining glows cyan when the shell is pierced by light.",
  },
  {
    id: "coach-jacket",
    code: "MB-003",
    name: "Coach Shell — Verticalis",
    latin: "Verticalis Profunda",
    category: "Coach Jacket",
    price: 26400,
    currency: "JPY",
    image:
      "https://media.base44.com/images/public/6a9c19976dd455a77a87beb9/f20624f25_generated_560e7506.jpg",
    specs: {
      Shell: "Water-Repellent Polyester",
      Lining: "Cotton Twill",
      Closure: "Snap-Front Bio-Plating",
      Origin: "Crafted in Kyoto",
    },
    note: "A draping membrane for the transitional climate. The floral pattern reads through in X-Ray.",
  },
  {
    id: "vessel-mug",
    code: "MB-004",
    name: "Vessel — Filamentosum Mug",
    latin: "Micro-Textura",
    category: "Mug",
    price: 4200,
    currency: "JPY",
    image:
      "https://media.base44.com/images/public/6a9c19976dd455a77a87beb9/f23859c49_generated_ad42282c.jpg",
    specs: {
      Material: "Matte Black Ceramic",
      Capacity: "350ml",
      Finish: "Reactive Glaze",
      Origin: "Fired in Arita",
    },
    note: "A drinking vessel wrapped in the micro-texture of the filament network.",
  },
  {
    id: "crown-cap",
    code: "MB-005",
    name: "Crown — Inferior Ascendens Cap",
    latin: "Inferior Ascendens",
    category: "Cap",
    price: 5800,
    currency: "JPY",
    image:
      "https://media.base44.com/images/public/6a9c19976dd455a77a87beb9/3e1949783_generated_cfbc3bcd.jpg",
    specs: {
      Panel: "Washed Twill 6-Panel",
      Embroidery: "Crimson Reactive Thread",
      Closure: "Metal Bio-Buckle",
      Origin: "Crafted in Kyoto",
    },
    note: "Root-like connections reaching upward across the front crown.",
  },
];

export const ART_ASSETS = {
  grid: "https://media.base44.com/images/public/user_6a5670bce7cb5e8397b50da8/79ff8101b_Gemini_Generated_Image_55t00r55t00r55t0.jpg",
  sheet: "https://media.base44.com/images/public/user_6a5670bce7cb5e8397b50da8/0b5041c43_Gemini_Generated_Image_duyhxqduyhxqduyh.jpg",
  floral: "https://media.base44.com/images/public/user_6a5670bce7cb5e8397b50da8/084fbb05d_Gemini_Generated_Image_6dptuo6dptuo6dpt.jpg",
  hero: "https://media.base44.com/images/public/6a9c19976dd455a77a87beb9/a969e4a68_generated_c9be16b6.jpg",
};

export const formatPrice = (price) => `¥${price.toLocaleString("en-US")}`;