import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

const icons = [Star, Heart, Sparkles];
const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  x: `${(index * 37) % 100}%`,
  y: `${(index * 53) % 100}%`,
  size: 10 + (index % 4) * 4,
  delay: (index % 7) * 0.4,
  Icon: icons[index % icons.length],
}));

export default function AmbientParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map(({ id, x, y, size, delay, Icon }) => (
        <motion.div
          key={id}
          className="absolute text-rose/25"
          style={{ left: x, top: y }}
          animate={{ y: [0, -22, 0], opacity: [0.22, 0.65, 0.22], rotate: [0, 8, -4, 0] }}
          transition={{ duration: 5 + (id % 6), repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={size} strokeWidth={1.35} />
        </motion.div>
      ))}
    </div>
  );
}
