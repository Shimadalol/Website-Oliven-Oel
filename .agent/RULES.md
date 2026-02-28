# Agent Rules & Guidelines

Diese Regeln gelten für alle KI-Agenten, die an diesem Projekt arbeiten.

## 1. Git & Branch Management

- **Immer auf `main` arbeiten:** Die Entwicklung findet ausschließlich auf dem `main`-Branch statt.
- **Synchronisation nach jeder Aufgabe:** Am Ende jeder abgeschlossenen Aufgabe (Task) **MUSS** der Stand auf GitHub (Remote) aktualisiert werden.
  - Befehl: `git push origin main`
  - Ziel: Der Stand auf GitHub (Remote) muss immer aktuell sein.

## 2. Projekt Kontext

- Dieses Projekt ist der **BWS Fixture Builder**. Es dient zur Erstellung und zum Export von DMX-Fixture Definitions (R20, D4, XML).
- Achte auf die Datenstruktur in `src/types/fixture.ts`.
