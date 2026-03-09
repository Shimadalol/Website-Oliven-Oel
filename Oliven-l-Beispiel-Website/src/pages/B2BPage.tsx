import { motion } from 'motion/react';
import { Package, Users, ArrowRight, CheckCircle2, Mail, Phone, MapPin, Building2, Truck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const b2bSchema = z.object({
  name: z.string().min(2, 'Bitte Namen eingeben'),
  company: z.string().min(2, 'Bitte Firmennamen eingeben'),
  email: z.string().email('Bitte gültige E-Mail eingeben'),
  phone: z.string().min(5, 'Bitte Telefonnummer eingeben'),
});

type B2BFormData = z.infer<typeof b2bSchema>;


const B2B_BENEFITS = [
  'Staffelpreise ab 20 Liter Bestellvolumen',
  'Individuelle Lieferrhythmen (wöchentlich, monatlich)',
  'Lager in Frankfurt – Lieferung in 1-3 Werktagen',
  'Persönlicher Ansprechpartner',
  'Degustationsproben für Ihre Speisekarte',
  'Laborberichte für Ihre HACCP-Dokumentation'
];

export default function B2BPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<B2BFormData>({
    resolver: zodResolver(b2bSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: B2BFormData) => {
    console.log('Valid B2B lead:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
  };

  return (
    <main className="grow pt-20">
      <Helmet>
        <title>Gastronomie (B2B) | Olea Terra</title>
        <meta name="description" content="Premium Olivenöl für Profis. 10L Bag-in-Box Gebinde, direkte Lieferung ab Lager Frankfurt für die deutsche Gastronomie." />
      </Helmet>
      {/* Hero */}
      <section className="py-24 bg-olive-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-4 block">Für die Gastronomie</span>
            <h1 className="text-5xl md:text-6xl mb-8 leading-[1.1]">
              Premium Olivenöl<br />
              <span className="italic text-olive-300">für Profis</span>
            </h1>
            <p className="text-xl text-olive-300 leading-relaxed max-w-2xl mx-auto">
              Ihre Gäste fragen, welches Öl Sie verwenden? Dann ist es Zeit für Olea Terra.
              Verlässliche Qualität in Gastro-Gebinden, direkt ab Lager Frankfurt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why B2B */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8">Warum Gastronomen uns wählen</h2>
              <p className="text-olive-700 mb-8 leading-relaxed">
                90% der Online-Olivenöl-Anbieter lagern nicht in Deutschland. Ihre Bestellung kommt direkt aus 
                dem Mittelmeerraum – mit langen Lieferzeiten und hohen Versandkosten. 
                <strong className="text-charcoal"> Bei uns nicht.</strong>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="p-6 bg-olive-50 rounded-2xl border border-olive-100 text-center">
                  <Truck className="text-olive-600 mx-auto mb-3" size={32} />
                  <p className="font-bold text-lg">1-3 Tage</p>
                  <p className="text-xs text-olive-500">Lieferzeit ab Frankfurt</p>
                </div>
                <div className="p-6 bg-olive-50 rounded-2xl border border-olive-100 text-center">
                  <Package className="text-olive-600 mx-auto mb-3" size={32} />
                  <p className="font-bold text-lg">10L Bag-in-Box</p>
                  <p className="text-xs text-olive-500">Praktisch für die Küche</p>
                </div>
                <div className="p-6 bg-olive-50 rounded-2xl border border-olive-100 text-center">
                  <Building2 className="text-olive-600 mx-auto mb-3" size={32} />
                  <p className="font-bold text-lg">4.000 Liter</p>
                  <p className="text-xs text-olive-500">Immer auf Lager</p>
                </div>
              </div>

              <ul className="space-y-4">
                {B2B_BENEFITS.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-olive-600 shrink-0" size={20} />
                    <span className="text-olive-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&fm=webp&q=80&w=1000" 
                alt="Restaurant Küche" 
                loading="lazy"
                width={1000}
                height={667}
                className="rounded-[40px] shadow-2xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-olive-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl mb-16 text-center">Gastro-Konditionen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-10 bg-white rounded-3xl border border-olive-100 shadow-sm">
              <h3 className="text-2xl mb-2">Starter</h3>
              <p className="text-sm text-olive-500 mb-6">Für kleine Restaurants & Cafés</p>
              <p className="text-4xl font-bold text-charcoal mb-1">20-50L</p>
              <p className="text-sm text-olive-500 mb-8">pro Bestellung</p>
              <ul className="space-y-3 mb-8 grow">
                {['Staffelpreis ab 20L', 'Freie Gebindewahl', 'Monatliche Lieferung'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-olive-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="block text-center bg-olive-100 hover:bg-olive-200 text-charcoal px-6 py-4 rounded-full font-bold transition-colors duration-200 cursor-pointer mt-auto">
                Angebot anfragen
              </a>
            </div>

            <div className="flex flex-col p-10 bg-olive-900 text-white rounded-3xl shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta text-white px-4 py-1 rounded-full text-xs font-bold">
                Beliebt
              </div>
              <h3 className="text-2xl mb-2">Professional</h3>
              <p className="text-sm text-olive-300 mb-6">Für mittlere Gastro-Betriebe</p>
              <p className="text-4xl font-bold mb-1">50-200L</p>
              <p className="text-sm text-olive-400 mb-8">pro Bestellung</p>
              <ul className="space-y-3 mb-8 grow">
                {['Bester Literpeis', 'Individuelle Lieferrhythmen', 'Persönlicher Ansprechpartner', 'Degustationsproben'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-olive-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="block text-center bg-terracotta hover:bg-terracotta/90 text-white px-6 py-4 rounded-full font-bold transition-colors duration-200 cursor-pointer mt-auto">
                Angebot anfragen
              </a>
            </div>

            <div className="flex flex-col p-10 bg-white rounded-3xl border border-olive-100 shadow-sm">
              <h3 className="text-2xl mb-2">Enterprise</h3>
              <p className="text-sm text-olive-500 mb-6">Für Großabnehmer & Ketten</p>
              <p className="text-4xl font-bold text-charcoal mb-1">200L+</p>
              <p className="text-sm text-olive-500 mb-8">pro Bestellung</p>
              <ul className="space-y-3 mb-8 grow">
                {['Individuelle Verhandlung', 'White-Label möglich', 'Langfristiger Rahmenvertrag', 'HACCP-Dokumentation'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-olive-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="block text-center bg-olive-100 hover:bg-olive-200 text-charcoal px-6 py-4 rounded-full font-bold transition-colors duration-200 cursor-pointer mt-auto">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl mb-4 text-center">Gastro-Anfrage</h2>
          <p className="text-olive-600 text-center mb-16 max-w-xl mx-auto">
            Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="lg:col-span-3 bg-green-50 rounded-3xl p-12 text-center flex flex-col items-center justify-center border border-green-100"
              >
                <CheckCircle2 className="text-green-600 mb-6" size={64} />
                <h3 className="text-2xl font-serif text-charcoal mb-4">Anfrage erfolgreich gesendet!</h3>
                <p className="text-olive-700 leading-relaxed">
                  Vielen Dank für Ihr Interesse an Olea Terra. <br />
                  Wir haben Ihre Daten erhalten und werden uns innerhalb der nächsten 24 Stunden mit einem maßgeschneiderten Angebot bei Ihnen melden.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2">Name *</label>
                    <input 
                      {...register('name')}
                      id="name" 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} bg-olive-50 focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold mb-2">Restaurant / Betrieb *</label>
                    <input 
                      {...register('company')}
                      id="company" 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} bg-olive-50 focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">E-Mail *</label>
                    <input 
                      {...register('email')}
                      id="email" 
                      type="email" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} bg-olive-50 focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">Telefon *</label>
                    <input 
                      {...register('phone')}
                      id="phone" 
                      type="tel" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} bg-olive-50 focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="volume" className="block text-sm font-bold mb-2">Geschätztes monatliches Volumen</label>
                  <select id="volume" className="w-full px-4 py-3 rounded-xl border border-olive-200 bg-olive-50 focus:outline-none focus:ring-1 focus:ring-olive-300 focus:border-olive-400 cursor-pointer transition-shadow">
                    <option>20-50 Liter</option>
                    <option>50-100 Liter</option>
                    <option>100-200 Liter</option>
                    <option>200+ Liter</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">Nachricht</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-olive-200 bg-olive-50 focus:outline-none focus:ring-1 focus:ring-olive-300 focus:border-olive-400 resize-none transition-shadow" />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting || !isValid}
                  className="w-full bg-olive-600 hover:bg-olive-700 disabled:bg-olive-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Wird gesendet...</span>
                  ) : (
                    <>Anfrage absenden <ArrowRight size={20} /></>
                  )}
                </button>
              </form>
            )}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 bg-olive-50 rounded-3xl border border-olive-100">
                <h4 className="font-bold mb-6">Direktkontakt</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={18} className="text-olive-600" />
                    <span>gastro@oleaterra.de</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={18} className="text-olive-600" />
                    <span>+49 (0) 69 123 456 78</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={18} className="text-olive-600" />
                    <span>Frankfurt am Main</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-olive-900 text-white rounded-3xl">
                <Users className="text-olive-400 mb-4" size={28} />
                <h4 className="font-bold mb-2">Kostenlose Proben</h4>
                <p className="text-sm text-olive-300 leading-relaxed">
                  Wir senden Ihnen gerne kostenlose Degustationsproben für Ihre Küche. 
                  Einfach im Formular erwähnen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
