import { motion } from "framer-motion";
import { ArrowDown, MapPin, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative z-10 flex flex-col items-center text-center pt-14 md:pt-14 pb-14 px-4 min-h-screen justify-center"
    >
      {/* Photo with liquid glass frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10"
      >
        {/* Container — scaled down on mobile */}
        <div className="relative scale-[0.62] translate-x-2 sm:scale-[0.85] sm:translate-x-0 md:scale-100 origin-bottom" style={{ width: "412px", height: "494px" }}>
          {/* Glass circle - decorative background */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full glass-circle"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.07) 100%)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.12), inset 0 -1px 0 0 rgba(255,255,255,0.02), 0 8px 32px -8px rgba(0,0,0,0.5)",
            }}
          />
          {/* Photo — single image with CSS mask */}
          <div className="absolute inset-0 z-10 photo-mask">
            <img
              src={`${import.meta.env.BASE_URL}Design_sans_titre__1_-removebg-preview.png`}
              alt="Elouan Porge"
              className="absolute left-1/2 -translate-x-1/2"
              style={{ bottom: "0", width: "371px", height: "auto" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
        {/* Status dot */}
        <div className="absolute bottom-6 right-14 z-20 w-5 h-5 rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(52,211,153,0.85) 0%, rgba(16,185,129,0.9) 100%)",
            backdropFilter: "blur(12px) saturate(180%)",
            WebkitBackdropFilter: "blur(12px) saturate(180%)",
            border: "1.5px solid rgba(255,255,255,0.25)",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.3), 0 0 12px rgba(52,211,153,0.4), 0 0 24px rgba(52,211,153,0.2)",
          }}
        />
      </motion.div>

      {/* Badge - liquid glass */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass liquid-glass-interactive liquid-shimmer rounded-full px-5 py-2.5 mb-8 inline-flex items-center gap-2.5"
        style={{ border: "1px solid rgba(52, 211, 153, 0.15)", boxShadow: "0 0 12px rgba(52,211,153,0.15), 0 0 24px rgba(52,211,153,0.08)" }}
      >
        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse relative z-10" />
        <span className="text-[15px] font-medium text-emerald-300/90 font-manrope relative z-10">
          En recherche d'alternance
        </span>
      </motion.div>

      {/* Name x1.2 */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="text-[48px] sm:text-[62px] md:text-[76px] lg:text-[90px] font-bold leading-[1.02] tracking-tight text-white max-w-5xl font-manrope"
      >
        Elouan{" "}
        <span className="font-serif italic font-normal text-blue-400/90">
          Porge
        </span>
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 text-[16px] md:text-[20px] text-white/60 font-manrope font-medium tracking-wide"
      >
        Marketing Digital · E-commerce · Entrepreneuriat
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 text-[15px] md:text-[17px] text-gray-400 max-w-lg font-manrope leading-relaxed"
      >
        Étudiant en 2ème année de BUT Techniques de Commercialisation à l'IUT de Bordeaux, passionné par le digital et l'innovation.
      </motion.p>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2 mt-5 text-white/50"
      >
        <MapPin size={16} />
        <span className="text-[15px] font-manrope font-medium">
          Bordeaux, France
        </span>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-center justify-center gap-4 mt-12"
      >
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.04,
            boxShadow: "0 8px 40px rgba(255,255,255,0.15)",
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-dark font-cabin font-semibold text-[16px] rounded-full shadow-lg shadow-white/10 transition-shadow duration-300"
        >
          Me contacter
        </motion.a>
        <motion.a
          href={`${import.meta.env.BASE_URL}cv-elouan-porge.pdf`}
          download
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="liquid-glass liquid-glass-interactive inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white/80 font-cabin font-medium text-[16px] rounded-full relative"
        >
          <Download size={18} className="relative z-10" />
          <span className="relative z-10">Télécharger mon CV</span>
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
