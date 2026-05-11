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
      "Wireframes, maquettes de sites web, prototypage d'interfaces, création de l'identité visuelle de VIBRA.",
  },
  {
    name: "Canva",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#00C4CC"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"
        />
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
      <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#21759B"
          d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"
        />
      </svg>
    ),
    detail:
      "Développement et mise en ligne de sites internet, gestion de contenu, optimisation SEO.",
  },
  {
    name: "Excel",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#107C41"
          d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"
        />
      </svg>
    ),
    detail:
      "Tableaux de bord, analyses de données commerciales, suivi de ventes et statistiques.",
  },
  {
    name: "Word",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#185ABD"
          d="M23.004 1.5q.41 0 .703.293t.293.703v19.008q0 .41-.293.703t-.703.293H6.996q-.41 0-.703-.293T6 21.504V18H.996q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6H6V2.496q0-.41.293-.703t.703-.293zM6.035 11.203l1.442 4.735h1.64l1.57-7.876H9.036l-.937 4.653-1.325-4.5H5.38l-1.406 4.523-.938-4.675H1.312l1.57 7.874h1.641zM22.5 21v-3h-15v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3h-15v3Z"
        />
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
    <section id="competences" className="relative z-10 pt-20 pb-24 px-4">
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
