# Olea Terra – Website

## Schnellstart

**Voraussetzungen:** Node.js (empfohlen: v20+)

```bash
npm install
npm run dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

---

## Kundendaten anpassen

Alle unternehmensrelevanten Daten befinden sich **ausschließlich** in einer einzigen Datei:

**`src/config.ts`**

Dort können folgende Werte jederzeit geändert werden, ohne den restlichen Code anzufassen:

| Feld | Beschreibung |
|------|-------------|
| `name` / `legalName` | Firmenname (kurz und rechtlich) |
| `tagline` | Kurzbeschreibung im Footer |
| `address` | Straße, PLZ, Stadt |
| `contact.email` | Allgemeine Kontakt-E-Mail |
| `contact.emailB2B` | E-Mail für Gastronomieanfragen |
| `contact.phone` | Telefonnummer |
| `contact.representative` | Name des Vertretungsberechtigten (für Impressum) |
| `legal.vatId` | Umsatzsteuer-ID |
| `social.instagram/facebook/twitter` | Links zu den Social-Media-Profilen |
| `formspreeUrl` | URL des Kontaktformulars (siehe unten) |

---

## Kontaktformular einrichten (Formspree)

Das B2B-Kontaktformular ist fertig vorbereitet. Um echte E-Mails zu empfangen:

1. Kostenlosen Account anlegen auf [formspree.io](https://formspree.io)
2. Neues Formular erstellen → die angezeigte URL kopieren (z.B. `https://formspree.io/f/xabc1234`)
3. Diese URL in `src/config.ts` bei `formspreeUrl` eintragen

Solange `formspreeUrl` leer ist, öffnet das Formular beim Absenden automatisch das E-Mail-Programm des Besuchers als Fallback.

---

## Deployment (Empfehlung: Vercel)

1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) einloggen → "Add New Project" → GitHub-Repo auswählen
3. Vercel erkennt Vite automatisch – einfach deployen
4. Eigene Domain unter "Domains" eintragen

Alternativ: `npm run build` erzeugt einen `dist/`-Ordner, der auf jedem Webhosting hochgeladen werden kann.

---

## Technischer Stack

| Technologie | Zweck |
|-------------|-------|
| React 19 + TypeScript | UI-Framework |
| Vite | Build-Tool |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animationen |
| React Router 7 | Seitennavigation |
| React Hook Form + Zod | Formularvalidierung |
| Lucide React | Icons |
