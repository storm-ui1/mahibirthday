import { motion } from "framer-motion";
import { Music2, Pause, Play, Volume2 } from "lucide-react";
import { FaMusic } from "react-icons/fa6";
import MotionSection from "../components/MotionSection.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { albumArt, playlist } from "../data/siteData.js";

export default function PlaylistSection() {
  return (
    <MotionSection id="playlist" className="grid place-items-center overflow-hidden">
      <SectionIntro title="songs that remind me of you ♡" eyebrow="playlist">
        a playlist for your beautiful soul.
      </SectionIntro>
      <FaMusic className="absolute left-[8%] top-40 text-4xl text-rose/[0.45]" />
      <Music2 className="absolute bottom-28 right-[9%] text-lavender/40" size={58} strokeWidth={1.1} />
      <motion.div
        className="glass-card relative w-full max-w-3xl overflow-hidden rounded-[2rem] p-5 sm:p-7"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose/[0.14] via-transparent to-lavender/[0.12]" />
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row">
          <motion.img
            src={albumArt}
            alt="Heart album art"
            className="aspect-square w-full rounded-3xl object-cover shadow-glow sm:w-44"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-rose/75">for you</p>
                <h3 className="mt-2 font-hand text-5xl text-cream">soft hour</h3>
              </div>
              <motion.button
                aria-label="Play playlist"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rose text-midnight shadow-glow"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
              >
                <Play size={18} className="ml-1 fill-midnight" />
              </motion.button>
            </div>
            <div className="mt-5 flex items-center gap-3 text-cream/[0.55]">
              <Pause size={15} />
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.12]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-rose to-lavender"
                  initial={{ width: "18%" }}
                  animate={{ width: ["18%", "67%", "38%", "83%"] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <Volume2 size={15} />
            </div>
            <div className="mt-6 space-y-1">
              {playlist.map((track, index) => (
                <motion.div
                  key={track.title}
                  className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition hover:bg-white/[0.08]"
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <span className="text-cream/[0.38]">{index + 1}</span>
                  <span>
                    <span className="block text-cream">{track.title}</span>
                    <span className="text-xs text-cream/[0.42]">{track.artist}</span>
                  </span>
                  <span className="text-cream/[0.48]">{track.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </MotionSection>
  );
}
