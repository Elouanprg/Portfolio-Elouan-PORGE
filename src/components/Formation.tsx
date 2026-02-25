import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const formations = [
  {
    title: "BUT Techniques de Commercialisation",
    detail: "IUT de Bordeaux — Spécialisation Marketing digital, E-commerce & Entrepreneuriat",
    period: "2024 → 2027",
  },
  {
    title: "BAC STMG — Mention Assez Bien",
    detail: "Lycée Pape Clément — Pessac · PSC1 & PSC2",
    period: "2024",
  },
];

export default function Formation() {
  return (
    <section id="formation" className="relative z-10 py-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <GraduationCap size={15} className="text-emerald-400" />
            </div>
            <span className="text-[13px] font-semibold text-emerald-400 uppercase tracking-wider font-manrope">
              Études
            </span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-white font-manrope leading-tight">
            Ma{" "}
            <span className="font-serif italic font-normal text-emerald-400/90">
              formation
            </span>
          </h2>
        </motion.div>

        {/* Formation Cards */}
        <div className="flex flex-col gap-4">
          {formations.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass liquid-glass-interactive rounded-2xl p-6 md:p-7"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 relative z-10">
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-white font-manrope">
                    {f.title}
                  </h3>
                  <p className="text-[14px] text-white/50 font-inter-tight mt-1.5">
                    {f.detail}
                  </p>
                </div>
                <span className="text-[13px] text-white/50 font-medium font-inter-tight shrink-0 liquid-glass rounded-full px-3 py-1" style={{ border: "1px solid rgba(52,211,153,0.15)" }}>
                  <span className="relative z-10">{f.period}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
