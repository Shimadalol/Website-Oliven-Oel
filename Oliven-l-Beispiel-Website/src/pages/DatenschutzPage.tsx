import { motion } from 'motion/react';

export default function DatenschutzPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grow pt-32 pb-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-olive max-w-none text-charcoal/80 space-y-6">
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          <h2>2. Datenerfassung auf dieser Website</h2>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
          <h2>3. Analyse-Tools und Tools von Drittanbietern</h2>
          <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
          {/* Add more placeholder text as needed */}
        </div>
      </div>
    </motion.main>
  );
}
