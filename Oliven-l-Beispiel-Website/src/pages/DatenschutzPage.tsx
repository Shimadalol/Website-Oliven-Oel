import { motion } from 'motion/react';
import { COMPANY_INFO } from '../../config';

// ⚠️ HINWEIS: Diese Datenschutzerklärung ist ein Muster und muss vor der Veröffentlichung
// auf die tatsächlich eingesetzten Tools und Dienste angepasst werden (z.B. Analytics,
// Zahlungsanbieter, Newsletter-Dienste). Im Zweifel Rechtsanwalt hinzuziehen.

export default function DatenschutzPage() {
  const { legalName, address, contact } = COMPANY_INFO;

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="grow pt-32 pb-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Hinweis-Banner */}
        <div className="mb-10 px-5 py-4 bg-yellow-50 border border-yellow-200 rounded-2xl text-sm text-yellow-800">
          <strong>⚠️ Mustertext – vor Veröffentlichung anpassen!</strong><br />
          Diese Datenschutzerklärung ist ein Muster. Stellen Sie sicher, dass alle genutzten Drittanbieter-Dienste (Zahlungsanbieter, Analytics, Newsletter etc.) darin aufgeführt sind. Im Zweifel Rechtsanwalt einschalten.
        </div>

        <h1 className="text-4xl md:text-5xl mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-olive max-w-none text-charcoal/80 space-y-8">

          <section>
            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlicher im Sinne der DSGVO ist:</p>
            <p>
              {legalName}<br />
              {address.street}<br />
              {address.zip} {address.city}<br />
              E-Mail: <a href={`mailto:${contact.email}`} className="underline hover:text-earth-green transition-colors">{contact.email}</a><br />
              Tel.: {contact.phone}
            </p>
          </section>

          <section>
            <h2>2. Allgemeines zur Datenverarbeitung</h2>
            <p>Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Erhebung und Verwendung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers oder wenn gesetzliche Grundlagen dies erlauben.</p>
          </section>

          <section>
            <h2>3. Hosting und Server-Log-Dateien</h2>
            <p>Diese Website wird bei [ANPASSEN: z.B. Vercel / Netlify / Hetzner] gehostet. Der Anbieter erhebt automatisch Informationen, die Ihr Browser übermittelt (sog. Server-Log-Files), darunter Browser-Typ, Betriebssystem, Referrer-URL, IP-Adresse, Uhrzeit der Serveranfrage.</p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
          </section>

          <section>
            <h2>4. Cookies</h2>
            <p>Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Wir setzen ausschließlich technisch notwendige Cookies ein (z.B. zur Speicherung Ihrer Cookie-Einwilligung und des Warenkorbs).</p>
            <p>Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gesetzt. Sie können Ihren Browser so einstellen, dass er keine Cookies speichert; in diesem Fall kann die Funktionalität der Website eingeschränkt sein.</p>
          </section>

          <section>
            <h2>5. Bestellvorgang und Vertragsabwicklung</h2>
            <p>Wenn Sie bei uns bestellen, verarbeiten wir folgende Daten zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO): Name, Adresse, E-Mail-Adresse, Telefonnummer (optional), Zahlungsdaten.</p>
            <p>Diese Daten werden nur zur Abwicklung Ihrer Bestellung und ggf. zur Korrespondenz mit Ihnen genutzt. Eine Weitergabe an Dritte erfolgt nur, soweit dies für die Vertragserfüllung nötig ist (z.B. Versanddienstleister).</p>
          </section>

          <section>
            <h2>6. Kontaktformular</h2>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail, Nachricht) zum Zweck der Bearbeitung der Anfrage und für eventuelle Anschlussfragen bei uns gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. f DSGVO.</p>
            <p>[ANPASSEN: Falls Formspree genutzt wird: „Die Übermittlung der Formulardaten erfolgt über den Dienst Formspree (Formspree Inc., USA). Weitere Informationen unter https://formspree.io/legal/privacy-policy"]</p>
          </section>

          <section>
            <h2>7. Zahlungsdienstleister</h2>
            <p>[ANPASSEN: Hier jeden genutzten Zahlungsanbieter einzeln aufführen, z.B.:]</p>
            <p><strong>PayPal:</strong> Bei Zahlung via PayPal werden Ihre Zahlungsdaten an PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg übermittelt. Es gelten die Datenschutzbestimmungen von PayPal: <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" className="underline hover:text-earth-green transition-colors" target="_blank" rel="noopener noreferrer">paypal.com/privacy</a>.</p>
            <p><strong>[Weitere Anbieter ergänzen: Klarna, Stripe, Mollie etc.]</strong></p>
          </section>

          <section>
            <h2>8. Speicherdauer</h2>
            <p>Wir speichern Ihre Daten nicht länger, als es für die jeweiligen Zwecke erforderlich ist. Soweit steuer- und handelsrechtliche Aufbewahrungsfristen bestehen (i.d.R. 6 oder 10 Jahre), werden die entsprechenden Daten bis zum Ablauf dieser Fristen gespeichert.</p>
          </section>

          <section>
            <h2>9. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p>Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an: <a href={`mailto:${contact.email}`} className="underline hover:text-earth-green transition-colors">{contact.email}</a></p>
            <p>Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde in Hessen: Hessischer Beauftragter für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden. [ANPASSEN: Bundesland ggf. ändern]</p>
          </section>

          <section>
            <h2>10. Änderungen dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Wir empfehlen, diese Seite regelmäßig zu besuchen.</p>
          </section>

          <p className="text-xs text-olive-400 pt-4 border-t border-olive-100">Stand: [ANPASSEN: Datum einfügen]</p>
        </div>
      </div>
    </motion.main>
  );
}
