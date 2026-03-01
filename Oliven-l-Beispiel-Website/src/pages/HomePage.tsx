import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ShoppingBag, 
  CheckCircle2, 
  Star, 
  Truck, 
  RefreshCw, 
  ShieldCheck, 
  ArrowRight,
  Leaf,
  Droplets,
  Award,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Gift
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, TESTIMONIALS } from '../data';
import { useCart } from '../context/CartContext';

const Hotspot = ({ top, left, title, desc }: { top: string, left: string, title: string, desc: string }) => (
  <div className="absolute group z-20 cursor-pointer" style={{ top, left }}>
    <span className="flex h-5 w-5 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-gold opacity-75"></span>
      <span className="relative inline-flex rounded-full h-5 w-5 bg-harvest-gold border-2 border-white shadow-md"></span>
    </span>
    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/95 backdrop-blur-md border border-white/40 p-3 rounded-xl shadow-xl z-30 transform -translate-x-2 group-hover:translate-x-0">
      <p className="font-bold text-xs text-charcoal mb-1">{title}</p>
      <p className="text-[10px] text-olive-600 leading-tight">{desc}</p>
    </div>
  </div>
);

export default function HomePage() {
  const { addItem } = useCart();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grow"
    >
      {/* Launch Offer Banner */}
      <section className="bg-harvest-gold text-white py-3 px-6 text-center mt-[72px]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <Sparkles size={18} />
          <span className="font-bold text-sm tracking-wide uppercase">Launch-Angebot:</span>
          <span className="text-sm">50% Rabatt für die ersten 100 Kunden!</span>
          <a href="#shop" className="ml-2 bg-white text-harvest-gold px-4 py-1 rounded-full text-xs font-bold hover:bg-white/90 transition-colors duration-200 cursor-pointer shadow-sm">
            Jetzt sichern
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-olive-950">
        <motion.div 
          className="absolute inset-0 z-0 origin-top"
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          <motion.img 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&fm=webp&q=80&w=2000"
            alt="Olivenhaine im Mittelmeerraum" 
            loading="eager"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-olive-950/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-olive-500/30 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                Direkt vom Familienbetrieb
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">
              Echtes Olivenöl.<br />
              <span className="italic text-olive-200">Kein Supermarkt.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-olive-100 max-w-lg">
              Wir bringen kaltgepresstes Olivenöl von kleinen Familienbetrieben aus Kreta und Italien direkt in deine Küche. 
              Doppelt laborgeprüft. Ohne Zwischenhändler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#shop" className="bg-earth-green hover:bg-earth-green/90 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl cursor-pointer">
                Testprobe anfordern <ArrowRight size={20} />
              </a>
              <Link to="/story" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer">
                Unsere Geschichte
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-olive-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <ShieldCheck className="text-olive-400" size={32} />
            <div>
              <p className="font-bold">2x Laborgeprüft</p>
              <p className="text-sm text-olive-300">Im Ursprung & in DE</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Truck className="text-olive-400" size={32} />
            <div>
              <p className="font-bold">Lager in Frankfurt</p>
              <p className="text-sm text-olive-300">Schneller Versand aus DE</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Gift className="text-olive-400" size={32} />
            <div>
              <p className="font-bold">Gratis Testprobe</p>
              <p className="text-sm text-olive-300">Nur Versandkosten</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <RefreshCw className="text-olive-400" size={32} />
            <div>
              <p className="font-bold">Eco Nachfülltüten</p>
              <p className="text-sm text-olive-300">60% weniger Plastik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Unser Sortiment</h2>
            <p className="text-olive-600 max-w-2xl mx-auto">
              Von der kostenlosen Testprobe bis zum 10-Liter-Gastro-Kanister – für jeden Bedarf das richtige Format.
              Alle Öle sind kaltgepresst, 1. Pressung und Bio-zertifiziert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group bg-olive-50 rounded-3xl overflow-hidden border border-olive-100 flex flex-col h-full cursor-pointer"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {product.category === 'canister' && (
                    <div className="absolute top-4 right-4 bg-harvest-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      Bestseller
                    </div>
                  )}
                  {product.id === 'sample-50ml' && (
                    <div className="absolute top-4 right-4 bg-earth-green text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      Gratis
                    </div>
                  )}
                  {product.id === 'bundle-tasting' && (
                    <div className="absolute top-4 right-4 bg-charcoal text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                      <Gift size={12} /> Geschenkidee
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl">{product.name}</h3>
                    <span className="text-olive-600 font-mono text-sm">{product.size}</span>
                  </div>
                  <p className="text-olive-700 text-sm mb-6 grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      {product.price === 0 ? (
                        <span className="text-2xl font-bold text-olive-600">Gratis</span>
                      ) : (
                        <span className="text-2xl font-bold text-charcoal">{product.price.toFixed(2)}€</span>
                      )}
                      <span className="text-xs text-olive-500 block">inkl. MwSt.</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="bg-charcoal text-white p-4 rounded-2xl hover:bg-charcoal/80 transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section (Coming Soon) */}
      <section id="abo" className="py-24 bg-olive-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&fm=webp&q=80&w=1000" 
                  alt="Olivenöl wird eingegossen" 
                  loading="lazy"
                  className="organic-shape shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                  </div>
                  <p className="text-sm italic text-olive-800">"Nie wieder ohne Öl dastehen. Das Abo ist super flexibel und die Qualität unschlagbar."</p>
                  <p className="text-xs font-bold mt-2">— Sarah K.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta/10 text-terracotta rounded-full text-sm font-bold mb-6">
                <Sparkles size={16} /> Coming Soon
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">Das Olivenöl-Abo</h2>
              <p className="text-lg text-olive-800 mb-8">
                Werde Teil unseres Oliven-Clubs und erhalte automatisch alle 3 oder 6 Monate frisches Öl direkt von der Ernte.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  '15% Rabatt auf jede Lieferung',
                  'Automatische Lieferung nach Hause',
                  'Jederzeit pausieren oder kündigen',
                  'Exklusive Probiergrößen neuer Ernten'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-olive-600" size={24} />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Deine E-Mail für die Warteliste"
                  className="flex-1 px-6 py-4 rounded-full border border-olive-200 bg-white focus:outline-none focus:ring-2 focus:ring-earth-green text-charcoal shadow-sm"
                />
                <button className="bg-harvest-gold hover:bg-harvest-gold/90 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-harvest-gold/20 hover:shadow-harvest-gold/40 hover:-translate-y-1 cursor-pointer">
                  Benachrichtige mich
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust: Quick Story Teaser */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-4 block">Unsere Wurzeln</span>
              <h2 className="text-4xl md:text-5xl mb-6">Vom Hain direkt auf deinen Tisch</h2>
              <p className="text-olive-700 mb-6 leading-relaxed">
                Besher ist in Syrien mit der Olivenölkultur aufgewachsen – sein Vater hat sein Leben lang auf dem Feld gearbeitet.
                In Deutschland angekommen, vermisste er eines: echtes, kaltgepresstes Olivenöl, das nicht im Supermarktregal verwässert wird.
              </p>
              <p className="text-olive-700 mb-8 leading-relaxed">
                Heute verbindet er Familienbetriebe aus Kreta und Italien direkt mit Kunden in Deutschland. 
                Kein Zwischenhändler, keine Kompromisse. Jedes Öl wird doppelt im Labor geprüft.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-olive-50 rounded-2xl border border-olive-100">
                  <Award className="text-olive-600 mb-3" size={32} />
                  <p className="font-bold">Bio Zertifiziert</p>
                  <p className="text-xs text-olive-500">DE-ÖKO-006</p>
                </div>
                <div className="p-6 bg-olive-50 rounded-2xl border border-olive-100">
                  <Leaf className="text-olive-600 mb-3" size={32} />
                  <p className="font-bold">Kaltgepresst</p>
                  <p className="text-xs text-olive-500">1. Pressung, unter 27°C</p>
                </div>
              </div>
              <Link to="/story" className="inline-flex items-center gap-2 text-olive-600 font-bold hover:text-olive-800 transition-colors duration-200 cursor-pointer">
                Die ganze Geschichte lesen <ChevronRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-olive-100 rounded-full -z-10" />
              <motion.img 
                initial={{ opacity: 0, rotate: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&fm=webp&q=80&w=1000" 
                alt="Olivenbaum in Kreta" 
                loading="lazy"
                className="organic-shape shadow-2xl hover:rotate-0 transition-transform duration-700 cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-olive-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-olive-500/20 rounded-full flex items-center justify-center relative">
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 md:w-72 relative z-10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&fm=webp&q=80&w=800" 
                    alt="Olivenöl Kanister" 
                    loading="lazy"
                    className="drop-shadow-2xl relative z-0"
                    referrerPolicy="no-referrer"
                  />
                  <Hotspot top="30%" left="20%" title="Lichtgeschützt" desc="Dunkles 5L Design schützt perfekt vor UV-Strahlung und Oxidierung." />
                  <Hotspot top="60%" left="70%" title="Premium Blend" desc="Kaltgepresst aus ausgewählten Bio-Oliven für den reinsten Geschmack." />
                  <Hotspot top="80%" left="30%" title="Eco-Friendly" desc="Der Großkanister spart bis zu 60% Plastik im Vergleich zu kleinen Flaschen." />
                </motion.div>
                <div className="absolute top-10 left-10 w-12 h-12 bg-olive-400 rounded-full blur-xl opacity-50" />
                <div className="absolute bottom-20 right-10 w-20 h-20 bg-olive-600 rounded-full blur-2xl opacity-30" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl mb-8">Warum Olea Terra?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Droplets className="text-olive-400" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Hoher Polyphenolgehalt</h4>
                    <p className="text-olive-300 text-sm">Unsere frühe Ernte garantiert einen extrem hohen Anteil an Antioxidantien, die Entzündungen hemmen können.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Leaf className="text-olive-400" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Doppelte Laborprüfung</h4>
                    <p className="text-olive-300 text-sm">Jede Charge wird 2x im Labor geprüft: einmal im Ursprungsland, einmal bei Ankunft in Deutschland. <Link to="/quality" className="underline text-olive-200 hover:text-white">Ergebnisse einsehen →</Link></p>
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-olive-400 mb-4">Nährwerte pro 100ml</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Energie</span>
                      <span className="font-bold">824 kcal</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Fett</span>
                      <span className="font-bold">91.6g</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>davon gesättigt</span>
                      <span className="font-bold">12.8g</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Vitamin E</span>
                      <span className="font-bold">20mg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl mb-4">Was unsere Kunden sagen</h2>
              <p className="text-olive-600">Wer einmal echtes Olivenöl probiert hat, geht nicht mehr zurück zum Supermarkt.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-4 rounded-full border border-olive-200 hover:bg-olive-50 transition-colors duration-200 cursor-pointer">
                <ChevronLeft size={24} />
              </button>
              <button className="p-4 rounded-full border border-olive-200 hover:bg-olive-50 transition-colors duration-200 cursor-pointer">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-10 bg-olive-50 rounded-[32px] border border-olive-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-xl font-serif italic mb-8 text-charcoal">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-olive-200 rounded-full" />
                  <div>
                    <p className="font-bold text-charcoal">{t.author}</p>
                    <p className="text-sm text-olive-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
