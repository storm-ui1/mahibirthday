import { motion } from "framer-motion";
import { Flower2, Heart, Sparkles } from "lucide-react";
import MotionSection from "../components/MotionSection.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { loveNotes } from "../data/siteData.js";

export default function LoveNotesSection() {
  return (
    <MotionSection id="love" className="grid place-items-center">
      <div className="paper-grain relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-paper px-5 py-16 text-ink shadow-paper sm:px-10 lg:px-14">
        <Flower2 className="absolute bottom-8 left-6 text-ink/30 sm:left-10" size={92} strokeWidth={1.2} />
        <Sparkles className="absolute right-10 top-10 text-rose/50" size={52} strokeWidth={1.2} />
        <SectionIntro title="things i love about you ♡" dark>
          not in order. not enough. but real.
        </SectionIntro>
        <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {loveNotes.map((note, index) => {
            const rotate = [-3, 2, -1, 3, 2, -2, 1, -3][index];
            return (
              <motion.div
                key={note}
                className="tape relative min-h-40 rounded-sm bg-[#f6dfc8] p-6 text-center shadow-[0_18px_28px_rgba(71,45,35,.18)]"
                initial={{ opacity: 0, y: 28, rotate: rotate - 4 }}
                whileInView={{ opacity: 1, y: 0, rotate }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
              >
                <p className="grid h-full place-items-center font-note text-2xl leading-8">{note}</p>
                {index % 2 === 0 && <Heart className="absolute bottom-3 right-4 text-rose/50" size={16} />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
