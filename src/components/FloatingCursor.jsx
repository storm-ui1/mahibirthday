import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function FloatingCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 120, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX - 90);
      y.set(event.clientY - 90);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[70] hidden h-44 w-44 rounded-full bg-rose/[0.14] blur-3xl md:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
