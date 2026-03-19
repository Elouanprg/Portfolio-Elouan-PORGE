import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Camera, X } from "lucide-react";

const experiences = [
  {
    company: "VIBRA",
    role: "Stage — Agence évènementielle",
    period: "Janv. 2026 → Fév. 2026",
    description: [
      "Création de l'identité visuelle de l'entreprise",
      "Conception d'une maquette de site internet sur Figma",
      "Développement et mise en ligne du site internet",
    ],
    tags: ["Stage"],
    photos: [
      { gradient: "from-blue-500/20 to-violet-500/20", label: "Identité visuelle" },
      { gradient: "from-violet-500/20 to-pink-500/20", label: "Maquette Figma" },
      { gradient: "from-pink-500/20 to-orange-500/20", label: "Site internet" },
    ],
  },
  {
    company: "Projet Eye Tracking",
    role: "Projet tuteuré — IUT de Bordeaux",
    period: "Sept. 2025 → Juin 2026",
    description: [
      "Communication sur les réseaux sociaux et affiches",
      "Création et mise en place d'un protocole Eye Tracking",
      "Rédaction et analyse des résultats sous forme d'étude",
    ],
    tags: ["Projet"],
    photos: [
      { gradient: "from-emerald-500/20 to-cyan-500/20", label: "Communication" },
      { gradient: "from-cyan-500/20 to-blue-500/20", label: "Eye Tracking" },
      { gradient: "from-blue-500/20 to-emerald-500/20", label: "Analyse" },
    ],
  },
  {
    company: "Creta Quad Safari",
    role: "Stage — Crète, Grèce",
    period: "Juin 2025 → Juil. 2025",
    description: [
      "Communication sur les réseaux sociaux",
      "Prise en charge de clients internationaux",
      "Sécurité, traduction et accompagnement",
    ],
    tags: ["Stage", "International"],
    photos: [
      { gradient: "from-amber-500/20 to-orange-500/20", label: "Réseaux sociaux" },
      { gradient: "from-orange-500/20 to-red-500/20", label: "Clients internationaux" },
      { gradient: "from-red-500/20 to-amber-500/20", label: "Accompagnement" },
    ],
  },
  {
    company: "Maître Baratoux",
    role: "Stage — Hôtel des ventes",
    period: "Janv. 2025",
    description: [
      "Communication sur Instagram, Mail et LinkedIn",
      "Prise en charge de clients",
      "Photos et mise en ligne d'objets pour les ventes",
      "Participation à des ventes aux enchères",
    ],
    tags: ["Stage"],
    photos: [
      { gradient: "from-sky-500/20 to-indigo-500/20", label: "Communication" },
      { gradient: "from-indigo-500/20 to-purple-500/20", label: "Objets de vente" },
      { gradient: "from-purple-500/20 to-sky-500/20", label: "Ventes aux enchères" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  const [peeled, setPeeled] = useState(false);

  return (
    <div className="flex-1 relative rounded-2xl overflow-hidden">
      {/* Photo layer — behind */}
      <AnimatePresence>
        {peeled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-0 p-4"
          >
            <div className="w-full h-full rounded-xl liquid-glass p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[13px] font-semibold text-white/60 font-inter-tight">
                  {exp.company} — Photos
                </span>
                <button
                  onClick={() => setPeeled(false)}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X size={14} className="text-white/70" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 flex-1 relative z-10">
                {exp.photos.map((photo, pi) => (
                  <div
                    key={pi}
                    className={`rounded-lg bg-gradient-to-br ${photo.gradient} flex items-end p-2.5 min-h-[80px]`}
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-[11px] text-white/60 font-inter-tight leading-tight">
                      {photo.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/25 font-inter-tight text-center relative z-10">
                Ajoutez vos photos dans le dossier public/
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticker layer — on top */}
      <motion.div
        animate={{
          rotateX: peeled ? 90 : 0,
          y: peeled ? -20 : 0,
          opacity: peeled ? 0 : 1,
          scale: peeled ? 0.95 : 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
        className="liquid-glass-tint rounded-2xl p-6 md:p-7 transition-all duration-500 group relative"
      >
        {/* Peel corner */}
        <button
          onClick={() => setPeeled(!peeled)}
          className="absolute bottom-0 right-0 z-20 cursor-pointer"
          title="Voir les photos"
        >
          <div className="peel-corner">
            <Camera size={12} className="absolute bottom-2 right-2 text-blue-300/60" />
          </div>
        </button>

        <div className="flex flex-wrap items-start justify-between gap-3 mb-3 relative z-10">
          <div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-white font-manrope group-hover:text-blue-300 transition-colors duration-300">
              {exp.company}
            </h3>
            <p className="text-[14px] text-white/50 font-inter-tight mt-0.5">
              {exp.role}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {exp.tags.map((tag, ti) => (
              <span
                key={ti}
                className="liquid-glass text-[11px] font-semibold px-3 py-1 rounded-full text-blue-200 font-inter-tight"
                style={{
                  border: "1px solid rgba(147, 197, 253, 0.2)",
                }}
              >
                <span className="relative z-10">{tag}</span>
              </span>
            ))}
            <span className="text-[13px] text-white/50 font-medium font-inter-tight">
              {exp.period}
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-2 mt-4 relative z-10">
          {exp.description.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-2.5 text-[14px] text-gray-300/70 font-inter-tight leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/30 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experiences() {
  return (
    <section id="experiences" className="relative z-10 pt-12 pb-20 px-4">
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
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Briefcase size={15} className="text-blue-400" />
            </div>
            <span className="text-[13px] font-semibold text-blue-400 uppercase tracking-wider font-manrope">
              Parcours
            </span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-white font-manrope leading-tight">
            Mes{" "}
            <span className="font-serif italic font-normal text-blue-400/90">
              expériences
            </span>
          </h2>
          <p className="mt-4 text-[16px] text-gray-400 font-manrope max-w-lg">
            Un parcours entre communication, marketing digital et relation
            client, en France et à l'international.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/30 via-blue-300/10 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative flex gap-5 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0">
                  <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-cyan-300 mt-2 ring-4 ring-[#050505] shadow-[0_0_12px_rgba(96,165,250,0.5)]" />
                </div>

                {/* Card with peel effect */}
                <ExperienceCard exp={exp} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
