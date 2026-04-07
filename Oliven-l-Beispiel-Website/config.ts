// ============================================================
// ZENTRALE KONFIGURATION – hier alle Kundendaten anpassen
// ============================================================

export const COMPANY_INFO = {
  name: "Olea Terra",
  legalName: "Olea Terra GmbH",
  tagline: "Premium Olivenöl direkt vom Erzeuger aus dem Mittelmeerraum.",

  address: {
    street: "Musterstraße 123",
    city: "Frankfurt am Main",
    zip: "60311",
    country: "Deutschland",
  },

  contact: {
    email: "info@oleaterra.de",
    emailB2B: "gastro@oleaterra.de",
    phone: "+49 (0) 69 123 456 78",
    representative: "Besher Muster",
  },

  legal: {
    vatId: "DE 123456789",
  },

  social: {
    instagram: "#", // z.B. "https://instagram.com/oleaterra"
    facebook: "#",  // z.B. "https://facebook.com/oleaterra"
    twitter: "#",   // z.B. "https://twitter.com/oleaterra"
  },

  // Formspree: Kostenlosen Account anlegen auf https://formspree.io
  // Dann die Form-URL hier eintragen, z.B. "https://formspree.io/f/xabc1234"
  formspreeUrl: "" as string,
};
