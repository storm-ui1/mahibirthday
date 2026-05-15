import { motion } from "framer-motion";

export default function MotionSection({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.section>
  );
}
