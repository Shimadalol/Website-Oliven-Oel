---
name: stock-level-monitor
description: Überprüft die simulierten Lagerbestände der Bestseller, Probierpakete und B2B-Kanister auf der Olivenöl-Seite und warnt bei Out-Of-Stock Szenarien oder generiert Shop-Benachrichtigungen ("Nur noch 3 auf Lager").
---

# Stock Level Monitor (Olea Terra)

Um Scarcity und Dringlichkeit im E-Commerce aufzubauen, aber auch um Frustration bei B2B-Großbestellungen zu vermeiden, analysiert dieser Skill Bestandswarnungen.

## Quick Start
Wenn der User Out-of-Stock-Logik implementieren will oder "Lagerbestand prüfen" ruft:
1. **Fetch Data:** Lies die Produkte in `src/data.ts`.
2. **Logic Check:** Prüfe, ob die `Product` Typ-Definition einen `stockLevel` oder `isLimitedStore` Flag hat. Falls nicht, schlage vor, das `Product` Interface in `types.ts` um `stockLevel?: number` zu erweitern.
3. **UI Implementation:** Füge in den Product Cards (`HomePage.tsx`) Warnungen hinzu wie `Nur noch X verfügbar!` in roter (terracotta) Schrift, wenn Bestand < 10.
4. **B2B Fallback:** Bei B2B-Volumes über dem verfügbaren Bestand, ändere den CTA "In den Warenkorb" zu "Lieferzeit anfragen".

## Scarcity Guidelines
- Nutze das `terracotta` Rot aus dem Design für Limitierungen ("Nur noch 2 auf Lager!").
- Baue keine falschen "Fake-Scarcity" Counter, sondern koppele sie an echte Arrays.
