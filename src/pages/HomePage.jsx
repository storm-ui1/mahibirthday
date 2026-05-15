import { motion } from "framer-motion";
import FinalSection from "../sections/FinalSection.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import LoveNotesSection from "../sections/LoveNotesSection.jsx";
import MemoryTimelineSection from "../sections/MemoryTimelineSection.jsx";
import PlaylistSection from "../sections/PlaylistSection.jsx";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.55 }}
      className="relative z-10"
    >
      <HeroSection />
      <MemoryTimelineSection />
      <LoveNotesSection />
      <PlaylistSection />
      <FinalSection />
    </motion.main>
  );
}
