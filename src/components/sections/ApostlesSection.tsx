import { motion } from 'framer-motion';
import { Crown, Sparkles, Snowflake } from 'lucide-react';

const abilities = [
  { label: 'Титул', value: 'Воплощение Вечного Рая', icon: '🏔️' },
  { label: 'Способности', value: 'Магия льда и облика, манипуляция жизнью', icon: '❄️' },
  { label: 'Философия', value: '"Красота — это спасение. Я дарую спасение всем."', icon: '💎' },
];

export default function ApostlesSection() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-ice-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-ice-400/40 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Священные слуги
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-shimmer">
            АПОСТОЛЫ
          </h2>
          <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-ice-400/30 to-transparent mx-auto" />
        </motion.div>

        {/* Douma - Leader Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="glass rounded-3xl overflow-hidden relative border-amber-400/15">
            {/* Animated golden border glow */}
            <div className="absolute inset-0 rounded-3xl" style={{ animation: 'breath 5s ease-in-out infinite' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5 rounded-3xl" />
            </div>

            {/* Top golden accent bar */}
            <div className="h-1 bg-gradient-to-r from-amber-500/60 via-yellow-400/80 to-amber-500/60" />

            <div className="relative z-10 p-8 md:p-12">
              {/* Crown icon + name */}
              <div className="flex items-center gap-5 mb-10">
                <motion.div
                  className="p-4 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 shadow-lg shadow-amber-500/20"
                  animate={{ boxShadow: ['0 10px 25px rgba(245, 158, 11, 0.15)', '0 10px 40px rgba(245, 158, 11, 0.3)', '0 10px 25px rgba(245, 158, 11, 0.15)'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Crown size={32} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-shimmer-gold">
                    ДОУМА
                  </h3>
                  <p className="text-amber-300/40 text-sm font-sans tracking-wider">Лидер Культа · Божественный Основатель</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {abilities.map((ability, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="glass-light rounded-xl p-5 cursor-default group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{ability.icon}</span>
                      <p className="text-ice-300/30 text-xs uppercase tracking-wider font-sans">{ability.label}</p>
                    </div>
                    <p className="text-ice-100/90 font-serif font-medium text-sm md:text-base leading-relaxed">
                      {ability.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="relative">
                <Snowflake size={14} className="absolute -left-1 top-0 text-ice-400/15" />
                <p className="text-ice-200/45 leading-relaxed text-sm md:text-base font-sans pl-6">
                  Доума — идеальное воплощение божественного совершенства. С его ледяной красотой и вечной улыбкой,
                  он ведёт верующих к спасению. Его взгляд способен видеть сердца людей, его слово — закон вечного рая.
                  Под его руководством культ процветает и расширяет влияние, даруя спасение бесчисленным душам.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Apostles banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-8 py-4">
            <Sparkles size={18} className="text-purple-300/50" />
            <span className="font-serif text-lg md:text-xl text-ice-200/70">Апостолы — Высший Совет Культа</span>
            <Sparkles size={18} className="text-purple-300/50" />
          </div>
        </motion.div>

        {/* Role of Apostles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-ice-500/[0.03]" />

          <div className="relative z-10">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-ice-100/90 mb-5">
              Роль Апостолов
            </h3>
            <p className="text-ice-200/45 leading-relaxed text-sm md:text-base font-sans mb-6">
              Апостолы — это избранные служители, каждый из которых обладает уникальным даром и служит определённому аспекту учения.
              Они распространяют слово о вечном раю, совершают священные обряды и ведут верующих по пути спасения.
              Каждый апостол — отражение различных аспектов идеального мира, который Доума создаёт.
            </p>

            {/* Decorative quote */}
            <div className="glass-light rounded-xl p-5 border-l-2 border-purple-400/20">
              <p className="font-serif italic text-ice-200/50 text-sm md:text-base">
                «Апостол видит мир глазами Лидера. Его руки — продолжение воли Доумы. 
                Стать Апостолом — значит отдать себя целиком и получить взамен вечность.»
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
