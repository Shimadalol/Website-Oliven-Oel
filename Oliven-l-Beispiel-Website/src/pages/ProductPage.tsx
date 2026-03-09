import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ShoppingBag, 
  ArrowLeft, 
  Leaf, 
  ShieldCheck, 
  Droplets, 
  MapPin, 
  ChevronRight,
  Info
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data";
import { Helmet } from "react-helmet-async";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <main className="grow pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Produkt nicht gefunden</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-earth-green hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} /> Zurück zum Shop
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="grow pt-24 pb-24 bg-white">
      <Helmet>
        <title>{product.name} | Olea Terra</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-olive-600 hover:text-charcoal transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Zurück
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-[40px] overflow-hidden bg-olive-50 border border-olive-100"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <span className="text-harvest-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                {product.category === 'canister' ? 'Großgebinde' : 'Glasflasche'}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 text-olive-600">
                <span className="text-2xl font-mono">{product.size}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-olive-200" />
                <span className="font-medium">Direktbezug</span>
              </div>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="p-4 bg-olive-50 rounded-2xl border border-olive-100 flex items-center gap-3">
                <Leaf className="text-earth-green" size={24} />
                <div>
                  <p className="text-xs text-olive-500 font-bold uppercase tracking-wider">Bio</p>
                  <p className="font-medium text-sm">Zertifiziert</p>
                </div>
              </div>
              <div className="p-4 bg-olive-50 rounded-2xl border border-olive-100 flex items-center gap-3">
                <ShieldCheck className="text-earth-green" size={24} />
                <div>
                  <p className="text-xs text-olive-500 font-bold uppercase tracking-wider">Qualität</p>
                  <p className="font-medium text-sm">Kaltgepresst</p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between mb-8 pb-8 border-b border-olive-100">
              <div>
                <p className="text-olive-500 text-sm mb-1">Preis inkl. MwSt.</p>
                <p className="text-4xl font-bold text-charcoal">
                  {product.price === 0 ? "Gratis" : `${product.price.toFixed(2)}€`}
                </p>
              </div>
              <button
                onClick={() => addItem(product)}
                className="bg-charcoal text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-olive-800 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3"
              >
                In den Warenkorb <ShoppingBag size={22} />
              </button>
            </div>

            {/* Product Details Tabs (Simplified) */}
            <div className="space-y-4">
              <div className="p-6 bg-warm-white rounded-[24px] border border-olive-100">
                <h3 className="font-bold flex items-center gap-2 mb-3">
                  <Droplets size={18} className="text-earth-green" /> 
                  Geschmacksprofil
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Mild-fruchtig mit Nuancen von frischen Kräutern und einem sanften, pfeffrigen Abgang. Ideal für Salate und die kalte Küche.
                </p>
              </div>
              <div className="p-6 bg-warm-white rounded-[24px] border border-olive-100">
                <h3 className="font-bold flex items-center gap-2 mb-3">
                  <MapPin size={18} className="text-earth-green" /> 
                  Herkunft
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Messenien, Griechenland. Ernte 2023/24. Von Hand gepflückt und innerhalb von 4 Stunden gepresst.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
