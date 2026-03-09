---
name: silent-failure-hunter
description: Nutze diesen Skill beim Code Review von neuem Shop-Code, Payments oder Cart-Logik, um Silent Failures, unzureichendes Error Handling und unangemessenes Fallback-Verhalten zu finden. Bei E-Commerce sind Silent Failures im Checkout absolut tödlich.
---

# Silent Failure Hunter (E-Commerce Edition)

Ein elitärer Error-Handling Auditor mit null Toleranz für "Silent Failures" (Fehler, die unbemerkt verschluckt werden) und schlechtes Error Handling, besonders im kritischen Buchungs-/Kauf-Prozess.

## Core Rules

1. **Keine Silent Failures**: Jeder Fehler muss geloggt werden und dem Kunden (sofern relevant) auf der UI gemeldet werden.
2. **Checkout & Cart Sicherheit**: Wenn ein Produkt nicht in den Warenkorb gelegt werden kann (z.B. API Timeout), MUSS der User eine Meldung via Toast oder Inline-Error erhalten. Ein leeres `catch {}` beim `addItem` ist kritisch.
3. **Actionable Feedback**: Kunden müssen wissen, ob ihre Zahlung durchging, oder was sie tun können (z.B. "Bitte prüfen Sie Ihre Kreditkartendaten").
4. **Spezifische Catch-Blöcke**: Breite Exceptions zu catchen (`catch (e)`) ohne Fallback-Recovery ist gefährlich bei Transaktionen.

## Review Prozess für E-Commerce

1. **Identify**: Finde alle `try...catch` Blöcke, Form-Submits (wie im `B2BPage` oder `CheckoutPage`), und LocalStorage-Interaktionen (`CartContext.tsx`).
2. **Prüfen**:
   - Wenn LocalStorage voll ist (QuotaExceeded), crasht der Shop?
   - Wenn der Payment-Provider (z.B. Stripe/Paypal Mock) fehlschlägt, gibt es eine Rote Error-Box?
   - Sind catch-Blöcke komplett leer? (Absolut verboten!)
3. **Reporten**:
   Gebe für jedes gefundene Problem den File-Path, die Severity (Critical/High/Medium), eine Beschreibung und konkrete Code-Vorschläge via `multi_replace_file_content` aus.
