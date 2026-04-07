# Olea Terra – Website

## Schnellstart

**Voraussetzung:** Node.js installiert (Download: https://nodejs.org)

```bash
npm install
npm run dev
```

Dann im Browser öffnen: `http://localhost:3000`

---

## Wo was geändert werden muss

### 1. Firmen- & Kontaktdaten → `config.ts` (im Hauptordner)

Dies ist die **einzige Datei**, die für die Grundeinrichtung angefasst werden muss.
Einfach die Werte zwischen den Anführungszeichen ersetzen:

```ts
name: "Olea Terra",              // ← Kurzname (überall sichtbar)
legalName: "Olea Terra GmbH",    // ← Rechtlicher Name (Impressum, AGB)

address: {
  street: "Musterstraße 123",    // ← Echte Straße
  city: "Frankfurt am Main",     // ← Echte Stadt
  zip: "60311",                  // ← Echte PLZ
},

contact: {
  email: "info@...",             // ← Allgemeine E-Mail
  emailB2B: "gastro@...",        // ← E-Mail für Gastronomieanfragen
  phone: "+49 ...",              // ← Telefonnummer
  representative: "Max Muster",  // ← Name des Inhabers (Impressum)
},

legal: {
  vatId: "DE 123456789",         // ← Echte Umsatzsteuer-ID
},

social: {
  instagram: "https://instagram.com/...",  // ← Oder "#" lassen, wenn nicht vorhanden
  facebook:  "https://facebook.com/...",
  twitter:   "https://twitter.com/...",
},

formspreeUrl: "",  // ← Kontaktformular: siehe Abschnitt unten
```

---

### 2. Texte der Website → `src/data.ts` (`TEXTS`)

Nahezu alle festen Texte der Website (Überschriften, Slogans, Absätze auf der Startseite, Geschichte-Seite, Qualitäts-Seite und B2B-Seite) befinden sich zentral im `TEXTS`-Objekt in der Datei `src/data.ts`.
Ändere einfach die Werte in den Anführungszeichen, um die Texte der Seite anzupassen, ohne den Code der Seiten selbst durchsuchen zu müssen.

---

### 3. Produkte → `src/data.ts`

Jedes Produkt hat folgende Felder:

| Feld | Beschreibung |
|------|-------------|
| `name` | Produktname |
| `description` | Kurzbeschreibung |
| `price` | Preis als Zahl (z.B. `64.99`) |
| `size` | Gebindegröße (z.B. `"3L"`, `"500ml"`) |
| `image` | URL zum Produktbild (Unsplash-Link durch eigenes Foto ersetzen) |
| `category` | `"bottle"`, `"canister"` oder `"bundle"` |

**Produkt hinzufügen:** Einfach einen neuen Block im `PRODUCTS`-Array kopieren und ausfüllen.  
**Produkt entfernen:** Den gesamten Block `{ ... },` löschen.

---

### 4. Kundenstimmen → `src/data.ts`

Im `TESTIMONIALS`-Array echte Kundenbewertungen eintragen:

```ts
{
  id: "3",
  author: "Klaus M.",
  role: "Privathaushalt",
  content: "Sehr gutes Öl, kommt immer wieder!",
  rating: 5,
},
```

---

### 5. Partnerfamilien / Bauern → `src/data.ts`

Im `FARMERS`-Array befinden sich die Karten auf der „Geschichte"-Seite.

| Feld | Beschreibung |
|------|-------------|
| `name` | Name der Familie |
| `region` | Region / Herkunftsort |
| `country` | Land |
| `specialty` | Kurze Spezialität |
| `since` | „Seit X Generationen" |
| `image` | Foto der Farm (URL oder lokaler Pfad) |
| `fullStory` | Langer Text im Popup |
| `fields` | Liste der Felder (als Tags angezeigt) |
| `tradition` | Besondere Produktionstradition |

---

### 6. Bilder austauschen

Alle aktuellen Bilder kommen von Unsplash (kostenlose Platzhalter).
Eigene Fotos so einbinden:

1. Foto in den Ordner `public/images/` legen (Ordner ggf. anlegen)
2. In `src/data.ts` oder der jeweiligen Seite die URL ersetzen:
   ```
   image: "https://images.unsplash.com/..."  →  image: "/images/mein-foto.jpg"
   ```

---

### 7. Rechtstexte → `src/pages/`

| Datei | Seite |
|-------|-------|
| `src/pages/ImpressumPage.tsx` | Impressum (Daten kommen aus `config.ts`) |
| `src/pages/TermsPage.tsx` | AGB |
| `src/pages/DatenschutzPage.tsx` | Datenschutzerklärung |

**⚠️ Wichtig:** AGB und Datenschutz enthalten Mustertexte mit `[ANPASSEN: ...]`-Markierungen.
Diese Stellen müssen vor der Liveschaltung von einem Rechtsanwalt geprüft und ausgefüllt werden.

---

### 8. Kontaktformular (Formspree)

Das B2B-Formular ist vorbereitet. Für echte E-Mail-Zustellung:

1. Kostenlosen Account auf **[formspree.io](https://formspree.io)** anlegen
2. Neues Formular erstellen → URL kopieren (z.B. `https://formspree.io/f/xabc1234`)
3. Diese URL in `config.ts` bei `formspreeUrl` eintragen

Ohne Formspree-URL öffnet sich beim Absenden automatisch das E-Mail-Programm als Fallback.

---

## Anleitung für Anfänger (Ohne Programmierkenntnisse)

Wenn du diese ZIP-Datei erhalten hast und die Website online stellen möchtest – keine Sorge, das geht auch ohne technisches Vorwissen! Befolge einfach diese Anleitung Schritt für Schritt.

### Schritt 1: GitHub-Account erstellen & Dateien hochladen
GitHub ist der Ort, wo der "Quellcode" deiner Website sicher gespeichert wird.

1. Gehe auf **[github.com](https://github.com)** und klicke oben rechts auf **"Sign up"**, um ein kostenloses Konto zu erstellen.
2. Wenn du eingeloggt bist, klicke oben rechts auf das **+** (Plus-Symbol) und wähle **"New repository"**.
3. Bei "Repository name" gib einen Namen ein (z.B. `olea-terra-website`). Lass alles andere so wie es ist und klicke ganz unten auf den grünen Button **"Create repository"**.
4. Auf der nächsten Seite siehst du viele Befehle. Klicke dort auf den blauen Link **"uploading an existing file"**.
5. **WICHTIG:** Entpacke (falls noch nicht geschehen) die ZIP-Datei, die du erhalten hast, auf deinem Computer.
6. Ziehe **alle Dateien und Ordner** aus dem entpackten Ordner per Drag & Drop in das Feld auf GitHub. 
   *(Hinweis: Falls ein Ordner namens `node_modules` existiert, lade diesen **nicht** mit hoch!)*
7. Scrolle nach unten und klicke auf den grünen Button **"Commit changes"**. Das dauert jetzt einen Moment.

### Schritt 2: Vercel nutzen, um die Website online zu bringen
Vercel nimmt deine Dateien von GitHub und macht daraus eine echte Website.

1. Gehe auf **[vercel.com](https://vercel.com)** und klicke auf **"Sign Up"**.
2. Wähle **"Continue with GitHub"** und erlaube Vercel den Zugriff auf dein GitHub-Konto.
3. Klicke in Vercel oben rechts auf **"Add New..."** und wähle **"Project"**.
4. Du solltest nun dein eben erstelltes GitHub-Repository (z.B. `olea-terra-website`) in der Liste sehen. Klicke daneben auf **"Import"**.
5. Vercel erkennt automatisch fast alles. Scrolle einfach nach unten und klicke auf den blauen Button **"Deploy"**.
6. Jetzt siehst du, wie Vercel arbeitet. Nach 1-2 Minuten fliegen Konfetti über den Bildschirm – deine Website ist online!

### Schritt 3: Eigene Domain (z.B. www.deine-domain.de) verknüpfen
1. Klicke in Vercel nach dem erfolgreichen "Deploy" auf **"Continue to Dashboard"**.
2. Oben im Menü klicke auf **"Settings"** und dann links auf **"Domains"**.
3. Trage deine gewünschte Internetadresse ein (die du z.B. bei IONOS, Strato oder Checkdomain gekauft hast) und klicke auf **"Add"**.
4. Vercel zeigt dir nun Werte an, die du bei deinem Domain-Anbieter (z.B. IONOS) eintragen musst. Meistens ist das ein "A-Record" oder ein "Nameserver". Wenn du hier nicht weiterkommst, schicke genau diesen Screenshot von Vercel an den Kundenservice deines Domain-Anbieters!

---

## Alternative für eigene Server (Für Webhoster wie IONOS / Strato)

Falls du GitHub und Vercel nicht nutzen möchtest, kannst du die Website auch als fertige HTML-Dateien generieren:
1. Erfordert [Node.js](https://nodejs.org).
2. Öffne den Ordner im Terminal (Kommandozeile) und tippe: `npm install`
3. Danach tippe: `npm run build`
4. Es entsteht ein neuer Ordner namens `dist`. Nimm **nur den Inhalt** dieses `dist`-Ordners und lade ihn per FTP auf deinen Webspace bei IONOS/Strato hoch.

---

## Technischer Stack (zur Info)

| Technologie | Zweck |
|-------------|-------|
| React 19 + TypeScript | UI-Framework |
| Vite | Build-Tool |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animationen |
| React Router 7 | Seitennavigation |
| React Hook Form + Zod | Formularvalidierung |
| Lucide React | Icons |
