import { motion } from 'framer-motion';
import { Crown, Star, Eye, Sword, CircleDot } from 'lucide-react';

const hierarchyLevels = [
  {
    icon: Crown,
    iconColor: 'text-amber-300',
    iconBg: 'from-amber-500/20 to-yellow-600/15',
    title: 'Лидер Культа',
    desc: 'Доума — абсолютный владыка Вечного Рая. Его воля пронизывает каждый уголок культа, его улыбка — благословение, его слово — непреложный закон.',
    glow: 'from-amber-500/15 via-yellow-500/10 to-amber-500/15',
    border: 'border-amber-400/25',
    titleColor: 'text-amber-200',
    tag: 'АБСОЛЮТНАЯ ВЛАСТЬ',
  },
  {
    icon: Star,
    iconColor: 'text-purple-300',
    iconBg: 'from-purple-500/15 to-indigo-500/10',
    title: 'Апостол',
    desc: 'Правая рука Лидера. Апостолы несут его волю в мир, командуют ритуалами и принимают ключевые решения в его отсутствие.',
    glow: 'from-purple-500/10 via-indigo-500/5 to-purple-500/10',
    border: 'border-purple-400/15',
    titleColor: 'text-purple-200',
    tag: 'ВЫСШИЙ СОВЕТ',
  },
  {
    icon: Eye,
    iconColor: 'text-ice-300',
    iconBg: 'from-ice-500/12 to-cyan-500/8',
    title: 'Наставник',
    desc: 'Хранители знаний и проводники учения. Наставники обучают младших членов, проводят обряды и толкуют священные тексты.',
    glow: 'from-ice-500/8 via-cyan-500/5 to-ice-500/8',
    border: 'border-ice-400/12',
    titleColor: 'text-ice-200',
    tag: 'ДУХОВНОЕ РУКОВОДСТВО',
  },
  {
    icon: Sword,
    iconColor: 'text-ice-300/70',
    iconBg: 'from-slate-500/10 to-blue-500/5',
    title: 'Служитель',
    desc: 'Верные исполнители воли культа. Служители выполняют задания, охраняют тайны и активно участвуют в жизни организации.',
    glow: 'from-slate-500/5 via-blue-500/3 to-slate-500/5',
    border: 'border-ice-400/8',
    titleColor: 'text-ice-200/90',
    tag: 'ОПОРА КУЛЬТА',
  },
  {
    icon: CircleDot,
    iconColor: 'text-ice-300/50',
    iconBg: 'from-slate-500/8 to-slate-600/5',
    title: 'Адепт',
    desc: 'Начало пути. Адепт — это тот, кто переступил порог и открыл глаза навстречу свету Вечного Рая. Всё ещё впереди.',
    glow: 'from-slate-500/3 via-slate-500/2 to-slate-500/3',
    border: 'border-ice-400/6',
    titleColor: 'text-ice-200/70',
    tag: 'НАЧАЛО ПУТИ',
  },
];

export default function HierarchySection() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      {/* Background vertical line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ice-400/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p className="text-ice-400/40 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Структура власти
          </p>
          <h2 className="font-serif">
            <span className="block text-4xl md:text-6xl font-bold text-shimmer">СВЯЩЕННАЯ</span>
            <span className="block text-3xl md:text-5xl font-light text-ice-100/70 mt-1">ИЕРАРХИЯ</span>
          </h2>
          <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-ice-400/30 to-transparent mx-auto" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-ice-200/40 max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed font-sans"
        >
          Культ Вечного Рая построен на нерушимой вертикали власти. Каждый ранг — это не просто титул, 
          а мера твоей близости к ледяному свету истины. От Адепта до Лидера — каждый шаг наверх меняет тебя навсегда.
        </motion.p>

        {/* Pyramid hierarchy */}
        <div className="space-y-5 md:space-y-6">
          {hierarchyLevels.map((level, index) => {
            const widthPercent = 55 + (index * 12);
            const isLeader = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: `${widthPercent}%`, minWidth: '300px', maxWidth: '100%' }}
                  className={`glass rounded-2xl p-5 md:p-6 cursor-default group relative overflow-hidden ${level.border}`}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${level.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Pulsing glow for leader */}
                  {isLeader && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-yellow-500/5 to-amber-500/8" style={{ animation: 'breath 4s ease-in-out infinite' }} />
                  )}

                  <div className="relative z-10 flex items-center gap-4 md:gap-5 w-full">
                    {/* Icon */}
                    <motion.div
                      className={`flex-shrink-0 p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${level.iconBg} border border-white/5`}
                      animate={isLeader ? { scale: [1, 1.1, 1] } : {}}
                      transition={isLeader ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
                    >
                      <level.icon size={26} className={level.iconColor} strokeWidth={1.5} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h4 className={`font-serif font-semibold text-lg md:text-xl ${level.titleColor}`}>
                          {level.title}
                        </h4>
                        <span className="text-[10px] tracking-[0.15em] uppercase font-sans px-2 py-0.5 rounded-full bg-white/5 text-ice-300/30 border border-white/5">
                          {level.tag}
                        </span>
                      </div>
                      <p className="text-ice-200/35 text-xs md:text-sm leading-relaxed font-sans">
                        {level.desc}
                      </p>
                    </div>

                    {/* Rank number */}
                    <div className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                      isLeader ? 'bg-amber-500/15' : 'bg-ice-400/5'
                    }`}>
                      {index === 0 ? (
                        <Crown size={14} className="text-amber-300/60" />
                      ) : (
                        <span className="text-xs font-mono text-ice-300/25">{index + 1}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
