import { AnimatePresence, motion } from "framer-motion";
import { Heart, Mail, Menu, Music, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const links = [
  { label: "for you", section: "hero", icon: Heart },
  { label: "memories", section: "memories", icon: Sparkles },
  { label: "playlist", section: "playlist", icon: Music },
  { label: "letter", to: "/letter", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const close = () => setOpen(false);
  const goToSection = (section) => {
    close();
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 80);
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-[75] px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-midnight/[0.58] px-4 py-3 shadow-glow backdrop-blur-2xl">
        <Link to="/" onClick={close} className="flex items-center gap-2 font-hand text-2xl text-cream">
          <Heart size={18} className="fill-rose/[0.35] text-rose" />
          birthday
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {links.map(({ label, section, to, icon: Icon }) =>
            to ? (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    isActive ? "bg-rose/[0.18] text-rose" : "text-cream/[0.68] hover:bg-white/[0.08] hover:text-cream"
                  }`
                }
              >
                <Icon size={15} />
                {label}
              </NavLink>
            ) : (
              <button
                key={label}
                type="button"
                onClick={() => goToSection(section)}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-cream/[0.68] transition hover:bg-white/[0.08] hover:text-cream"
              >
                <Icon size={15} />
                {label}
              </button>
            ),
          )}
        </div>
        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-cream md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 grid max-w-5xl gap-2 rounded-3xl border border-white/10 bg-midnight/90 p-3 shadow-glow backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {links.map(({ label, section, to, icon: Icon }) =>
              to ? (
                <NavLink
                  key={label}
                  to={to}
                  onClick={close}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${
                    location.pathname === to ? "bg-rose/[0.18] text-rose" : "text-cream/[0.74]"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </NavLink>
              ) : (
                <button
                  key={label}
                  type="button"
                  onClick={() => goToSection(section)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-cream/[0.74]"
                >
                  <Icon size={16} />
                  {label}
                </button>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
