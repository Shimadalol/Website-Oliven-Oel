---
name: skill-creator
description: Erstelle neue Skills, modifiziere und verbessere bestehende Skills im Olivenöl-Projekt. Nutze diesen Skill, wenn der User einen neuen E-Commerce Skill von Grund auf neu erstellen möchte.
---

# Skill Creator (Olea Terra)

Ein Meta-Skill zur Erstellung und Verbesserung anderer Skills in diesem E-Commerce Frontend Projekt.
Skills liegen im Verzeichnis `.agent/.agent/skills/<skill-name>/SKILL.md`.

## Ablauf der Skill-Erstellung

1. **Intent erfassen**:
   - Geht es um Shop-Logik, Conversion-Optimierung, B2B-Generierung, oder UI-Ästhetik?
   - Wann soll der Skill triggern? (z.B. "Check Checkout")

2. **Skill-Struktur anlegen**:
   Jeder Skill braucht einen eigenen Ordner mit einer `SKILL.md`:
   ```
   .agent/.agent/skills/<skill-name>/SKILL.md
   ```

3. **SKILL.md schreiben**:
   - Die Datei **MUSS** Frontmatter (YAML) mit `name:` und `description:` haben
   - Nutze stets die Brand-Mentalität: Premium Olivenöl Firma (Olea Terra, Laborprüfungen, Bio, Direkt aus Griechenland/Italien).
   - Schreibe im Imperativ ("Tu dies", "Mache das")

4. **Integration**: Setze Tools wie `write_to_file` aktiv dafür ein und benachrichtige den Nutzer, dass der Skill einsatzbereit ist.
