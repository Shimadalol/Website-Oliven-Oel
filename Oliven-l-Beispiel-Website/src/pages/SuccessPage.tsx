import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, ShoppingBag, Truck, Gift } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Helmet } from "react-helmet-async";

export default function SuccessPage() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart on successful order
    clearCart();
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const orderNumber = Math.floor(Math.random() * 90000) + 10000;

  return (
    <main className="grow pt-32 pb-24 bg-olive-50 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Vielen Dank für deine Bestellung | Olea Terra</title>
      </Helmet>

      <div className="max-w-xl w-full mx-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[40px] shadow-2xl text-center border border-olive-100"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="text-green-600" size={48} />
          </motion.div>

          <h1 className="text-4xl font-serif text-charcoal mb-4">Bestellung erfolgreich!</h1>
          <p className="text-olive-500 mb-8">
            Bestellnummer: <span className="font-mono font-bold text-charcoal">#OT-{orderNumber}</span>
          </p>
          
          <div className="space-y-6 text-left mb-10">
            <div className="flex gap-4 p-4 bg-olive-50 rounded-2xl border border-olive-100">
              <Truck className="text-olive-600 shrink-0" size={24} />
              <div>
                <p className="font-bold text-sm">Schneller Versand</p>
                <p className="text-xs text-olive-600">Wir bereiten dein Paket vor. Lieferung in 1-3 Werktagen.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-olive-50 rounded-2xl border border-olive-100">
              <Gift className="text-olive-600 shrink-0" size={24} />
              <div>
                <p className="font-bold text-sm">Glaube an Qualität</p>
                <p className="text-xs text-olive-600">Du erhältst eine Bestätigungsmail mit allen Details.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => navigate('/')}
              className="bg-earth-green hover:bg-earth-green/90 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg w-full"
            >
              Weiter einkaufen
            </button>
            <p className="text-xs text-olive-400">
              Fragen? Schreib uns an info@oleaterra.de
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
