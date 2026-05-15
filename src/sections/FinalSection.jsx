import { motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";
import MotionSection from "../components/MotionSection.jsx";

const balloons = Array.from({ length: 7 }, (_, index) => ({
  id: index,
  left: `${8 + index * 14}%`,
  delay: index * 0.4,
  color: index % 2 ? "bg-rose/40" : "bg-lavender/[0.35]",
}));

const confetti = Array.from({ length: 46 }, (_, index) => ({
  id: index,
  left: `${(index * 23) % 100}%`,
  delay: (index % 12) * 0.24,
}));

export default function FinalSection() {
  return (
    <MotionSection id="final" className="grid place-items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(247,168,184,.24),transparent_24rem),linear-gradient(180deg,transparent,rgba(0,0,0,.28))]" />
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className={`absolute bottom-[-8rem] h-28 w-20 rounded-[50%_50%_45%_45%] ${balloon.color} shadow-glow`}
          style={{ left: balloon.left }}
          animate={{ y: ["0vh", "-118vh"], x: [0, 22, -14, 8] }}
          transition={{ duration: 12, repeat: Infinity, delay: balloon.delay, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-full h-24 w-px -translate-x-1/2 bg-white/20" />
        </motion.div>
      ))}
      {confetti.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute top-[-1rem] h-3 w-1.5 rounded-sm bg-rose/[0.65]"
          style={{ left: piece.left }}
          animate={{ y: ["0vh", "105vh"], rotate: [0, 180, 360], opacity: [0, 1, 0.4] }}
          transition={{ duration: 6 + (piece.id % 5), repeat: Infinity, delay: piece.delay, ease: "linear" }}
        />
      ))}
      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8 }}
      >
        <Gift className="mx-auto mb-6 text-rose drop-shadow-[0_0_24px_rgba(247,168,184,.55)]" size={54} />
        <h2 className="font-hand text-6xl font-bold leading-tight text-cream drop-shadow-[0_0_26px_rgba(247,168,184,.36)] sm:text-8xl">
          Happy Birthday, Beautiful ♡
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-cream/[0.72] sm:text-lg">
          you mean more than words can say.
        </p>
        <motion.a
          href="#hero"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-rose/[0.35] bg-white/[0.08] px-7 py-4 text-sm font-medium text-cream shadow-glow backdrop-blur-xl transition hover:bg-rose/15"
          whileHover={{ y: -5, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          this is just the beginning
          <Heart className="text-rose" size={17} />
        </motion.a>
      </motion.div>
    </MotionSection>
  );
}
