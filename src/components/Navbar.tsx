import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Expériences", href: "#experiences" },
  { label: "Formation", href: "#formation" },
  { label: "Compétences", href: "#competences" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <div
        className={`relative rounded-full px-5 py-3 flex items-center justify-between transition-all duration-700 liquid-glass-strong liquid-shimmer ${
          scrolled ? "shadow-[0_12px_48px_-12px_rgba(0,0,0,0.7)]" : ""
        }`}
        style={scrolled ? { background: "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.4) 100%)" } : undefined}
      >
        {/* Logo */}
        <a
          href="#accueil"
          className="font-manrope font-extrabold text-[17px] tracking-tight text-white flex items-center gap-2.5 relative z-10"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="EP Logo"
            className="shrink-0 rounded-full"
            style={{ width: "38px", height: "38px", objectFit: "cover" }}
          />
          <span className="hidden sm:inline">Elouan</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 z-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200 font-inter-tight"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2 relative z-10">
          <a
            href="#contact"
            className="px-5 py-1.5 text-[13px] font-semibold text-dark bg-white rounded-full hover:bg-white/90 transition-colors duration-200 font-cabin shadow-lg shadow-white/10"
          >
            Me contacter
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/70 hover:text-white transition-colors p-1 bg-transparent border-none relative z-10"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 rounded-2xl liquid-glass p-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-[14px] font-medium text-white/70 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 font-inter-tight relative z-10"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/[0.08] mt-2 pt-3 relative z-10">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-[14px] font-semibold text-center text-dark bg-white rounded-xl hover:bg-white/90 transition-all font-cabin"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
