import { motion } from 'motion/react';
import { COMPANY_INFO } from '../../config';

// ⚠️ HINWEIS: Diese AGB sind ein Muster und müssen vor der Veröffentlichung
// von einem Rechtsanwalt geprüft und auf Ihr Unternehmen angepasst werden.

export default function TermsPage() {
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
          Diese AGB sind ein juristisches Muster. Bitte vor der Liveschaltung von einem Rechtsanwalt prüfen lassen und auf Ihr Unternehmen zuschneiden.
        </div>

        <h1 className="text-4xl md:text-5xl mb-8">Allgemeine Geschäftsbedingungen</h1>

        <div className="prose prose-olive max-w-none text-charcoal/80 space-y-8">

          <section>
            <h2>§ 1 Geltungsbereich und Anbieter</h2>
            <p>(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Bestellungen, die Sie als Verbraucher (§ 13 BGB) oder Unternehmer (§ 14 BGB) über unseren Online-Shop tätigen.</p>
            <p>(2) Anbieter ist die {legalName}, {address.street}, {address.zip} {address.city}, E-Mail: {contact.email}, Tel.: {contact.phone}.</p>
            <p>(3) Entgegenstehende oder abweichende Bedingungen des Kunden erkennen wir nicht an, es sei denn, wir haben ihrer Geltung ausdrücklich schriftlich zugestimmt.</p>
          </section>

          <section>
            <h2>§ 2 Vertragsschluss</h2>
            <p>(1) Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung (invitatio ad offerendum) dar.</p>
            <p>(2) Durch Klicken auf den Button „Jetzt kaufen" bzw. „Bestellung abschließen" geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab.</p>
            <p>(3) Die Bestätigung des Eingangs Ihrer Bestellung erfolgt unverzüglich per E-Mail. Diese Eingangsbestätigung stellt noch keine Annahme Ihres Angebots dar. Ein Kaufvertrag kommt erst mit der gesonderten Auftragsbestätigung oder Versandbestätigung zustande.</p>
          </section>

          <section>
            <h2>§ 3 Preise und Versandkosten</h2>
            <p>(1) Alle Preise sind Endpreise und enthalten die gesetzliche Mehrwertsteuer (MwSt.).</p>
            <p>(2) Zusätzlich zu den angegebenen Produktpreisen können Versandkosten anfallen. Die Höhe der Versandkosten wird Ihnen vor Abschluss der Bestellung auf der Produktseite und im Bestellprozess deutlich mitgeteilt.</p>
            <p>(3) Ab einem Bestellwert von [ANPASSEN: z.B. 75 €] liefern wir innerhalb Deutschlands versandkostenfrei.</p>
          </section>

          <section>
            <h2>§ 4 Lieferung und Lieferzeit</h2>
            <p>(1) Die Lieferung erfolgt an die von Ihnen bei der Bestellung angegebene Lieferadresse.</p>
            <p>(2) Die angegebenen Lieferzeiten sind unverbindliche Richtwerte. Bei Zahlungen per Vorkasse beginnt die Lieferfrist am Tag nach Zahlungseingang.</p>
            <p>(3) Wir liefern ausschließlich innerhalb Deutschlands. [ANPASSEN: ggf. EU-Versand ergänzen]</p>
            <p>(4) Ist das bestellte Produkt nicht verfügbar, weil wir von unserem Lieferanten ohne eigenes Verschulden nicht beliefert werden, sind wir berechtigt, uns vom Vertrag zu lösen. Wir werden Sie unverzüglich informieren und bereits erhaltene Zahlungen unverzüglich erstatten.</p>
          </section>

          <section>
            <h2>§ 5 Zahlung</h2>
            <p>(1) In unserem Shop stehen Ihnen folgende Zahlungsarten zur Verfügung: [ANPASSEN: z.B. Kreditkarte, PayPal, Klarna, Vorkasse].</p>
            <p>(2) Bei Zahlung per Vorkasse nennen wir Ihnen unsere Bankverbindung in der Auftragsbestätigung und liefern die Ware nach Zahlungseingang.</p>
            <p>(3) Beim Kauf auf Rechnung ist der Rechnungsbetrag innerhalb von 14 Tagen nach Erhalt der Ware und der Rechnung zu zahlen, sofern nichts anderes vereinbart wird.</p>
          </section>

          <section>
            <h2>§ 6 Widerrufsrecht</h2>
            <p><strong>Widerrufsrecht für Verbraucher</strong></p>
            <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
            <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns ({legalName}, {address.street}, {address.zip} {address.city}, E-Mail: {contact.email}) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
            <p><strong>Ausnahmen vom Widerrufsrecht:</strong> Das Widerrufsrecht besteht nicht bei Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde, sowie bei Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde.</p>
            <p><strong>Widerrufsfolgen:</strong> Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
          </section>

          <section>
            <h2>§ 7 Eigentumsvorbehalt</h2>
            <p>Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>
          </section>

          <section>
            <h2>§ 8 Gewährleistung und Mängelrüge</h2>
            <p>(1) Es gelten die gesetzlichen Gewährleistungsrechte. Die Verjährungsfrist für Mängelansprüche bei neuen Sachen beträgt zwei Jahre ab Lieferung der Ware.</p>
            <p>(2) Als Verbraucher werden Sie gebeten, die Ware bei Lieferung auf Vollständigkeit, offensichtliche Mängel und Transportschäden zu überprüfen und uns sowie dem Spediteur Beanstandungen unverzüglich mitzuteilen.</p>
          </section>

          <section>
            <h2>§ 9 Haftung</h2>
            <p>(1) Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.</p>
            <p>(2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist unsere Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
            <p>(3) Im Übrigen ist unsere Haftung ausgeschlossen.</p>
          </section>

          <section>
            <h2>§ 10 Online-Streitbeilegung</h2>
            <p>Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr" className="underline hover:text-earth-green transition-colors" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
            <p>Wir sind bereit, an einem außergerichtlichen Schlichtungsverfahren teilzunehmen. Zuständig ist [ANPASSEN: Schlichtungsstelle eintragen].</p>
          </section>

          <section>
            <h2>§ 11 Anwendbares Recht und Gerichtsstand</h2>
            <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei Verträgen mit Verbrauchern gilt diese Rechtswahl nur, soweit der gewährte Schutz nicht durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.</p>
            <p>Gerichtsstand für alle Streitigkeiten mit Kaufleuten, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen ist {address.city}.</p>
          </section>

          <p className="text-xs text-olive-400 pt-4 border-t border-olive-100">Stand: [ANPASSEN: Datum einfügen]</p>
        </div>
      </div>
    </motion.main>
  );
}
