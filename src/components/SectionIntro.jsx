import { motion } from "framer-motion";

export default function SectionIntro({ eyebrow, title, children, dark = false }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {eyebrow && (
        <p className={`mb-3 text-xs uppercase tracking-[0.38em] ${dark ? "text-ink/60" : "text-rose/80"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-hand text-5xl font-bold sm:text-6xl ${dark ? "text-ink" : "text-cream"}`}>
        {title}
      </h2>
      {children && <p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? "text-ink/70" : "text-cream/[0.68]"}`}>{children}</p>}
    </motion.div>
  );
}
