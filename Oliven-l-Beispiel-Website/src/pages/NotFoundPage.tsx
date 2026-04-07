import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplets } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="grow flex items-center justify-center min-h-[70vh] px-6 text-center"
    >
      <div className="max-w-md">
        <div className="w-20 h-20 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Droplets size={36} className="text-olive-500" />
        </div>
        <p className="text-olive-400 font-mono text-sm uppercase tracking-widest mb-4">404</p>
        <h1 className="text-4xl md:text-5xl mb-6">Seite nicht gefunden</h1>
        <p className="text-olive-600 leading-relaxed mb-10">
          Diese Seite existiert leider nicht. Vielleicht haben Sie sich vertippt oder der Link ist veraltet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg"
        >
          <ArrowLeft size={20} />
          Zur Startseite
        </Link>
      </div>
    </motion.main>
  );
}
