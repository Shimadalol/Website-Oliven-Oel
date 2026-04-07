import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl"
        >
          <div className="bg-olive-950 text-olive-100 rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-white/10">
            <Cookie size={24} className="text-harvest-gold shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-sm leading-relaxed grow">
              Wir verwenden Cookies, um die Website-Erfahrung zu verbessern.{' '}
              <Link to="/datenschutz" className="underline hover:text-harvest-gold transition-colors">
                Mehr erfahren
              </Link>
            </p>
            <div className="flex gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={decline}
                className="flex-1 sm:flex-none px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none px-4 py-2 rounded-full text-sm bg-harvest-gold text-white font-bold hover:bg-harvest-gold/90 transition-colors cursor-pointer"
              >
                Akzeptieren
              </button>
            </div>
            <button
              onClick={decline}
              aria-label="Schließen"
              className="absolute top-3 right-3 text-olive-400 hover:text-white transition-colors cursor-pointer sm:hidden"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
