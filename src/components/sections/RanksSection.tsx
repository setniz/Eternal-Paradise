import { motion } from 'framer-motion';
import { Flame, Eye, Snowflake, BookOpen, Shield, Gem, Zap } from 'lucide-react';

const ranks = [
  {
    step: 'I',
    title: 'Адепт',
    ritual: 'Ритуал Пробуждения',
    desc: 'Ты переступил порог. Мир, который ты знал, остался позади. Теперь ты видишь проблески истины сквозь ледяной туман.',
    requirements: [
      'Пройти обряд инициации перед Наставником',
      'Три дня медитации молчания',
      'Изучить Свиток Начала — основы учения',
    ],
    icon: Eye,
    color: 'from-slate-400 to-slate-500',
    accent: 'border-slate-500/20',
  },
  {
    step: 'II',
    title: 'Служитель',
    ritual: 'Обряд Ледяного Пламени',
    desc: 'Ты доказал, что вера твоя — не мимолётный порыв. Теперь ты — руки и глаза культа. Твои действия говорят громче слов.',
    requirements: [
      '14 дней непрерывного служения',
      'Привести 3 новых Адептов на путь спасения',
      'Пройти Испытание Холода — ночь в одиночестве и тишине',
      'Получить одобрение Наставника',
    ],
    icon: Shield,
    color: 'from-blue-400 to-cyan-500',
    accent: 'border-blue-500/20',
  },
  {
    step: 'III',
    title: 'Наставник',
    ritual: 'Восхождение Звёзд',
    desc: 'Ты стал проводником света. Твой голос несёт учение, твои руки совершают обряды. Младшие смотрят на тебя — не подведи их.',
    requirements: [
      'Провести 10 ритуалов самостоятельно',
      'Обучить и возвысить 5 Служителей',
      'Получить одобрение двух Апостолов',
      'Прочесть все Священные Свитки наизусть',
    ],
    icon: BookOpen,
    color: 'from-cyan-400 to-ice-500',
    accent: 'border-cyan-500/20',
  },
  {
    step: 'IV',
    title: 'Апостол',
    ritual: 'Поцелуй Вечности',
    desc: 'Ты — избранный. Ближайший к божественному свету Доумы. Твоя душа уже наполовину принадлежит Вечному Раю.',
    requirements: [
      'Личная аудиенция с Доумой',
      'Выполнение Священной Миссии — задание, известное лишь тебе и Лидеру',
      'Принесение Великой Клятвы отречения',
      'Прохождение Ритуала Перерождения',
    ],
    icon: Gem,
    color: 'from-purple-400 to-indigo-500',
    accent: 'border-purple-500/20',
  },
  {
    step: '∞',
    title: 'Лидер Культа',
    ritual: 'За пределами ритуалов',
    desc: 'Этот ранг не достигается — с ним рождаются. Доума есть начало и конец, альфа и омега Вечного Рая. Он — единственный.',
    requirements: [
      'Быть Доумой',
    ],
    icon: Flame,
    color: 'from-amber-400 to-yellow-600',
    accent: 'border-amber-400/25',
  },
];

const ritualPhases = [
  { icon: '🕯️', title: 'Подготовка', desc: 'Пост и медитация. Очищение разума от земных привязанностей.' },
  { icon: '❄️', title: 'Испытание', desc: 'Преодоление физического и духовного препятствия, уникального для каждого ранга.' },
  { icon: '🔮', title: 'Откровение', desc: 'Момент истины — принятие нового знания и осознание своего места в иерархии.' },
  { icon: '✨', title: 'Вознесение', desc: 'Торжественное объявление нового ранга перед всеми членами культа.' },
];

export default function RanksSection() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p className="text-ice-400/40 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Путь Вознесения
          </p>
          <h2 className="font-serif">
            <span className="block text-4xl md:text-6xl font-bold text-shimmer">СИСТЕМА</span>
            <span className="block text-3xl md:text-5xl font-light text-ice-100/70 mt-1">ПОВЫШЕНИЯ</span>
          </h2>
          <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-ice-400/30 to-transparent mx-auto" />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-ice-200/40 max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed font-sans"
        >
          Каждое повышение — это не награда, а перерождение. Ты умираешь как тот, кем был, и рождаешься заново — ближе к свету, 
          дальше от тьмы. Священные ритуалы выжигают из тебя слабость и наполняют ледяной силой.
        </motion.p>

        {/* Ritual Phases - horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-center font-serif text-lg md:text-xl text-ice-100/50 mb-8">
            Четыре фазы священного ритуала
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {ritualPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-light rounded-xl p-4 md:p-5 text-center cursor-default group relative"
              >
                <span className="text-2xl md:text-3xl block mb-3">{phase.icon}</span>
                <h4 className="font-serif font-semibold text-ice-100/80 text-sm md:text-base mb-1.5">{phase.title}</h4>
                <p className="text-ice-200/30 text-xs leading-relaxed font-sans">{phase.desc}</p>
                
                {/* Step connector */}
                {index < ritualPhases.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                    <Zap size={12} className="text-ice-400/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rank Steps - Cards */}
        <div className="space-y-8">
          {ranks.map((rank, index) => {
            const Icon = rank.icon;
            const isLast = rank.step === '∞';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`glass rounded-2xl md:rounded-3xl overflow-hidden cursor-default group ${rank.accent}`}
                >
                  {/* Top accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${rank.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left: Step + Icon */}
                      <div className="flex md:flex-col items-center gap-4 md:gap-3 flex-shrink-0 md:w-24">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${rank.color} flex items-center justify-center shadow-lg`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <span className={`font-serif text-2xl md:text-3xl font-bold ${isLast ? 'text-amber-300/60' : 'text-ice-300/20'}`}>
                          {rank.step}
                        </span>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className={`font-serif text-xl md:text-2xl font-bold ${isLast ? 'text-amber-200' : 'text-ice-100'}`}>
                              {rank.title}
                            </h3>
                            <p className={`text-xs tracking-wider uppercase mt-1 font-sans ${isLast ? 'text-amber-300/40' : 'text-ice-400/30'}`}>
                              {rank.ritual}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-ice-200/40 text-sm md:text-base leading-relaxed mb-5 font-sans">
                          {rank.desc}
                        </p>

                        {/* Requirements */}
                        <div className="space-y-2">
                          <p className="text-ice-300/25 text-xs uppercase tracking-wider font-sans mb-2">Требования:</p>
                          {rank.requirements.map((req, ri) => (
                            <div key={ri} className="flex items-start gap-2.5">
                              <Snowflake size={12} className={`flex-shrink-0 mt-0.5 ${isLast ? 'text-amber-400/40' : 'text-ice-400/25'}`} />
                              <span className="text-ice-200/50 text-xs md:text-sm font-sans leading-relaxed">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
