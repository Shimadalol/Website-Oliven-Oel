import { motion } from "motion/react";
import {
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const FARMERS = [
  {
    name: "Familie Kydonakis",
    region: "Chania, Kreta",
    country: "Griechenland",
    specialty: "Koroneiki-Oliven, frühe Ernte",
    since: "Seit 4 Generationen",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&fm=webp&q=80&w=600",
  },
  {
    name: "Familie Papadakis",
    region: "Heraklion, Kreta",
    country: "Griechenland",
    specialty: "Bio-zertifiziert, Hochphenolisch",
    since: "Seit 3 Generationen",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&fm=webp&q=80&w=600",
  },
  {
    name: "Familie Manolis",
    region: "Rethymnon, Kreta",
    country: "Griechenland",
    specialty: "Kaltgepresst, sortenrein",
    since: "Seit 5 Generationen",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&fm=webp&q=80&w=600",
  },
  {
    name: "Familie Stavros",
    region: "Sitia, Kreta",
    country: "Griechenland",
    specialty: "Tsounati-Oliven, mild-fruchtig",
    since: "Seit 2 Generationen",
    image:
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&fm=webp&q=80&w=600",
  },
  {
    name: "Famiglia Rossi",
    region: "Puglia",
    country: "Italien",
    specialty: "Coratina, intensiv-herbe Note",
    since: "Seit 6 Generationen",
    image:
      "https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&fm=webp&q=80&w=600",
  },
  {
    name: "Famiglia Bianchi",
    region: "Toskana",
    country: "Italien",
    specialty: "Frantoio-Blend, ausgewogen",
    since: "Seit 3 Generationen",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&fm=webp&q=80&w=600",
  },
];

export default function StoryPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grow pt-20"
    >
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
                  gearbeitet. Olivenöl war nicht einfach ein Lebensmittel – es
                  war Teil der Familie, Teil der Identität.
                </p>
                <p>
                  In Deutschland angekommen, machte er beim Einkaufen im
                  Supermarkt eine ernüchternde Erfahrung:
                  <strong className="text-charcoal">
                    {" "}
                    Das, was dort als „Olivenöl" verkauft wird, hat nichts mit
                    dem zu tun, was er von zu Hause kennt.
                  </strong>
                  Kein echtes kaltgepresstes Öl, keine erste Pressung, keine
                  Qualität, der man vertrauen kann.
                </p>
                <p>
                  Gleichzeitig entdeckte er auf Reisen – besonders in
                  Duty-Free-Zonen – wie viele Menschen nach echtem, hochwertigem
                  Olivenöl suchen. Und er sah ein zweites Problem:
                </p>

                <div className="my-8 p-8 bg-olive-50 rounded-3xl border border-olive-100">
                  <h4 className="font-serif text-xl text-charcoal mb-4 italic">
                    "Die Bauern haben keinen Zugang zum EU-Markt."
                  </h4>
                  <p className="text-sm text-olive-600">
                    Viele Familienbetriebe im Mittelmeerraum produzieren
                    herausragendes Olivenöl – aber sie haben weder die Kapazität
                    noch die Kontakte, um es selbst nach Nordeuropa zu
                    exportieren. Online-Plattformen gibt es zwar, aber die
                    Versandkosten von 10-15€ pro Bestellung machen den
                    Direktversand für den Kunden unattraktiv.
                  </p>
                </div>

                <p>
                  <strong className="text-charcoal">Beshers Lösung:</strong>{" "}
                  Olivenöl in großen Mengen (4.000 Liter) direkt von den Bauern
                  importieren, in einem eigenen Lager in{" "}
                  <strong className="text-charcoal">Frankfurt am Main</strong>{" "}
                  lagern und von dort aus in ganz Deutschland versenden. Das
                  Ergebnis: schnellere Lieferzeiten, günstigere Versandkosten
                  und faire Preise für Bauern <em>und</em> Kunden.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&fm=webp&q=80&w=1000"
                alt="Olivenernte"
                loading="lazy"
                className="organic-shape shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-earth-green text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="font-bold text-lg">6 Partnerbauern</p>
                <p className="text-sm text-white/80">
                  4 auf Kreta · 2 in Italien
                </p>
              </div>
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
              Wir arbeiten ausschließlich mit Familienbetrieben. Keine
              Großkonzerne, keine anonymen Lieferketten. Wir kennen jeden Bauern
              persönlich.
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
                className="group bg-olive-50 rounded-3xl overflow-hidden border border-olive-100 cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif mb-1">{farmer.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-olive-500 mb-4">
                    <MapPin size={14} />
                    <span>
                      {farmer.region}, {farmer.country}
                    </span>
                  </div>
                  <p className="text-sm text-olive-700 mb-2">
                    <strong>Spezialität:</strong> {farmer.specialty}
                  </p>
                  <p className="text-xs text-olive-500">{farmer.since}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-olive-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Probiere den Unterschied
          </h2>
          <p className="text-charcoal/80 text-lg mb-10">
            Bestelle jetzt eine kostenlose Testprobe und schmecke, was echtes
            Olivenöl ausmacht.
          </p>
          <Link
            to="/#shop"
            className="inline-flex items-center gap-2 bg-earth-green hover:bg-earth-green/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
          >
            Kostenlose Probe anfordern <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
