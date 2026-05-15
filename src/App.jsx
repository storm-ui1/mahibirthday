import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import FloatingCursor from "./components/FloatingCursor.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Navbar from "./components/Navbar.jsx";
import AmbientParticles from "./components/AmbientParticles.jsx";
import HomePage from "./pages/HomePage.jsx";
import LetterPage from "./pages/LetterPage.jsx";

export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <div className="min-h-screen overflow-x-hidden bg-midnight font-clean text-cream selection:bg-rose/40">
      <LoadingScreen />
      <FloatingCursor />
      <AmbientParticles />
      <motion.div
        className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-rose via-peach to-lavender"
        style={{ scaleX }}
      />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/letter" element={<LetterPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
