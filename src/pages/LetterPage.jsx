import { motion } from "framer-motion";
import { Flower2, Heart, Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import useTypewriter from "../hooks/useTypewriter.js";
import { letterText } from "../data/siteData.js";

export default function LetterPage() {
  const displayed = useTypewriter(letterText, 22);

  return (
    <motion.main
      className="relative z-10 min-h-screen overflow-hidden px-5 py-28 sm:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,168,184,.18),transparent_28rem),radial-gradient(circle_at_80%_10%,rgba(255,209,183,.14),transparent_30rem)]" />
      <motion.div
        className="pointer-events-none absolute left-6 top-28 text-cream/[0.28] sm:left-16"
        animate={{ y: [0, -18, 0], rotate: [-6, 2, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Flower2 size={94} strokeWidth={1} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-20 right-7 text-rose/30 sm:right-20"
        animate={{ y: [0, 18, 0], rotate: [7, -2, 7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={104} strokeWidth={1} />
      </motion.div>
      <section className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-5xl place-items-center">
        <motion.article
          className="paper-grain relative w-full max-w-2xl rounded-[2rem] bg-paper px-6 py-10 text-ink shadow-paper sm:px-12 sm:py-14"
          initial={{ opacity: 0, y: 30, rotate: -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: -0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ rotate: 0, y: -4 }}
        >
          <div className="absolute left-1/2 top-[-18px] h-10 w-32 -translate-x-1/2 rotate-1 bg-rose/[0.35] shadow-lg" />
          <pre className="typewriter-caret min-h-[33rem] whitespace-pre-wrap font-note text-[1.55rem] leading-[1.62] sm:text-3xl">
            {displayed}
          </pre>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/30 px-5 py-3 text-sm font-medium text-ink transition hover:bg-white/50"
            >
              <Home size={16} />
              back home
            </Link>
            <motion.div
              className="flex items-center gap-2 font-hand text-3xl text-rose"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.3, repeat: Infinity }}
            >
              <Heart className="fill-rose/30" size={22} />
              for you
            </motion.div>
          </div>
        </motion.article>
      </section>
    </motion.main>
  );
}
