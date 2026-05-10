import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ToastProvider } from "./components/Toast";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import ContactPage from "./pages/ContactPage";
import Logo from "./components/Logo";
import ScrollToTop from "./components/ScrollToTop";

// Lazy Load pages for performance
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
import AboutPage from "./pages/AboutPage";

/* ── Loading Screen ───────────────────────────────── */
function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#030712" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <Logo />
        <div className="mt-6 h-[1px] w-20 overflow-hidden bg-white/[0.06]">
          <motion.div
            className="h-full bg-white/40"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Page Loader ─────────────────────────────────── */
function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#030712]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-blue-500" />
    </div>
  );
}

/* ── Animated Routes Wrapper ──────────────────────── */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/itq-admin-portal" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatedRoutes />
          </motion.div>
        )}
      </BrowserRouter>
    </ToastProvider>
  );
}
