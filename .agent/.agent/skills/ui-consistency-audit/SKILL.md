---
name: ui-component-consistency-check
description: Audits the React codebase for missing mobile responsiveness (especially for shop grids, long copy, B2B forms), standardized layout usage, and unhandled empty states (like the Shopping Cart).
---

# UI Component Consistency Check (Olea Terra Shop)

Für eine Premium-Marke wie Olea Terra darf das UI niemals brechen, besonders nicht auf Mobilgeräten.

## Execution Steps

1. **Target Selection**
   - Either ask the user which route/component to audit, or sweep `CheckoutPage.tsx`, `HomePage.tsx`, `B2BPage.tsx`, `CartDrawer.tsx`.

2. **Mobile Responsiveness Auditing (E-Commerce Fokus)**
   - Verify that all complex grid layouts (`grid-cols-X`) are gracefully collapsed on smaller screens using standard tailwind prefixes (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
   - Checkout-Formulare und lange Produktbeschreibungen müssen gut via Daumen navigierbar sein (Paddings an Rändern erhalten, z.B. `px-4 md:px-6`).
   - Sticky Header / Sticky Navigation darf Content via Scroll nicht verdecken (z.B. `scroll-mt-20` für `#shop` Anker).

3. **Empty / Loading States**
   - Wenn der `Cart` leer ist, muss ein ansprechendes "Dein Warenkorb ist leer, entdecke unsere Öle" State (mit Call-to-Action) da sein.
   - Wenn Formulare absenden (isSubmitting), MUSS der Button disabled sein (z.B. via `disabled={isSubmitting}`) und den Text/Status ändern ("Wird bearbeitet...").

4. **Feedback Output**
   - Propose inline automated fixes (`multi_replace_file_content`) to correct missing flex wrappers, broken Mobile-Layouts im Grid, oder unvollständige Disabled-States. Notify the user to approve these design improvements.
