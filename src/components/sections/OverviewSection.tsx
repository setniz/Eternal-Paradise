import { motion } from 'framer-motion';
import { Crown, Users, Star, Sparkles } from 'lucide-react';

const stats = [
  { icon: Crown, label: 'Лидер', value: 'Доума', color: 'from-amber-400 to-yellow-600' },
  { icon: Users, label: 'Адептов', value: '0', color: 'from-ice-300 to-ice-500' },
  { icon: Star, label: 'Апостолов', value: '1', color: 'from-purple-400 to-indigo-500' },
  { icon: Sparkles, label: 'Влияние Культа', value: 'Средний', color: 'from-cyan-400 to-blue-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function OverviewSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a1a]/50 via-[#050a1a]/30 to-[#050a1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss-950/70 via-transparent to-abyss-950/70" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, #050a1a 100%)'
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Snowflake icon */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            className="text-6xl md:text-8xl inline-block"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            ❄️
          </motion.span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-ice-300/50 text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-sans"
        >
          Добро пожаловать в рай вечности
        </motion.p>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="font-serif">
          <span className="block text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-shimmer leading-none">
            КУЛЬТ
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-light text-ice-100/80 mt-3">
            ВЕЧНОГО РАЯ
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-8 md:mt-10 text-base md:text-lg text-ice-200/45 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Добро пожаловать в священную организацию, где мечты и реальность сплетаются в гармонии.
          Мы предлагаем спасение от страданий через вечный рай — место, где все преграды исчезают.
          Под руководством нашего лидера, мы стремимся к совершенству и просветлению.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-14">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-11 rounded-full border border-ice-400/20 mx-auto flex justify-center pt-2.5"
          >
            <motion.div
              className="w-1 h-2.5 rounded-full bg-ice-300/40"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto mt-20 md:mt-28 pb-12"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                className="glass rounded-2xl p-5 md:p-6 text-center group cursor-default"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <p className="text-ice-300/35 text-[10px] uppercase tracking-[0.15em] mb-1.5 font-sans">
                  {stat.label}
                </p>
                <p className="text-xl md:text-2xl font-serif font-bold text-ice-100">
                  {stat.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
