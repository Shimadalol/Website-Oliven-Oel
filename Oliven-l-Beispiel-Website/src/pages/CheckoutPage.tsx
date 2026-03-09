import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Helmet } from 'react-helmet-async';

const checkoutSchema = z.object({
  email: z.string().email('Bitte eine gültige E-Mail Adresse eingeben'),
  firstName: z.string().min(2, 'Vorname muss mindestens 2 Zeichen lang sein'),
  lastName: z.string().min(2, 'Nachname muss mindestens 2 Zeichen lang sein'),
  address: z.string().min(5, 'Bitte eine vollständige Adresse eingeben'),
  zip: z.string().min(5, 'Ungültige PLZ'),
  city: z.string().min(2, 'Bitte eine Stadt eingeben'),
  payment: z.enum(['creditcard', 'paypal', 'klarna']),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    mode: 'onTouched', // Validates on blur
    defaultValues: { payment: 'creditcard' },
  });

  const shippingCost = totalPrice >= 50 ? 0 : 4.90;
  const finalTotal = totalPrice + shippingCost;

  const onSubmit = async (data: CheckoutFormData) => {
    console.log('Valid checkout data submitted:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    clearCart();
  };

  if (items.length === 0 && !isSuccess) {
    return (
      <main className="grow pt-32 pb-24 bg-olive-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-charcoal mb-4">Dein Warenkorb ist leer</h1>
          <p className="text-olive-600 mb-8">Füge Produkte hinzu, um zur Kasse zu gehen.</p>
          <button 
            onClick={() => navigate('/#shop')}
            className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            Zurück zum Shop
          </button>
        </div>
      </main>
    );
  }

  if (isSuccess) {
    return (
      <main className="grow pt-32 pb-24 bg-olive-50 min-h-[80vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[40px] shadow-2xl max-w-lg w-full mx-4 text-center border border-olive-100"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="text-green-600" size={48} />
          </motion.div>
          <h1 className="text-4xl font-serif text-charcoal mb-4">Vielen Dank!</h1>
          <p className="text-olive-600 text-lg mb-8">
            Deine Bestellung wurde erfolgreich aufgegeben.<br/>
            Wir bereiten dein Premium-Olivenöl für den Versand vor.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-lg w-full"
          >
            Zurück zur Startseite
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="grow pt-24 pb-24 bg-olive-50">
      <Helmet>
        <title>Sichere Kasse | Olea Terra</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-olive-600 hover:text-charcoal transition-colors duration-200 mb-8 font-medium cursor-pointer"
        >
          <ArrowLeft size={20} /> Zurück
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="text-4xl font-serif text-charcoal mb-8">Kasse</h1>
            
            <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Kontaktinformationen */}
              <div className="bg-white p-5 sm:p-8 rounded-3xl shadow-sm border border-olive-100">
                <h2 className="text-xl font-serif font-bold text-charcoal mb-6">Kontaktinformationen</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-olive-700 mb-1">E-Mail Adresse *</label>
                    <input 
                      {...register('email')}
                      type="email" 
                      id="email" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} focus:outline-none focus:ring-1 transition-shadow`} 
                      placeholder="max@beispiel.de" 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
              </div>

              {/* Lieferadresse */}
              <div className="bg-white p-5 sm:p-8 rounded-3xl shadow-sm border border-olive-100">
                <h2 className="text-xl font-serif font-bold text-charcoal mb-6">Lieferadresse</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-olive-700 mb-1">Vorname *</label>
                    <input 
                      {...register('firstName')}
                      type="text" 
                      id="firstName" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-olive-700 mb-1">Nachname *</label>
                    <input 
                      {...register('lastName')}
                      type="text" 
                      id="lastName" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-olive-700 mb-1">Straße & Hausnummer *</label>
                    <input 
                      {...register('address')}
                      type="text" 
                      id="address" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-olive-700 mb-1">Postleitzahl *</label>
                    <input 
                      {...register('zip')}
                      type="text" 
                      id="zip" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.zip ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-olive-700 mb-1">Stadt *</label>
                    <input 
                      {...register('city')}
                      type="text" 
                      id="city" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-red-500 focus:ring-red-500' : 'border-olive-200 focus:ring-olive-300'} focus:outline-none focus:ring-1 transition-shadow`} 
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                  </div>
                </div>
              </div>

              {/* Zahlungsart */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-olive-100">
                <h2 className="text-xl font-serif font-bold text-charcoal mb-6">Zahlung</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-olive-200 rounded-xl cursor-pointer hover:bg-olive-50 transition-colors">
                    <input {...register('payment')} type="radio" value="creditcard" className="w-4 h-4 text-olive-600" />
                    <span className="font-medium text-charcoal">Kreditkarte</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-olive-200 rounded-xl cursor-pointer hover:bg-olive-50 transition-colors">
                    <input {...register('payment')} type="radio" value="paypal" className="w-4 h-4 text-olive-600" />
                    <span className="font-medium text-charcoal">PayPal</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-olive-200 rounded-xl cursor-pointer hover:bg-olive-50 transition-colors">
                    <input {...register('payment')} type="radio" value="klarna" className="w-4 h-4 text-olive-600" />
                    <span className="font-medium text-charcoal">Rechnung (Klarna)</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-olive-100 sticky top-28">
              <h2 className="text-xl font-serif font-bold text-charcoal mb-6">Bestellübersicht</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative">
                      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded-lg border border-olive-100" referrerPolicy="no-referrer" />
                      <span className="absolute -top-2 -right-2 bg-olive-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-charcoal leading-tight">{item.product.name}</h4>
                      <p className="text-xs text-olive-500 mt-1">{item.product.size}</p>
                    </div>
                    <div className="font-bold text-sm text-charcoal">
                      {item.product.price === 0 ? 'Gratis' : `${(item.product.price * item.quantity).toFixed(2)}€`}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-olive-100 pt-6 space-y-3 mb-6">
                <div className="flex justify-between text-olive-600">
                  <span>Zwischensumme</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-olive-600">
                  <span>Versand</span>
                  <span>{shippingCost === 0 ? 'Kostenlos' : `${shippingCost.toFixed(2)}€`}</span>
                </div>
                <div className="border-t border-olive-100 pt-3 flex justify-between items-end">
                  <div>
                    <span className="block text-lg font-bold text-charcoal">Gesamtsumme</span>
                    <span className="text-xs text-olive-500">inkl. MwSt.</span>
                  </div>
                  <span className="text-2xl font-bold text-charcoal">{finalTotal.toFixed(2)}€</span>
                </div>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                disabled={isSubmitting || !isValid}
                className="w-full bg-olive-600 hover:bg-olive-700 disabled:bg-olive-300 disabled:cursor-not-allowed text-white py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Wird bearbeitet...</span>
                ) : (
                  <>Jetzt kaufen <ShieldCheck size={20} /></>
                )}
              </button>

              <div className="mt-6 flex items-start gap-3 text-sm text-olive-600 bg-olive-50 p-4 rounded-xl">
                <Truck className="shrink-0 text-olive-600" size={20} />
                <p>Lieferung erfolgt in 1-3 Werktagen aus unserem Lager in Frankfurt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
