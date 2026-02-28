import { Product, Testimonial } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "can-3l-classic",
    name: "Natives Olivenöl Extra - 3 Liter",
    description:
      "Unser Klassiker für die tägliche Küche. Mild-fruchtig, direkt aus Messenien, Griechenland.",
    price: 64.99,
    unit: "l",
    size: "3L",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
    category: "canister",
  },
  {
    id: "can-5l-family",
    name: "Familien-Vorrat - 5 Liter",
    description:
      "Maximale Frische, minimaler Müll. Die beste Wahl für echte Olivenöl-Liebhaber.",
    price: 99.99,
    unit: "l",
    size: "5L",
    image:
      "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80&w=800",
    category: "canister",
  },
  {
    id: "pouch-3l-eco",
    name: "Eco Nachfülltüte - 3 Liter",
    description:
      "Für die Umwelt und deinen Geldbeutel. Praktische Nachfülltüte mit 60% weniger Plastik als herkömmliche Kanister.",
    price: 54.99,
    unit: "l",
    size: "3L",
    image:
      "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&q=80&w=800",
    category: "canister",
  },
  {
    id: "sample-50ml",
    name: "Kostenlose Testprobe",
    description:
      "Überzeuge dich selbst von unserer Qualität. 1. Pressung, Bio-Zertifiziert. (Nur Versandkosten)",
    price: 0.0,
    unit: "ml",
    size: "50ml",
    image:
      "https://images.unsplash.com/photo-1595991209266-5ff5a3a2f008?auto=format&fit=crop&q=80&w=800",
    category: "bottle",
  },
  {
    id: "bottle-500-premium",
    name: "Premium Selektion - 500ml",
    description:
      "Früh geerntet, extrem hoher Polyphenolgehalt. Ein Elixier für besondere Momente.",
    price: 24.99,
    unit: "ml",
    size: "500ml",
    image:
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800",
    category: "bottle",
  },
  {
    id: "bundle-tasting",
    name: "Das Probierpaket",
    description:
      "Drei verschiedene Erntezeitpunkte zum Entdecken. Das perfekte Geschenk für Kenner.",
    price: 39.99,
    unit: "Set",
    size: "3x 250ml",
    image:
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
    category: "bundle",
  },
  {
    id: "can-10l-gastro",
    name: "Gastronomie Edition",
    description:
      "Für Restaurants und Großverbraucher. Verlässliche Premium-Qualität in der 10L Bag-in-Box.",
    price: 169.99,
    unit: "l",
    size: "10L",
    image:
      "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80&w=800",
    category: "canister",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Maria S.",
    role: "Hobbyköchin",
    content:
      "Endlich ein Olivenöl, das nach echter Natur schmeckt. Der 5-Liter-Kanister reicht bei uns genau 3 Monate – perfekt!",
    rating: 5,
  },
  {
    id: "2",
    author: "Thomas L.",
    role: "Restaurantbesitzer",
    content:
      "Die Qualität ist konstant hervorragend. Meine Gäste fragen ständig, welches Öl wir für die Salate nutzen.",
    rating: 5,
  },
];
