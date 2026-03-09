import { motion } from "motion/react";
import {
  ShieldCheck,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  FileText,
  Microscope,
  Leaf,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useCart } from "../context/CartContext";

const LAB_VALUES = [
  {
    name: "Säuregehalt (Oleic)",
    value: "≤ 0.3%",
    benchmark: "EU Grenzwert: 0.8%",
    status: "excellent",
  },
  {
    name: "Peroxidzahl",
    value: "≤ 8 meq/kg",
    benchmark: "EU Grenzwert: 20 meq/kg",
    status: "excellent",
  },
  {
    name: "Polyphenolgehalt",
    value: "350+ mg/kg",
    benchmark: "Durchschnitt: 150-200 mg/kg",
    status: "excellent",
  },
  {
    name: "Pestizid-Rückstände",
    value: "Nicht nachweisbar",
    benchmark: "EU zertifiziert",
    status: "excellent",
  },
  {
    name: "Vitamin E (Tocopherol)",
    value: "18-22 mg/100ml",
    benchmark: "Natürliches Antioxidans",
    status: "good",
  },
  {
    name: "K232 / K270 (UV-Absorption)",
    value: "Innerhalb EU Extra Vergine",
    benchmark: "Reinheitsindikator",
    status: "excellent",
  },
];

export default function QualityPage() {
  const { addItem, openCart } = useCart();

  const handleOrderSample = () => {
    // Add the probierpaket (id: 1) to cart - price will need to be 0 or handled differently, assuming the product exists with price 0
    addItem({
      id: "free_sample",
      name: "Olea Terra - Gratis Probe (50ml)",
      price: 0,
      size: "50ml",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&fm=webp&q=80&w=400",
      description: "Unsere kostenlose Testprobe.",
    });
    openCart();
  };

  return (
    <main className="grow pt-20">
      <Helmet>
        <title>Labor & Qualität | Olea Terra</title>
        <meta
          name="description"
          content="Null Kompromisse: Jede Charge unseres Olivenöls durchläuft eine strenge 2-Stufen-Laborprüfung nach EU-Normen."
        />
      </Helmet>
      {/* Hero */}
      <section className="py-24 bg-olive-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-4 block">
              Qualität & Transparenz
            </span>
            <h1 className="text-5xl md:text-6xl mb-8 leading-[1.1]">
              Doppelt geprüft.
              <br />
              <span className="italic text-olive-600">Null Kompromisse.</span>
            </h1>
            <p className="text-xl text-olive-700 leading-relaxed max-w-2xl mx-auto">
              Unser größter Anspruch ist gleichzeitig unser größter USP: Jede
              einzelne Charge wird
              <strong> zweimal im Labor getestet</strong> – einmal im
              Ursprungsland und einmal bei Ankunft in Deutschland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2-Step Lab Process - Enhanced Before & After */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Die 2-Phasen Analyse</h2>
            <p className="text-olive-700 max-w-2xl mx-auto text-lg">
              Maximale Transparenz durch lückenlose Kontrolle. Wir dokumentieren
              den Zustand unseres Öls direkt am Ursprung und erneut bei Ankunft
              in Deutschland.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-olive-200 z-0">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-olive-400 rounded-full" />
            </div>

            {/* Step 1: Vorher (Ursprung) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 bg-olive-50 rounded-[40px] border border-olive-100 shadow-sm"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-olive-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif">Vorher</h3>
                    <p className="text-sm text-olive-500 uppercase tracking-wider font-bold">
                      Labor im Ursprungsland
                    </p>
                  </div>
                </div>
                <FlaskConical className="text-olive-600/20" size={64} />
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/50 rounded-2xl border border-white">
                  <p className="text-sm text-olive-500 mb-4 font-medium italic">
                    "Frisch gepresst & rein"
                  </p>
                  <ul className="space-y-4">
                    {[
                      { label: "Säuregehalt", value: "0.18%", ref: "< 0.8%" },
                      {
                        label: "Peroxidzahl",
                        value: "3.2 meq/kg",
                        ref: "< 20",
                      },
                      {
                        label: "Polyphenole",
                        value: "412 mg/kg",
                        ref: "> 250",
                      },
                    ].map((m, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center border-b border-olive-100 pb-2"
                      >
                        <span className="text-olive-700">{m.label}</span>
                        <div className="text-right">
                          <span className="font-mono font-bold text-olive-900 block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-olive-400">
                            Ref: {m.ref}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-3 p-4 bg-olive-100/50 rounded-2xl">
                  <CheckCircle2
                    size={20}
                    className="text-olive-600 shrink-0 mt-1"
                  />
                  <p className="text-sm text-olive-600 leading-relaxed">
                    <strong>Status:</strong> Chargen-Freigabe erteilt. Das Öl
                    entspricht höchsten Qualitätskriterien für den Export.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Nachher (Deutschland) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 bg-white rounded-[40px] border border-olive-200 shadow-xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terracotta rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif">Nachher</h3>
                    <p className="text-sm text-terracotta uppercase tracking-wider font-bold">
                      Akkreditiertes Labor (DE)
                    </p>
                  </div>
                </div>
                <Microscope className="text-terracotta/20" size={64} />
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-olive-50 rounded-2xl border border-olive-100">
                  <p className="text-sm text-olive-500 mb-4 font-medium italic">
                    "Ankunftskontrolle & Reinheit"
                  </p>
                  <ul className="space-y-4">
                    {[
                      {
                        label: "Säuregehalt",
                        value: "0.19%",
                        ref: "Delta: +0.01",
                      },
                      {
                        label: "Pestizide",
                        value: "n/d",
                        ref: "Nicht nachweisbar",
                      },
                      {
                        label: "Sensorik",
                        value: "Fehlerfrei",
                        ref: "Panel-Test DE",
                      },
                    ].map((m, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center border-b border-olive-100 pb-2"
                      >
                        <span className="text-olive-700">{m.label}</span>
                        <div className="text-right">
                          <span className="font-mono font-bold text-charcoal block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-terracotta">
                            Info: {m.ref}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-2xl border border-green-100">
                  <ShieldCheck
                    size={20}
                    className="text-green-600 shrink-0 mt-1"
                  />
                  <p className="text-sm text-green-700 leading-relaxed">
                    <strong>Verifiziert:</strong> Die Werte bestätigen die
                    Frische nach dem Transport. Volle Verkehrsfähigkeit in DE
                    bestätigt.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lab Values Table - Comparison Table */}
      <section className="py-24 bg-olive-950 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Analyse-Vergleich</h2>
            <p className="text-olive-300 max-w-xl mx-auto">
              Sehen Sie hier die Entwicklung der wichtigsten Parameter im
              direkten Vergleich. Wir garantieren Stabilität über die gesamte
              Lieferkette.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-olive-400 font-medium uppercase text-xs tracking-widest">
                    Parameter
                  </th>
                  <th className="py-4 px-6 text-olive-400 font-medium uppercase text-xs tracking-widest text-center">
                    Ursprung
                  </th>
                  <th className="py-4 px-6 text-olive-400 font-medium uppercase text-xs tracking-widest text-center">
                    Ankunft DE
                  </th>
                  <th className="py-4 px-6 text-olive-400 font-medium uppercase text-xs tracking-widest text-right">
                    EU Grenzwert
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Säuregehalt (Oleic)",
                    origin: "0.18%",
                    de: "0.19%",
                    limit: "0.8%",
                  },
                  {
                    name: "Peroxidzahl",
                    origin: "3.2",
                    de: "3.5",
                    limit: "20",
                  },
                  { name: "K232", origin: "1.45", de: "1.48", limit: "2.50" },
                  { name: "K270", origin: "0.11", de: "0.12", limit: "0.22" },
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-6 px-6 font-bold">{row.name}</td>
                    <td className="py-6 px-6 text-center font-mono text-olive-300">
                      {row.origin}
                    </td>
                    <td className="py-6 px-6 text-center font-mono text-terracotta">
                      {row.de}
                    </td>
                    <td className="py-6 px-6 text-right text-sm text-olive-500">
                      {row.limit}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 cursor-pointer">
                <FileText size={20} />
                Analysat (Ursprung) .pdf
              </button>
              <button className="inline-flex items-center justify-center gap-3 bg-terracotta shadow-lg hover:shadow-terracotta/20 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 cursor-pointer">
                <FileText size={20} />
                Vollanalyse (DE) .pdf
              </button>
            </div>
            <p className="mt-6 text-xs text-olive-400 italic">
              * Originalberichte werden auf Anfrage für B2B-Kunden vollständig
              offengelegt.
            </p>
          </div>
        </div>
      </section>

      {/* Process: How we ensure quality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl mb-16 text-center">
            Vom Hain in deine Küche
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Ernte & Pressung",
                desc: "Innerhalb von 4h nach der Ernte kaltgepresst. Unter 27°C. Erste Pressung.",
              },
              {
                icon: FlaskConical,
                title: "1. Labortest",
                desc: "Im Ursprungsland: Säure, Reinheit, Pestizide. Nur zugelassene Chargen werden verschifft.",
              },
              {
                icon: Truck,
                title: "Transport & Lagerung",
                desc: "4.000 Liter pro Lieferung nach Frankfurt. Stickstoff-geschützte Lagerung für maximale Frische.",
              },
              {
                icon: Microscope,
                title: "2. Labortest",
                desc: "In Deutschland: Vollanalyse wiederholt. Vergleich mit Ursprungswerten. Erst dann Freigabe.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-olive-50 rounded-3xl border border-olive-100"
              >
                <div className="w-16 h-16 bg-olive-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-olive-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-olive-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ShieldCheck className="text-olive-600 mx-auto mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl mb-6">Überzeugt?</h2>
          <p className="text-olive-700 text-lg mb-10">
            Bestelle eine kostenlose Testprobe und schmecke den Unterschied, den
            doppelte Qualitätskontrolle macht.
          </p>
          <button
            onClick={handleOrderSample}
            className="inline-flex items-center gap-2 bg-olive-600 hover:bg-olive-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
          >
            Gratis Probe bestellen <ArrowRight size={22} />
          </button>
        </div>
      </section>
    </main>
  );
}
