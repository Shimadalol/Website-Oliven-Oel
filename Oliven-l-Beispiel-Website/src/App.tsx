import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { CookieBanner } from "./components/CookieBanner";
import { CartProvider } from "./context/CartContext";
import { lazy, Suspense, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ChevronUp } from "lucide-react";

const HomePage = lazy(() => import("./pages/HomePage"));
const StoryPage = lazy(() => import("./pages/StoryPage"));
const QualityPage = lazy(() => import("./pages/QualityPage"));
const B2BPage = lazy(() => import("./pages/B2BPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ImpressumPage = lazy(() => import("./pages/ImpressumPage"));
const DatenschutzPage = lazy(() => import("./pages/DatenschutzPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const SuccessPage = lazy(() => import("./pages/SuccessPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-btn"
          aria-label="Nach oben scrollen"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function AppLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <CartDrawer />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col grow"
        >
          <Suspense
            fallback={
              <div className="flex grow items-center justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-earth-green"></div>
              </div>
            }
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/b2b" element={<B2BPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
              <Route path="/agb" element={<TermsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/checkout/success" element={<SuccessPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <CookieBanner />
      <ScrollTopButton />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <CartProvider>
            <AppLayout />
          </CartProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
