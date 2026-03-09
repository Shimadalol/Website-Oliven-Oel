import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Droplets } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-warm-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center text-white shadow-md">
              <Droplets size={24} />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-charcoal">Olea Terra</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/#shop" className={cn("text-sm font-medium hover:text-earth-green transition-colors duration-200 cursor-pointer", location.pathname === '/' && location.hash === '#shop' && "text-earth-green")}>Shop</Link>
            <Link to="/story" className={cn("text-sm font-medium hover:text-earth-green transition-colors duration-200 cursor-pointer", location.pathname === '/story' && "text-earth-green")}>Unsere Geschichte</Link>
            <Link to="/quality" className={cn("text-sm font-medium hover:text-earth-green transition-colors duration-200 cursor-pointer", location.pathname === '/quality' && "text-earth-green")}>Qualität & Labor</Link>
            <Link to="/b2b" className={cn("text-sm font-medium hover:text-earth-green transition-colors duration-200 cursor-pointer", location.pathname === '/b2b' && "text-earth-green")}>Gastronomie (B2B)</Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-earth-green/10 rounded-full transition-colors duration-200 cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-earth-green"
            >
              <ShoppingBag size={22} className="text-charcoal" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-harvest-gold text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm"
                >
                  {totalItems > 99 ? '99+' : totalItems}
                </motion.span>
              )}
            </button>
            <button 
              className="md:hidden p-2 hover:bg-earth-green/10 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-earth-green"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-charcoal" /> : <Menu size={24} className="text-charcoal" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-serif">
              <Link to="/#shop" onClick={closeMenu}>Shop</Link>
              <Link to="/story" onClick={closeMenu}>Unsere Geschichte</Link>
              <Link to="/quality" onClick={closeMenu}>Qualität & Labor</Link>
              <Link to="/b2b" onClick={closeMenu}>Gastronomie (B2B)</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

