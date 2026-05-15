import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Heart, Moon, Sparkles, Star } from "lucide-react";
import { useRef, useState } from "react";
import MotionSection from "../components/MotionSection.jsx";

const stars = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 31) % 100}%`,
  top: `${(index * 47) % 78}%`,
  delay: (index % 8) * 0.22,
  size: 2 + (index % 4),
}));

export default function HeroSection() {
  const ref = useRef(null);
  const [pulsed, setPulsed] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yCloud = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <MotionSection id="hero" className="grid place-items-center overflow-hidden">
      <div ref={ref} className="absolute inset-0 bg-dream-gradient" />
      <motion.div style={{ y: yCloud }} className="absolute inset-x-[-10%] bottom-[-12%] h-[48vh] opacity-70 blur-[1px]">
        <div className="absolute bottom-0 left-[2%] h-56 w-[42rem] rounded-[50%] bg-peach/[0.24] blur-3xl" />
        <div className="absolute bottom-6 right-[4%] h-64 w-[44rem] rounded-[50%] bg-rose/[0.24] blur-3xl" />
        <div className="absolute bottom-24 left-[36%] h-44 w-[34rem] rounded-[50%] bg-lavender/[0.18] blur-3xl" />
      </motion.div>
      {stars.map((star) => (
        <motion.button
          aria-label="glow star"
          key={star.id}
          className="absolute rounded-full bg-cream/70 shadow-[0_0_18px_rgba(255,247,237,.6)] transition hover:bg-rose hover:shadow-[0_0_28px_rgba(247,168,184,.95)]"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        className="absolute right-[10%] top-32 text-peach/80 drop-shadow-[0_0_24px_rgba(255,209,183,.45)]"
        animate={{ y: [0, -16, 0], rotate: [-8, 3, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Moon size={76} strokeWidth={1.1} />
      </motion.div>
      <motion.div style={{ y: yText }} className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-cream/70 backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles size={15} className="text-rose" />
          a little place on the internet
        </motion.div>
        <motion.h1
          className="font-hand text-6xl font-bold leading-none text-cream sm:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          hey, it's your day <span className="text-rose">♡</span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-8 text-cream/[0.72] sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          a small place on the internet, made just for you.
        </motion.p>
        <motion.a
          href="#memories"
          className="group mt-9 inline-flex items-center gap-3 rounded-full border border-rose/[0.35] bg-rose/[0.12] px-7 py-4 text-sm font-medium text-cream shadow-glow backdrop-blur-xl transition hover:border-rose/70 hover:bg-rose/20"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.7 }}
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          come in
          <motion.span animate={pulsed ? { scale: [1, 1.6, 1] } : {}} onAnimationComplete={() => setPulsed(false)}>
            <Heart
              size={17}
              className="text-rose group-hover:fill-rose/[0.35]"
              onClick={(event) => {
                event.preventDefault();
                setPulsed(true);
              }}
            />
          </motion.span>
        </motion.a>
      </motion.div>
      <motion.a
        href="#memories"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/[0.55]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to memories"
      >
        <ChevronDown />
      </motion.a>
    </MotionSection>
  );
}
