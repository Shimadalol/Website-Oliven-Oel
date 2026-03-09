import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, closeCart, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-60"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-white/95 backdrop-blur-2xl border-l border-white/20 shadow-2xl z-70 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-earth-green" size={24} />
                <h2 className="text-xl font-serif font-bold text-charcoal">
                  Warenkorb
                  {totalItems > 0 && (
                    <span className="ml-2 text-sm font-sans font-normal text-earth-green/70">
                      ({totalItems} {totalItems === 1 ? 'Artikel' : 'Artikel'})
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-black/5 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-earth-green"
              >
                <X size={24} className="text-charcoal" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 bg-warm-white/50">
              {items.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center p-8 mt-12 text-center bg-olive-50 rounded-3xl border border-olive-100/50 shadow-sm"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <ShoppingBag className="text-earth-green" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal mb-3">Dein Warenkorb ist noch leer</h3>
                  <p className="text-sm text-olive-600 mb-8 leading-relaxed max-w-[250px]">
                    Entdecke unsere premium kaltgepressten Bio-Olivenöle und bringe den echten Geschmack des Mittelmeers in deine Küche.
                  </p>
                  <button
                    onClick={() => {
                      closeCart();
                      navigate('/');
                      setTimeout(() => {
                        const shopSection = document.getElementById('shop');
                        if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full bg-earth-green hover:bg-earth-green/90 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-earth-green/20 hover:-translate-y-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-earth-green"
                  >
                    Bestseller entdecken
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 p-4 bg-olive-50 rounded-2xl border border-olive-100"
                    >
                      {/* Product Image */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-xl shrink-0"
                        referrerPolicy="no-referrer"
                      />

                      {/* Product Details Area */}
                      <div className="flex flex-1 gap-2">
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-charcoal text-sm truncate">
                              {item.product.name}
                            </h3>
                            <p className="text-xs text-olive-500 mt-0.5">{item.product.size}</p>
                          </div>

                          <div className="flex items-center gap-2 mt-auto">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full border border-black/5 px-1 shadow-sm">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1.5 hover:bg-white rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-earth-green"
                              >
                                <Minus size={14} className="text-earth-green" />
                              </button>
                              <span className="text-sm font-bold text-charcoal w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1.5 hover:bg-white rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-earth-green"
                              >
                                <Plus size={14} className="text-earth-green" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Price and Delete Container */}
                        <div className="flex flex-col items-end justify-between shrink-0">
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="p-1.5 hover:bg-red-50 rounded-full transition-colors duration-200 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                          >
                            <Trash2 size={16} className="text-charcoal/40 group-hover:text-red-500 transition-colors duration-200" />
                          </button>

                          <div className="text-right mt-auto">
                            {item.product.price === 0 ? (
                              <span className="font-bold text-harvest-gold block mt-2">Gratis</span>
                            ) : (
                              <span className="font-bold text-charcoal block mt-2">
                                {(item.product.price * item.quantity).toFixed(2)}€
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-black/5 p-6 space-y-4 bg-white/30 backdrop-blur-md">
                {/* Subtotal */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>Zwischensumme</span>
                    <span>{totalPrice.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>Versand</span>
                    <span>{totalPrice >= 50 ? 'Kostenlos' : '4,90€'}</span>
                  </div>
                  <div className="h-px bg-black/5" />
                  <div className="flex justify-between text-lg font-bold text-charcoal">
                    <span>Gesamt</span>
                    <span>{(totalPrice + (totalPrice >= 50 ? 0 : 4.90)).toFixed(2)}€</span>
                  </div>
                  {totalPrice < 50 && (
                    <p className="text-xs text-charcoal/60 text-center">
                      Noch {(50 - totalPrice).toFixed(2)}€ bis zum kostenlosen Versand!
                    </p>
                  )}
                </div>

                {/* Checkout Button */}
                <button 
                  onClick={() => {
                    closeCart();
                    navigate('/checkout');
                  }}
                  className="w-full bg-earth-green hover:bg-earth-green/90 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-earth-green/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-earth-green focus-visible:ring-offset-2"
                >
                  Zur Kasse ({totalPrice >= 50 ? totalPrice.toFixed(2) : (totalPrice + 4.90).toFixed(2)}€)
                </button>

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-charcoal/50 hover:text-red-500 transition-colors duration-200 cursor-pointer py-2 focus:outline-none focus-visible:underline"
                >
                  Warenkorb leeren
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
