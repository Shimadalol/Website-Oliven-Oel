import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grow pt-32 pb-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl mb-8">Allgemeine Geschäftsbedingungen</h1>
        <div className="prose prose-olive max-w-none text-charcoal/80 space-y-6">
          <h2>§ 1 Geltungsbereich und Anbieter</h2>
          <p>(1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die Sie im Online-Shop der Olea Terra GmbH tätigen.</p>
          <h2>§ 2 Vertragsschluss</h2>
          <p>(1) Die Warenpräsentation im Online-Shop stellt keinen verbindlichen Antrag auf den Abschluss eines Kaufvertrages dar.</p>
          <h2>§ 3 Preise und Versandkosten</h2>
          <p>(1) Die auf den Produktseiten genannten Preise enthalten die gesetzliche Mehrwertsteuer und sonstige Preisbestandteile.</p>
          {/* Add more placeholder text as needed */}
        </div>
      </div>
    </motion.main>
  );
}
