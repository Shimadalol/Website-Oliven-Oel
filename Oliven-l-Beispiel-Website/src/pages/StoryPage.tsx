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
import { FARMERS, TEXTS } from "../data";

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
              {TEXTS.story.hero.tagline}
            </span>
            <h1 className="text-5xl md:text-6xl mb-8 leading-[1.1]">
              {TEXTS.story.hero.headline}
            </h1>
            <p className="text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              {TEXTS.story.hero.subtext}
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
                {TEXTS.story.besher.tagline}
              </span>
              <h2 className="text-4xl md:text-5xl mb-8">{TEXTS.story.besher.headline}</h2>

              <div className="space-y-6 text-charcoal/80 leading-relaxed">
                <p>{TEXTS.story.besher.paragraph1}</p>
                <p>{TEXTS.story.besher.paragraph2}</p>

                <div className="my-8 p-8 bg-olive-50 rounded-3xl border border-olive-100">
                  <h4 className="font-serif text-xl text-charcoal mb-4 italic">
                    "{TEXTS.story.besher.quote}"
                  </h4>
                  <p className="text-sm text-olive-600">
                    {TEXTS.story.besher.quoteSubtext}
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
                src={TEXTS.story.besher.image}
                alt={TEXTS.story.besher.headline}
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
              {TEXTS.story.farmers.tagline}
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              {TEXTS.story.farmers.headline}
            </h2>
            <p className="text-olive-600 max-w-2xl mx-auto">
              {TEXTS.story.farmers.subtext}
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
          <h2 className="text-4xl md:text-5xl mb-6">{TEXTS.story.cta.headline}</h2>
          <p className="text-charcoal/80 text-lg mb-10">
            {TEXTS.story.cta.subtext}
          </p>
          <Link
            to="/#shop"
            className="inline-flex items-center gap-2 bg-earth-green hover:bg-earth-green/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
          >
            {TEXTS.story.cta.ctaText} <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
