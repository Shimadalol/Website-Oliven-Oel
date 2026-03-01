import { Droplets, CreditCard, ShieldCheck, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-olive-950 text-olive-200 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-olive-600 rounded-full flex items-center justify-center text-white">
              <Droplets size={18} />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-white">Olea Terra</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Premium Olivenöl direkt vom Erzeuger aus dem Mittelmeerraum. Nachhaltig, fair und von höchster Güteklasse.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full hover:bg-harvest-gold hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:-translate-y-1">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full hover:bg-harvest-gold hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:-translate-y-1">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full hover:bg-harvest-gold hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:-translate-y-1">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/#shop" className="hover:text-white transition-colors">Alle Produkte</Link></li>
            <li><Link to="/#shop" className="hover:text-white transition-colors">Testproben</Link></li>
            <li><Link to="/#shop" className="hover:text-white transition-colors">5L Kanister</Link></li>
            <li><Link to="/#shop" className="hover:text-white transition-colors">Eco Refill Tüten</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Olea Terra</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/story" className="hover:text-white transition-colors">Beshers Geschichte</Link></li>
            <li><Link to="/quality" className="hover:text-white transition-colors">Labor & Qualität</Link></li>
            <li><Link to="/b2b" className="hover:text-white transition-colors">Für die Gastronomie</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Kontakt</h4>
          <ul className="space-y-4 text-sm">
            <li>info@oleaterra.de</li>
            <li>+49 (0) 69 123 456 78</li>
            <li>Frankfurt am Main</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-olive-400">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-2 md:order-1">
          <p>© 2026 Olea Terra. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
        
        {/* Logos area */}
        <div className="flex flex-wrap justify-center gap-6 opacity-70 hover:opacity-100 transition-opacity duration-300 order-1 md:order-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} />
            <span className="font-medium tracking-wide">Sichere Zahlung</span>
          </div>
          <div className="flex gap-3 text-white">
            <div className="px-3 py-1 bg-white/10 rounded border border-white/20 font-bold flex items-center justify-center">PayPal</div>
            <div className="px-3 py-1 bg-white/10 rounded border border-white/20 font-bold flex items-center justify-center">Visa</div>
            <div className="px-3 py-1 bg-white/10 rounded border border-white/20 font-bold flex items-center justify-center">Mastercard</div>
            <div className="px-3 py-1 bg-white/10 rounded border border-white/20 font-bold flex items-center justify-center">Klarna</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
