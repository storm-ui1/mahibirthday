import { motion } from "framer-motion";
import { Sparkle, Star } from "lucide-react";
import MotionSection from "../components/MotionSection.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { memories } from "../data/siteData.js";

export default function MemoryTimelineSection() {
  return (
    <MotionSection id="memories" className="overflow-hidden">
      <SectionIntro title="little moments, big memories ♡" eyebrow="memory timeline">
        some moments i never want to forget.
      </SectionIntro>
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-6 top-10 hidden h-[2px] w-[calc(100%-3rem)] bg-[linear-gradient(90deg,transparent,#ffd1b7_12%,#f7a8b8_50%,#cbb6ff_88%,transparent)] md:block" />
        <div className="grid gap-8 md:grid-cols-4">
          {memories.map((memory, index) => (
            <motion.article
              key={memory.caption}
              className="relative"
              initial={{ opacity: 0, y: 40, rotate: memory.rotate - 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }}
              viewport={{ once: true, margin: "-110px" }}
              transition={{ duration: 0.7, delay: index * 0.09, ease: "easeOut" }}
            >
              <div className="mb-5 hidden justify-center text-peach md:flex">
                <Star className="fill-peach/70 drop-shadow-[0_0_18px_rgba(255,209,183,.6)]" size={28} />
              </div>
              <motion.div
                className="polaroid tape relative mx-auto max-w-[17rem] rounded-md"
                whileHover={{ scale: 1.06, rotate: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <img src={memory.image} alt={memory.caption} className="aspect-[4/5] w-full rounded-sm object-cover" />
                <p className="mt-4 font-note text-xl leading-5">{memory.caption}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-ink/50">{memory.date}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="mx-auto mt-16 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-5 py-3 text-sm text-cream/[0.68] backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkle size={15} className="text-rose" />
          scroll to explore
        </motion.div>
      </div>
    </MotionSection>
  );
}
