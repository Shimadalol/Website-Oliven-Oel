import { Product, Testimonial } from "./types";

// ============================================================
// ALLE TEXTE & BILDER DER WEBSITE – hier zentral änderbar
// ============================================================
export const TEXTS = {

  // ── Startseite ──────────────────────────────────────────
  home: {
    banner: {
      text: "Launch-Angebot: 50% Rabatt für die ersten 100 Kunden!",
      cta: "Jetzt sichern",
    },
    hero: {
      tagline: "Direkt vom Familienbetrieb",
      headline: "Echtes Olivenöl.",
      headlineItalic: "Kein Supermarkt.",
      subtext: "Wir bringen kaltgepresstes Olivenöl von kleinen Familienbetrieben aus Kreta und Italien direkt in deine Küche. Doppelt laborgeprüft. Ohne Zwischenhändler.",
      ctaPrimary: "Testprobe anfordern",
      ctaSecondary: "Unsere Geschichte",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&fm=webp&q=80&w=2000",
    },
    benefits: [
      { title: "2x Laborgeprüft",     subtitle: "Im Ursprung & in DE" },
      { title: "Lager in Frankfurt",  subtitle: "Schneller Versand aus DE" },
      { title: "Gratis Testprobe",    subtitle: "Nur Versandkosten" },
      { title: "Eco Nachfülltüten",   subtitle: "60% weniger Plastik" },
    ],
    products: {
      headline: "Unser Sortiment",
      subtext: "Von der kostenlosen Testprobe bis zum 10-Liter-Gastro-Kanister – für jeden Bedarf das richtige Format. Alle Öle sind kaltgepresst, 1. Pressung und Bio-zertifiziert.",
    },
    subscription: {
      headline: "Das Olivenöl-Abo",
      subtext: "Werde Teil unseres Oliven-Clubs und erhalte automatisch alle 3 oder 6 Monate frisches Öl direkt von der Ernte.",
      bullets: [
        "15% Rabatt auf jede Lieferung",
        "Automatische Lieferung nach Hause",
        "Jederzeit pausieren oder kündigen",
        "Exklusive Probiergrößen neuer Ernten",
      ],
      emailPlaceholder: "Deine E-Mail für die Warteliste",
      ctaText: "Benachrichtige mich",
      quote: "Nie wieder ohne Öl dastehen. Das Abo ist super flexibel und die Qualität unschlagbar.",
      quoteAuthor: "Sarah K.",
      image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&fm=webp&q=80&w=1000",
    },
    storyTeaser: {
      tagline: "Unsere Wurzeln",
      headline: "Vom Hain direkt auf deinen Tisch",
      paragraph1: "Besher ist in Syrien mit der Olivenölkultur aufgewachsen – sein Vater hat sein Leben lang auf dem Feld gearbeitet. In Deutschland angekommen, vermisste er eines: echtes, kaltgepresstes Olivenöl, das nicht im Supermarktregal verwässert wird.",
      paragraph2: "Heute verbindet er Familienbetriebe aus Kreta und Italien direkt mit Kunden in Deutschland. Kein Zwischenhändler, keine Kompromisse. Jedes Öl wird doppelt im Labor geprüft.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&fm=webp&q=80&w=1000",
    },
    whyUs: {
      headline: "Warum Olea Terra?",
      productImage: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&fm=webp&q=80&w=800",
      hotspots: [
        { top: "30%", left: "20%", title: "Lichtgeschützt",  desc: "Dunkles 5L Design schützt perfekt vor UV-Strahlung und Oxidierung." },
        { top: "60%", left: "70%", title: "Premium Blend",   desc: "Kaltgepresst aus ausgewählten Bio-Oliven für den reinsten Geschmack." },
        { top: "80%", left: "30%", title: "Eco-Friendly",    desc: "Der Großkanister spart bis zu 60% Plastik im Vergleich zu kleinen Flaschen." },
      ],
      reasons: [
        {
          title: "Hoher Polyphenolgehalt",
          text: "Unsere frühe Ernte garantiert einen extrem hohen Anteil an Antioxidantien, die Entzündungen hemmen können.",
        },
        {
          title: "Doppelte Laborprüfung",
          text: "Jede Charge wird 2x im Labor geprüft: einmal im Ursprungsland, einmal bei Ankunft in Deutschland.",
        },
      ],
    },
    testimonials: {
      headline: "Was unsere Kunden sagen",
      subtext: "Wer einmal echtes Olivenöl probiert hat, geht nicht mehr zurück zum Supermarkt.",
    },
    faq: {
      headline: "Häufig gestellte Fragen",
      subtext: "Alles, was du über unser Premium-Olivenöl wissen musst.",
      items: [
        {
          q: "Wie lagere ich mein Olivenöl am besten?",
          a: "Olivenöl liebt es dunkel und kühl (ideal sind 14-18°C), aber nicht im Kühlschrank. Licht und Sauerstoff sind die größten Feinde der Qualität. Unsere Kanister schützen das Öl perfekt vor UV-Strahlung.",
        },
        {
          q: "Kann ich mit eurem Olivenöl auch braten?",
          a: "Ja, absolut! Unser natives Olivenöl extra ist bis ca. 190°C hitzestabil. Es eignet sich hervorragend zum Braten, Dünsten und Backen. Lediglich zum scharfen Anfeuern (Deep-Frying) empfehlen wir es aufgrund der feinen Aromen nicht.",
        },
        {
          q: "Was bedeutet 'kaltgepresst'?",
          a: "Kaltgepresst bedeutet, dass die Temperatur während der gesamten Extraktion nie über 27°C gestiegen ist. Nur so bleiben die wertvollen Vitamine, Antioxidantien und das volle Aroma erhalten.",
        },
        {
          q: "Warum ist mein Öl im Winter manchmal trüb oder flockig?",
          a: "Keine Sorge, das ist ein natürlicher Prozess! Olivenöl beginnt bei Temperaturen unter 7°C zu flokkulieren (fest zu werden). Bei Zimmertemperatur wird es schnell wieder klar – die Qualität bleibt dabei voll erhalten.",
        },
        {
          q: "Woher genau kommt das Öl?",
          a: "Wir beziehen unser Öl ohne Umwege direkt von festen Partnerbauern. Unsere Hauptquellen liegen in der Region Messenien auf der Peloponnes (Griechenland) sowie in Apulien (Italien).",
        },
      ],
    },
  },

  // ── Geschichte-Seite ─────────────────────────────────────
  story: {
    hero: {
      tagline: "Unsere Geschichte",
      headline: "Warum wir das machen",
      subtext: "Es geht nicht nur um Olivenöl. Es geht um Familien, Tradition und den Glauben, dass gute Lebensmittel keine Kompromisse brauchen.",
    },
    besher: {
      tagline: "Der Gründer",
      headline: "Besher",
      paragraph1: "Besher ist in Syrien mit der Olivenölkultur aufgewachsen. Sein Vater hat sein ganzes Leben lang auf den Feldern gearbeitet. Olivenöl war nicht einfach ein Lebensmittel – es war Teil der Familie, Teil der Identität.",
      paragraph2: "In Deutschland angekommen, machte er eine ernüchternde Erfahrung: Das Supermarkt-Öl hatte keine Seele. Keine Frische, keine echte Herkunft. Also beschloss er, die Brücke direkt zu den Bauern zu schlagen.",
      quote: "Direktimport ohne Umwege.",
      quoteSubtext: "Durch den Import in großen Mengen (4.000 Liter) direkt ab Feld und die Lagerung in Frankfurt senken wir Kosten und CO2-Abdruck massiv – zum Vorteil für Bauern und Kunden.",
      image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&fm=webp&q=80&w=1000",
    },
    farmers: {
      tagline: "Unsere Partner",
      headline: "Die Familien hinter dem Öl",
      subtext: "Klicken Sie auf eine Familie, um ihre Geschichte und die Felder zu sehen, auf denen unser Gold wächst.",
    },
    cta: {
      headline: "Probiere den Unterschied",
      subtext: "Hinter jeder Flasche steht ein Gesicht, eine Familie und eine Geschichte.",
      ctaText: "Jetzt bestellen",
    },
  },

  // ── Qualitäts-Seite ──────────────────────────────────────
  quality: {
    hero: {
      tagline: "Qualität & Transparenz",
      headline: "Doppelt geprüft.",
      headlineItalic: "Null Kompromisse.",
      subtext: "Unser größter Anspruch ist gleichzeitig unser größter USP: Jede einzelne Charge wird zweimal im Labor getestet – einmal im Ursprungsland und einmal bei Ankunft in Deutschland.",
    },
    analysis: {
      headline: "Die 2-Phasen Analyse",
      subtext: "Maximale Transparenz durch lückenlose Kontrolle. Wir dokumentieren den Zustand unseres Öls direkt am Ursprung und erneut bei Ankunft in Deutschland.",
    },
    processSteps: [
      { title: "Ernte & Pressung",    desc: "Innerhalb von 4h nach der Ernte kaltgepresst. Unter 27°C. Erste Pressung." },
      { title: "1. Labortest",        desc: "Im Ursprungsland: Säure, Reinheit, Pestizide. Nur zugelassene Chargen werden verschifft." },
      { title: "Transport & Lagerung", desc: "4.000 Liter pro Lieferung nach Frankfurt. Stickstoff-geschützte Lagerung für maximale Frische." },
      { title: "2. Labortest",        desc: "In Deutschland: Vollanalyse wiederholt. Vergleich mit Ursprungswerten. Erst dann Freigabe." },
    ],
    cta: {
      headline: "Überzeugt?",
      subtext: "Bestelle eine kostenlose Testprobe und schmecke den Unterschied, den doppelte Qualitätskontrolle macht.",
      ctaText: "Gratis Probe bestellen",
    },
  },

  // ── B2B-Seite ────────────────────────────────────────────
  b2b: {
    hero: {
      tagline: "Für die Gastronomie",
      headline: "Premium Olivenöl",
      headlineItalic: "für Profis",
      subtext: "Ihre Gäste fragen, welches Öl Sie verwenden? Dann ist es Zeit für Olea Terra. Verlässliche Qualität in Gastro-Gebinden, direkt ab Lager Frankfurt.",
    },
    why: {
      headline: "Warum Gastronomen uns wählen",
      subtext: "90% der Online-Olivenöl-Anbieter lagern nicht in Deutschland. Ihre Bestellung kommt direkt aus dem Mittelmeerraum – mit langen Lieferzeiten und hohen Versandkosten.",
      subtextBold: "Bei uns nicht.",
    },
    benefits: [
      "Staffelpreise ab 20 Liter Bestellvolumen",
      "Individuelle Lieferrhythmen (wöchentlich, monatlich)",
      "Lager in Frankfurt – Lieferung in 1-3 Werktagen",
      "Persönlicher Ansprechpartner",
      "Degustationsproben für Ihre Speisekarte",
      "Laborberichte für Ihre HACCP-Dokumentation",
    ],
    form: {
      headline: "Gastro-Anfrage",
      subtext: "Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot.",
      successHeadline: "Anfrage erfolgreich gesendet!",
      successText: "Vielen Dank für Ihr Interesse. Wir haben Ihre Daten erhalten und werden uns innerhalb der nächsten 24 Stunden mit einem maßgeschneiderten Angebot bei Ihnen melden.",
    },
  },
};

// ============================================================
// PRODUKTE – Preise, Namen, Beschreibungen, Bilder anpassen
// Bilder: Unsplash-URL durch eigene URL ersetzen (z.B. /images/produkt1.jpg)
// ============================================================
export const PRODUCTS: Product[] = [
  {
    id: "pouch-3l-eco",
    name: "Eco Nachfülltüte - 3 Liter",
    description:
      "Für die Umwelt und deinen Geldbeutel. Praktische Nachfülltüte mit 60% weniger Plastik als herkömmliche Kanister.",
    price: 54.99,
    unit: "l",
    size: "3L",
    image:
      "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&fm=webp&q=80&w=800",
    category: "canister",
  },
  {
    id: "can-3l-classic",
    name: "Natives Olivenöl Extra - 3 Liter",
    description:
      "Unser Klassiker für die tägliche Küche. Mild-fruchtig, direkt aus Messenien, Griechenland.",
    price: 64.99,
    unit: "l",
    size: "3L",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&fm=webp&q=80&w=800",
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
      "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&fm=webp&q=80&w=800",
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
      "https://images.unsplash.com/photo-1595991209266-5ff5a3a2f008?auto=format&fit=crop&fm=webp&q=80&w=800",
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
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&fm=webp&q=80&w=800",
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
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&fm=webp&q=80&w=800",
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
      "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&fm=webp&q=80&w=800",
    category: "canister",
  },
];

// ============================================================
// KUNDENSTIMMEN – echte Bewertungen eintragen
// ============================================================
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

// ============================================================
// BAUERNFAMILIEN (Seite „Unsere Geschichte")
// Bilder: Unsplash-URL durch eigene Fotos ersetzen
// ============================================================
export const FARMERS = [
  {
    id: "kydonakis",
    name: "Familie Kydonakis",
    region: "Chania, Kreta",
    country: "Griechenland",
    specialty: "Koroneiki-Oliven, frühe Ernte",
    since: "Seit 4 Generationen",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Die Familie Kydonakis bewirtschaftet ihre Haine im Schatten der Weißen Berge (Lefka Ori). Ihr Geheimnis ist der kalkhaltige Boden und die kühle Brise des Libyschen Meeres. Jeder Baum wird von Hand gepflegt, als wäre er ein Familienmitglied.",
    fields: ["Hain am Silberhang", "Tal der alten Stämme", "Küsten-Terrassen"],
    tradition: "Kaltpressung innerhalb von 2 Stunden nach der Ernte."
  },
  {
    id: "papadakis",
    name: "Familie Papadakis",
    region: "Heraklion, Kreta",
    country: "Griechenland",
    specialty: "Bio-zertifiziert, Hochphenolisch",
    since: "Seit 3 Generationen",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Papadakis war einer der Pioniere des ökologischen Landbaus auf Kreta. Für sie ist das Olivenöl ein Heilmittel. Ihr Öl zeichnet sich durch einen extrem hohen Gehalt an Antioxidantien aus.",
    fields: ["Sonnen-Plateau", "Bio-Garten West", "Fels-Reservat"],
    tradition: "Verwendung von natürlichem Kompost aus eigenen Schafbeständen."
  },
  {
    id: "manolis",
    name: "Familie Manolis",
    region: "Rethymnon, Kreta",
    country: "Griechenland",
    specialty: "Kaltgepresst, sortenrein",
    since: "Seit 5 Generationen",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Die Manolis-Brüder führen die Tradition ihres Urgroßvaters fort. Sie setzen auf maximale Reinheit und lehnen jede Form von Misch-Ölen kategorisch ab.",
    fields: ["Zentraler Hain", "Süd-Hügel", "Bachlauf-Parzelle"],
    tradition: "Traditionelle Steinmühlen-Initialpressung für maximale Aromatik."
  },
  {
    id: "stavros",
    name: "Familie Stavros",
    region: "Sitia, Kreta",
    country: "Griechenland",
    specialty: "Tsounati-Oliven, mild-fruchtig",
    since: "Seit 2 Generationen",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Im Osten Kretas, wo die Sonne am längsten scheint, konzentriert sich Stavros auf die seltene Tsounati-Sorte. Ein Öl für Kenner, die sanfte Noten lieben.",
    fields: ["Morgenröte-Feld", "Sandstein-Hügel"],
    tradition: "Ernte ausschließlich bei Neumond für optimale Saftkonzentration."
  },
  {
    id: "rossi",
    name: "Famiglia Rossi",
    region: "Puglia",
    country: "Italien",
    specialty: "Coratina, intensiv-herbe Note",
    since: "Seit 6 Generationen",
    image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Die Rossis aus Apulien sind bekannt für ihr kraftvolles Öl. Ihre Coratina-Bäume sind zum Teil über 400 Jahre alt und liefern ein Öl mit Charakter und Biss.",
    fields: ["Uralter Olivenhain", "Tal der Stille", "Rote Erde"],
    tradition: "Schonende Lagerung in traditionellen Terrakotta-Amphoren."
  },
  {
    id: "bianchi",
    name: "Famiglia Bianchi",
    region: "Toskana",
    country: "Italien",
    specialty: "Frantoio-Blend, ausgewogen",
    since: "Seit 3 Generationen",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "In den Hügeln der Toskana kreieren die Bianchis eine Komposition aus verschiedenen Sorten. Das Ergebnis ist ein perfekt ausbalanciertes Öl, das zu jedem Gericht passt.",
    fields: ["Zypressen-Hang", "Marmor-Blick", "Villa-Garten"],
    tradition: "Sensorische Analyse jeder einzelnen Flaschenfüllung durch den Familienrat."
  },
];
