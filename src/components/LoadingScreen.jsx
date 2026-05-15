import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-midnight"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
        >
          <motion.div
            className="grid place-items-center gap-4 text-rose"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="fill-rose/30" size={42} />
            <p className="font-hand text-2xl text-cream/80">loading a little love...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
