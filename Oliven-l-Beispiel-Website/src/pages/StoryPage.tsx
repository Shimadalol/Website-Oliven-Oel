import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  ArrowRight,
  X,
  History,
  Sprout,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const FARMERS = [
  {
    id: "kydonakis",
    name: "Familie Kydonakis",
    region: "Chania, Kreta",
    country: "Griechenland",
    specialty: "Koroneiki-Oliven, frühe Ernte",
    since: "Seit 4 Generationen",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Die Familie Kydonakis bewirtschaftet ihre Haine im Schatten der Weißen Berge (Lefka Ori). Ihr Geheimnis ist der kalkhaltige Boden und die kühle Brise des Libyschen Meeres. Jeder Baum wird von Hand gepflegt, als wäre er ein Familienmitglied.",
    fields: ["Hain am Silberhang", "Tal der alten Stämme", "Küsten-Terrassen"],
    tradition: "Kaltpressung innerhalb von 2 Stunden nach der Ernte."
  },
  {
    id: "papadakis",
    name: "Familie Papadakis",
    region: "Heraklion, Kreta",
    country: "Griechenland",
    specialty: "Bio-zertifiziert, Hochphenolisch",
    since: "Seit 3 Generationen",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Papadakis war einer der Pioniere des ökologischen Landbaus auf Kreta. Für sie ist das Olivenöl ein Heilmittel. Ihr Öl zeichnet sich durch einen extrem hohen Gehalt an Antioxidantien aus.",
    fields: ["Sonnen-Plateau", "Bio-Garten West", "Fels-Reservat"],
    tradition: "Verwendung von natürlichen Kompost aus eigenen Schafbeständen."
  },
  {
    id: "manolis",
    name: "Familie Manolis",
    region: "Rethymnon, Kreta",
    country: "Griechenland",
    specialty: "Kaltgepresst, sortenrein",
    since: "Seit 5 Generationen",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Die Manolis-Brüder führen die Tradition ihres Urgroßvaters fort. Sie setzen auf maximale Reinheit und lehnen jede Form von Misch-Ölen kategorisch ab.",
    fields: ["Zentraler Hain", "Süd-Hügel", "Bachlauf-Parzelle"],
    tradition: "Traditionelle Steinmühlen-Initialpressung für maximale Aromatik."
  },
  {
    id: "stavros",
    name: "Familie Stavros",
    region: "Sitia, Kreta",
    country: "Griechenland",
    specialty: "Tsounati-Oliven, mild-fruchtig",
    since: "Seit 2 Generationen",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Im Osten Kretas, wo die Sonne am längsten scheint, konzentriert sich Stavros auf die seltene Tsounati-Sorte. Ein Öl für Kenner, die sanfte Noten lieben.",
    fields: ["Morgenröte-Feld", "Sandstein-Hügel"],
    tradition: "Ernte ausschließlich bei Neumond für optimale Saftkonzentration."
  },
  {
    id: "rossi",
    name: "Famiglia Rossi",
    region: "Puglia",
    country: "Italien",
    specialty: "Coratina, intensiv-herbe Note",
    since: "Seit 6 Generationen",
    image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "Die Rossis aus Apulien sind bekannt für ihr kraftvolles Öl. Ihre Coratina-Bäume sind zum Teil über 400 Jahre alt und liefern ein Öl mit Charakter und Biss.",
    fields: ["Uralter Olivenhain", "Tal der Stille", "Rote Erde"],
    tradition: "Schonende Lagerung in traditionellen Terrakotta-Amphoren."
  },
  {
    id: "bianchi",
    name: "Famiglia Bianchi",
    region: "Toskana",
    country: "Italien",
    specialty: "Frantoio-Blend, ausgewogen",
    since: "Seit 3 Generationen",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&fm=webp&q=80&w=600",
    fullStory: "In den Hügeln der Toskana kreieren die Bianchis eine Komposition aus verschiedenen Sorten. Das Ergebnis ist ein perfekt ausbalanciertes Öl, das zu jedem Gericht passt.",
    fields: ["Zypressen-Hang", "Marmor-Blick", "Villa-Garten"],
    tradition: "Sensorische Analyse jeder einzelnen Flaschenfüllung durch den Familienrat."
  },
];

export default function StoryPage() {
  const [selectedFarmer, setSelectedFarmer] = useState<typeof FARMERS[0] | null>(null);

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grow pt-20"
    >
      <Helmet>
        <title>Unsere Geschichte | Olea Terra</title>
        <meta name="description" content="Erfahre mehr über Besher und unsere Partnerfamilien. Transparenz direkt vom Feld in deine Küche." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-olive-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-harvest-gold font-bold uppercase tracking-widest text-sm mb-4 block">
              Unsere Geschichte
            </span>
            <h1 className="text-5xl md:text-6xl mb-8 leading-[1.1]">
              Warum wir das machen
            </h1>
            <p className="text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              Es geht nicht nur um Olivenöl. Es geht um Familien, Tradition und
              den Glauben, dass gute Lebensmittel keine Kompromisse brauchen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Besher's Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-harvest-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                Der Gründer
              </span>
              <h2 className="text-4xl md:text-5xl mb-8">Besher</h2>

              <div className="space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  <strong className="text-charcoal">
                    Besher ist in Syrien mit der Olivenölkultur aufgewachsen.
                  </strong>{" "}
                  Sein Vater hat sein ganzes Leben lang auf den Feldern
                  gearbeitet. Olivenöl was nicht einfach ein Lebensmittel – es
                  war Teil der Familie, Teil der Identität.
                </p>
                <p>
                  In Deutschland angekommen, machte er eine ernüchternde Erfahrung:
                  <strong className="text-charcoal">
                    {" "}Das Supermarkt-Öl hatte keine Seele.
                  </strong>
                  Keine Frische, keine echte Herkunft. Also beschloss er, die Brücke direkt zu den Bauern zu schlagen.
                </p>

                <div className="my-8 p-8 bg-olive-50 rounded-3xl border border-olive-100">
                  <h4 className="font-serif text-xl text-charcoal mb-4 italic">
                    "Direktimport ohne Umwege."
                  </h4>
                  <p className="text-sm text-olive-600">
                    Durch den Import in großen Mengen (4.000 Liter) direkt ab Feld und die Lagerung in Frankfurt senken wir Kosten und CO2-Abdruck massiv – zum Vorteil für Bauern und Kunden.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&fm=webp&q=80&w=1000"
                alt="Besher's Story"
                className="organic-shape shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Profiles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-4 block">
              Unsere Partner
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Die Familien hinter dem Öl
            </h2>
            <p className="text-olive-600 max-w-2xl mx-auto">
              Klicken Sie auf eine Familie, um ihre Geschichte und die Felder zu sehen, auf denen unser Gold wächst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FARMERS.map((farmer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedFarmer(farmer)}
                className="group bg-olive-50 rounded-3xl overflow-hidden border border-olive-100 cursor-pointer hover:shadow-2xl hover:border-olive-200 transition-all duration-300"
              >
                <div className="aspect-4/3 overflow-hidden relative">
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-olive-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white font-bold flex items-center gap-2">
                      Geschichte lesen <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-olive-700 transition-colors">{farmer.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-olive-500 mb-4">
                    <MapPin size={14} />
                    <span>{farmer.region}</span>
                  </div>
                  <p className="text-sm text-olive-700 mb-2 font-medium">{farmer.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Overlay / Modal */}
      <AnimatePresence>
        {selectedFarmer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFarmer(null)}
              className="absolute inset-0 bg-olive-950/80 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={selectedFarmer.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedFarmer(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto shrink-0">
                <img src={selectedFarmer.image} className="w-full h-full object-cover" alt={selectedFarmer.name} />
              </div>

              <div className="p-8 md:p-12 overflow-y-auto grow">
                <span className="text-terracotta font-bold text-sm uppercase tracking-widest block mb-2">{selectedFarmer.since}</span>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">{selectedFarmer.name}</h2>
                <div className="flex items-center gap-2 text-olive-500 mb-8 pb-8 border-b border-olive-100">
                  <MapPin size={18} />
                  <span className="font-medium">{selectedFarmer.region}, {selectedFarmer.country}</span>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-charcoal font-bold mb-3">
                      <History size={18} className="text-olive-600" /> Geschichte
                    </h4>
                    <p className="text-olive-700 leading-relaxed italic">"{selectedFarmer.fullStory}"</p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-charcoal font-bold mb-3">
                      <Sprout size={18} className="text-olive-600" /> Die Felder
                    </h4>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {selectedFarmer.fields.map((f, i) => (
                        <span key={i} className="px-4 py-2 bg-olive-50 border border-olive-100 rounded-full text-olive-600 font-medium">#{f}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-4">
                    <ShieldCheck size={24} className="text-green-600 shrink-0" />
                    <div>
                      <h5 className="font-bold text-green-900 text-sm mb-1">Qualitäts-Tradition</h5>
                      <p className="text-sm text-green-800/80">{selectedFarmer.tradition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 bg-olive-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Probiere den Unterschied</h2>
          <p className="text-charcoal/80 text-lg mb-10">
            Hinter jeder Flasche steht ein Gesicht, eine Familie und eine Geschichte.
          </p>
          <Link
            to="/#shop"
            className="inline-flex items-center gap-2 bg-earth-green hover:bg-earth-green/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
          >
            Jetzt bestellen <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
