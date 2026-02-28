import { motion } from 'motion/react';
import { ShieldCheck, FlaskConical, CheckCircle2, ArrowRight, FileText, Microscope, Leaf, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const LAB_VALUES = [
  { name: 'Säuregehalt (Oleic)', value: '≤ 0.3%', benchmark: 'EU Grenzwert: 0.8%', status: 'excellent' },
  { name: 'Peroxidzahl', value: '≤ 8 meq/kg', benchmark: 'EU Grenzwert: 20 meq/kg', status: 'excellent' },
  { name: 'Polyphenolgehalt', value: '350+ mg/kg', benchmark: 'Durchschnitt: 150-200 mg/kg', status: 'excellent' },
  { name: 'Pestizid-Rückstände', value: 'Nicht nachweisbar', benchmark: 'EU zertifiziert', status: 'excellent' },
  { name: 'Vitamin E (Tocopherol)', value: '18-22 mg/100ml', benchmark: 'Natürliches Antioxidans', status: 'good' },
  { name: 'K232 / K270 (UV-Absorption)', value: 'Innerhalb EU Extra Vergine', benchmark: 'Reinheitsindikator', status: 'excellent' },
];

export default function QualityPage() {
  return (
    <main className="grow pt-20">
      {/* Hero */}
      <section className="py-24 bg-olive-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-4 block">Qualität & Transparenz</span>
            <h1 className="text-5xl md:text-6xl mb-8 leading-[1.1]">
              Doppelt geprüft.<br />
              <span className="italic text-olive-600">Null Kompromisse.</span>
            </h1>
            <p className="text-xl text-olive-700 leading-relaxed max-w-2xl mx-auto">
              Unser größter Anspruch ist gleichzeitig unser größter USP: Jede einzelne Charge wird 
              <strong> zweimal im Labor getestet</strong> – einmal im Ursprungsland und einmal bei Ankunft in Deutschland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2-Step Lab Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl mb-16 text-center">Unsere 2-Stufen Laborprüfung</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="relative p-10 bg-olive-50 rounded-[32px] border border-olive-100"
            >
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-olive-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div className="mb-6 flex items-center gap-4">
                <FlaskConical className="text-olive-600" size={40} />
                <div>
                  <h3 className="text-2xl">Test im Ursprungsland</h3>
                  <p className="text-sm text-olive-500">Kreta (GR) · Puglia & Toskana (IT)</p>
                </div>
              </div>
              <p className="text-olive-700 mb-6 leading-relaxed">
                Direkt nach der Ernte und Pressung wird das Öl im lokalen Labor analysiert. 
                Wir prüfen Säuregehalt, Peroxidzahl und Reinheit, bevor das Öl überhaupt nach Deutschland verschifft wird.
              </p>
              <ul className="space-y-3">
                {['Säuregehalt & Reinheitsanalyse', 'Pestizid-Screening', 'Sensorische Verkostung (Panel-Test)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-olive-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="relative p-10 bg-olive-50 rounded-[32px] border border-olive-100"
            >
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-terracotta rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div className="mb-6 flex items-center gap-4">
                <Microscope className="text-terracotta" size={40} />
                <div>
                  <h3 className="text-2xl">Test bei Ankunft in DE</h3>
                  <p className="text-sm text-olive-500">Akkreditiertes Labor in Deutschland</p>
                </div>
              </div>
              <p className="text-olive-700 mb-6 leading-relaxed">
                Nach dem Transport wird die gesamte Lieferung erneut in einem deutschen Labor analysiert. 
                So stellen wir sicher, dass Qualität und Reinheit durch den Transport nicht beeinträchtigt wurden.
              </p>
              <ul className="space-y-3">
                {['Wiederholte Vollanalyse aller Werte', 'Vergleich mit Ursprungs-Werten', 'Freigabe nur bei 100% Übereinstimmung'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-terracotta shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 p-8 bg-olive-900 text-white rounded-3xl text-center">
            <p className="text-lg font-bold mb-2">Kosten pro Labortest: ca. 150€ pro Charge</p>
            <p className="text-olive-300 text-sm">Wir investieren in doppelte Tests, damit du sicher sein kannst: Was draufsteht, ist auch drin.</p>
          </div>
        </div>
      </section>

      {/* Lab Values Table */}
      <section className="py-24 bg-olive-950 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Aktuelle Laborwerte</h2>
            <p className="text-olive-300 max-w-xl mx-auto">
              Hier sind die durchschnittlichen Analysewerte unserer aktuellen Charge. 
              Alle Werte liegen deutlich unter den EU-Grenzwerten für "Extra Vergine".
            </p>
          </div>

          <div className="grid gap-4">
            {LAB_VALUES.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 gap-4"
              >
                <div>
                  <p className="font-bold text-lg">{val.name}</p>
                  <p className="text-xs text-olive-400">{val.benchmark}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold font-mono text-olive-300">{val.value}</span>
                  <CheckCircle2 size={20} className="text-green-400" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 cursor-pointer">
              <FileText size={20} />
              Laborberichte als PDF herunterladen
            </button>
          </div>
        </div>
      </section>

      {/* Process: How we ensure quality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl mb-16 text-center">Vom Hain in deine Küche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Ernte & Pressung', desc: 'Innerhalb von 4h nach der Ernte kaltgepresst. Unter 27°C. Erste Pressung.' },
              { icon: FlaskConical, title: '1. Labortest', desc: 'Im Ursprungsland: Säure, Reinheit, Pestizide. Nur zugelassene Chargen werden verschifft.' },
              { icon: Truck, title: 'Transport & Lagerung', desc: '4.000 Liter pro Lieferung nach Frankfurt. Stickstoff-geschützte Lagerung für maximale Frische.' },
              { icon: Microscope, title: '2. Labortest', desc: 'In Deutschland: Vollanalyse wiederholt. Vergleich mit Ursprungswerten. Erst dann Freigabe.' },
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
                <p className="text-sm text-olive-600 leading-relaxed">{step.desc}</p>
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
            Bestelle eine kostenlose Testprobe und schmecke den Unterschied, den doppelte Qualitätskontrolle macht.
          </p>
          <Link to="/#shop" className="inline-flex items-center gap-2 bg-olive-600 hover:bg-olive-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer">
            Gratis Probe bestellen <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </main>
  );
}
