import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Globe,
  Megaphone,
  Users,
  RefreshCw,
  ShoppingCart,
  ChevronDown,
  Music,
  Plane,
  Monitor,
} from "lucide-react";

const skills = [
  {
    icon: Megaphone,
    label: "Marketing",
    desc: "Stratégie digitale & branding",
    color: "text-blue-400",
  },
  {
    icon: ShoppingCart,
    label: "Vente",
    desc: "Négociation & relation client",
    color: "text-emerald-400",
  },
  {
    icon: Zap,
    label: "Communication",
    desc: "Réseaux sociaux & contenus",
    color: "text-amber-400",
  },
  {
    icon: Users,
    label: "Travail en équipe",
    desc: "Collaboration & coordination",
    color: "text-violet-400",
  },
  {
    icon: RefreshCw,
    label: "Adaptabilité",
    desc: "Polyvalence & réactivité",
    color: "text-rose-400",
  },
  {
    icon: Globe,
    label: "Langues",
    desc: "Anglais B2 · Espagnol B2",
    color: "text-cyan-400",
  },
];

const tools = [
  {
    name: "Figma",
    logo: (
      <svg viewBox="0 0 38 57" className="w-5 h-5" fill="none">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    ),
    detail:
      "Maquettes de sites web, prototypage d'interfaces, création de l'identité visuelle de VIBRA.",
  },
  {
    name: "Canva",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="12" fill="#7D2AE7" />
        <circle cx="12" cy="12" r="4.5" fill="white" />
        <circle cx="12" cy="12" r="2" fill="#00C4CC" />
      </svg>
    ),
    detail:
      "Création de visuels pour réseaux sociaux, affiches promotionnelles, supports de communication.",
  },
  {
    name: "Photoshop",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <text x="4" y="17" fill="#31A8FF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Ps</text>
      </svg>
    ),
    detail:
      "Retouche photo, détourage d'images produit, création de montages pour les réseaux sociaux.",
  },
  {
    name: "Premiere Pro",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="4" fill="#00005B" />
        <text x="4" y="17" fill="#9999FF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Pr</text>
      </svg>
    ),
    detail:
      "Montage de vidéos promotionnelles, contenus pour réseaux sociaux, teasers événementiels.",
  },
  {
    name: "WordPress",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="12" fill="#21759B" />
        <text x="5" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="serif">W</text>
      </svg>
    ),
    detail:
      "Développement et mise en ligne de sites internet, gestion de contenu, optimisation SEO.",
  },
  {
    name: "Excel",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="4" fill="#217346" />
        <text x="3" y="17" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ex</text>
      </svg>
    ),
    detail:
      "Tableaux de bord, analyses de données commerciales, suivi de ventes et statistiques.",
  },
  {
    name: "Word",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect width="24" height="24" rx="4" fill="#2B579A" />
        <text x="5" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">W</text>
      </svg>
    ),
    detail:
      "Rédaction de rapports, études, comptes rendus et documents professionnels.",
  },
];

function RugbyBall({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="12" rx="10" ry="6" transform="rotate(-35 12 12)" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 8.5L15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 12.5L11.5 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12.5 9L15 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SoccerBall({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2L14 7H10L12 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 22L14 17H10L12 22Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M2.5 9L7 10L5.5 6L2.5 9Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M21.5 9L17 10L18.5 6L21.5 9Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M4.5 18L7 14L5 17L4.5 18Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M19.5 18L17 14L19 17L19.5 18Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <polygon points="10,7 14,7 16,11 12,14 8,11" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
    </svg>
  );
}

const hobbies = [
  {
    icon: RugbyBall,
    label: "Rugby",
    sub: "7 ans à Pessac Rugby",
    color: "text-orange-400",
  },
  {
    icon: SoccerBall,
    label: "Football",
    sub: "5 ans au SPUC",
    color: "text-emerald-400",
  },
  {
    icon: Monitor,
    label: "Informatique & Tech",
    sub: "Passionné par le digital",
    color: "text-blue-400",
  },
  {
    icon: Music,
    label: "Musique",
    sub: "Écoute & découverte",
    color: "text-violet-400",
  },
  {
    icon: Plane,
    label: "Voyages",
    sub: "Grèce, Albanie...",
    color: "text-cyan-400",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ToolCard({ tool }: { tool: (typeof tools)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="liquid-glass liquid-glass-interactive rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-5 py-4 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
            {tool.logo}
          </div>
          <span className="text-[15px] font-semibold text-white/80 font-inter-tight">
            {tool.name}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-4 pt-0 border-t border-white/[0.06] relative z-10">
              <p className="text-[14px] text-white/45 font-inter-tight leading-relaxed pt-3">
                {tool.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="competences" className="relative z-10 pt-6 pb-6 px-4">
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
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Zap size={15} className="text-violet-400" />
            </div>
            <span className="text-[13px] font-semibold text-violet-400 uppercase tracking-wider font-manrope">
              Savoir-faire
            </span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-white font-manrope leading-tight">
            Mes{" "}
            <span className="font-serif italic font-normal text-violet-400/90">
              compétences
            </span>
          </h2>
        </motion.div>

        {/* Skills - Horizontal rows with liquid glass */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-3"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="liquid-glass liquid-glass-interactive rounded-2xl flex items-center gap-4 px-5 py-4 cursor-default"
            >
              <div className="shrink-0 relative z-10">
                <skill.icon size={20} className={skill.color} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1 relative z-10">
                <h3 className="text-[16px] font-bold text-white font-manrope group-hover:text-blue-200 transition-colors duration-300 sm:w-44 shrink-0">
                  {skill.label}
                </h3>
                <p className="text-[14px] text-white/40 font-inter-tight">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools - Expandable liquid glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20"
        >
          <h3 className="text-[20px] font-bold text-white font-manrope mb-6">
            Outils maîtrisés
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies - Liquid glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20"
        >
          <h3 className="text-[20px] font-bold text-white font-manrope mb-6">
            Centres d'intérêt
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3 }}
                className="liquid-glass liquid-glass-interactive rounded-2xl p-5 text-center cursor-default"
              >
                <hobby.icon
                  size={24}
                  className={`${hobby.color} mx-auto mb-3 relative z-10`}
                />
                <p className="text-[14px] font-bold text-white/80 font-manrope mb-1 relative z-10">
                  {hobby.label}
                </p>
                <p className="text-[12px] text-white/35 font-inter-tight leading-snug relative z-10">
                  {hobby.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
