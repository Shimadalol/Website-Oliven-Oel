import { motion } from 'motion/react';
import { COMPANY_INFO } from '../../config';

export default function ImpressumPage() {
  const { legalName, address, contact, legal } = COMPANY_INFO;

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
          <p>
            {legalName}<br />
            {address.street}<br />
            {address.zip} {address.city}
          </p>
          <p>
            <strong>Vertreten durch:</strong><br />
            {contact.representative}
          </p>
          <p>
            <strong>Kontakt:</strong><br />
            Telefon: <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-earth-green transition-colors">{contact.phone}</a><br />
            E-Mail: <a href={`mailto:${contact.email}`} className="hover:text-earth-green transition-colors">{contact.email}</a>
          </p>
          <p>
            <strong>Umsatzsteuer-ID:</strong><br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            {legal.vatId}
          </p>
        </div>
      </div>
    </motion.main>
  );
}
