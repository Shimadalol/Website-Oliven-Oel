import { motion } from 'motion/react';

export default function ImpressumPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grow pt-32 pb-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl mb-8">Impressum</h1>
        <div className="prose prose-olive max-w-none text-charcoal/80 space-y-6">
          <p><strong>Angaben gemäß § 5 TMG</strong></p>
          <p>Olea Terra GmbH<br />Musterstraße 123<br />60311 Frankfurt am Main</p>
          <p><strong>Vertreten durch:</strong><br />Besher Muster</p>
          <p><strong>Kontakt:</strong><br />Telefon: +49 (0) 69 123 456 78<br />E-Mail: info@oleaterra.de</p>
          <p><strong>Umsatzsteuer-ID:</strong><br />Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE 123456789</p>
        </div>
      </div>
    </motion.main>
  );
}
