import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "elouanporge@gmail.com",
    href: "mailto:elouanporge@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7l8.913 5.478a2 2 0 002.174 0L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "text-blue-400",
  },
  {
    label: "Téléphone",
    value: "(+33) 7 68 11 71 58",
    href: "tel:+33768117158",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
        <line x1="9" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "text-emerald-400",
  },
  {
    label: "LinkedIn",
    value: "Elouan Porge",
    href: "https://linkedin.com/in/elouan-porge",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-sky-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] md:text-[48px] font-bold text-white font-manrope leading-tight">
            Travaillons{" "}
            <span className="font-serif italic font-normal text-blue-400/90">
              ensemble
            </span>
          </h2>
          <p className="mt-5 text-[17px] text-gray-400 max-w-md mx-auto font-manrope leading-relaxed">
            Vous cherchez un alternant motivé et polyvalent ? N'hésitez pas à me
            contacter.
          </p>
        </motion.div>

        {/* Contact Cards - liquid glass */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target={contact.label === "LinkedIn" ? "_blank" : undefined}
              rel={
                contact.label === "LinkedIn"
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="liquid-glass liquid-glass-interactive rounded-2xl p-6 group text-center"
            >
              <div
                className={`${contact.color} mx-auto mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300 relative z-10`}
              >
                {contact.icon}
              </div>
              <p className="text-[12px] font-semibold text-white/30 uppercase tracking-wider font-inter-tight mb-2 relative z-10">
                {contact.label}
              </p>
              <p className="text-[14px] font-medium text-white/70 font-inter-tight group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-1.5 relative z-10">
                {contact.value}
                <ArrowUpRight
                  size={13}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </p>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-24 pt-8 border-t border-white/[0.05]"
        >
          <p className="text-[13px] text-white/20 font-inter-tight">
            © 2026 Elouan Porge · Fait avec passion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
