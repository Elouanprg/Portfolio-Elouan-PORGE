import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_3cye2bh";
const EMAILJS_TEMPLATE_ID = "template_g7oi1fk";
const EMAILJS_PUBLIC_KEY = "fmeyPs2eDvAsYLJja";

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
    href: "https://www.linkedin.com/in/elouan-porge-578548396/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-sky-400",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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
                className={`${contact.color} flex justify-center mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300 relative z-10`}
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

        {/* Contact Form - liquid glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="liquid-glass rounded-2xl p-7 md:p-10">
            <h3 className="text-[20px] font-bold text-white font-manrope mb-2 relative z-10">
              Envoyez-moi un message
            </h3>
            <p className="text-[14px] text-white/40 font-inter-tight mb-8 relative z-10">
              Je vous répondrai dans les plus brefs délais.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[12px] font-semibold text-white/30 uppercase tracking-wider font-inter-tight mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Votre nom"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white/90 font-inter-tight placeholder:text-white/20 outline-none transition-all duration-300 focus:border-blue-400/50 focus:bg-white/[0.06] focus:shadow-[0_0_20px_-5px_rgba(96,165,250,0.15)]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-white/30 uppercase tracking-wider font-inter-tight mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="votre@email.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white/90 font-inter-tight placeholder:text-white/20 outline-none transition-all duration-300 focus:border-blue-400/50 focus:bg-white/[0.06] focus:shadow-[0_0_20px_-5px_rgba(96,165,250,0.15)]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[12px] font-semibold text-white/30 uppercase tracking-wider font-inter-tight mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white/90 font-inter-tight placeholder:text-white/20 outline-none transition-all duration-300 focus:border-blue-400/50 focus:bg-white/[0.06] focus:shadow-[0_0_20px_-5px_rgba(96,165,250,0.15)] resize-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 40px rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-[#050505] font-cabin font-semibold text-[15px] rounded-full shadow-lg shadow-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Envoi...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Envoyer
                    </>
                  )}
                </motion.button>

                {status === "success" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-[14px] text-emerald-400 font-inter-tight"
                  >
                    <CheckCircle size={16} />
                    Message envoyé !
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-[14px] text-red-400 font-inter-tight"
                  >
                    <AlertCircle size={16} />
                    Erreur, réessayez.
                  </motion.span>
                )}
              </div>
            </form>
          </div>
        </motion.div>

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
