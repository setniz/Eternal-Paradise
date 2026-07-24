import { motion } from 'framer-motion';
import { Snowflake, Heart, Moon, Gem } from 'lucide-react';

const doctrines = [
  {
    icon: Snowflake,
    num: 'I',
    title: 'Вечный Рай',
    text: 'Мы верим в существование вечного рая — места абсолютного совершенства и красоты, где все человеческие страдания прекращаются. Это не просто место, а состояние бытия, достижимое через преданность и веру. Под ледяным небом вечного рая нет боли, только гармония и безмятежность.',
    gradient: 'from-cyan-500/[0.08] to-blue-600/[0.08]',
    iconBg: 'from-cyan-400 to-blue-500',
    accent: 'border-l-cyan-500/30',
  },
  {
    icon: Heart,
    num: 'II',
    title: 'Служение Красоте',
    text: 'Красота — это божественная сущность. Мы служим красоте во всех её проявлениях и верим, что через культивирование красоты мы приближаемся к совершенству. Каждый член культа стремится воплощать идеалы эстетики и элегантности в своей жизни.',
    gradient: 'from-pink-500/[0.08] to-rose-600/[0.08]',
    iconBg: 'from-pink-400 to-rose-500',
    accent: 'border-l-pink-500/30',
  },
  {
    icon: Moon,
    num: 'III',
    title: 'Отречение от Страдания',
    text: 'Мы отвергаем страдание как неотъемлемую часть жизни. Вместо этого, мы предлагаем путь спасения через веру и преданность. Только в вечном раю мы можем освободиться от земных забот и обрести подлинное просветление.',
    gradient: 'from-violet-500/[0.08] to-purple-600/[0.08]',
    iconBg: 'from-violet-400 to-purple-500',
    accent: 'border-l-violet-500/30',
  },
  {
    icon: Gem,
    num: 'IV',
    title: 'Единство под Лидером',
    text: 'Наш лидер, Доума, — воплощение божественного совершенства. Его улыбка — благословение, его слово — истина. Через верность ему мы обретаем путь в вечный рай. Единство членов культа под его руководством — основа нашего могущества.',
    gradient: 'from-amber-500/[0.08] to-yellow-600/[0.08]',
    iconBg: 'from-amber-400 to-yellow-500',
    accent: 'border-l-amber-500/30',
  },
];

export default function DoctrineSection() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-ice-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-ice-400/40 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Священное учение
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-shimmer">
            ФИЛОСОФИЯ КУЛЬТА
          </h2>
          <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-ice-400/30 to-transparent mx-auto" />
        </motion.div>

        {/* Doctrine Cards */}
        <div className="space-y-6 md:space-y-8">
          {doctrines.map((doctrine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ x: 6, scale: 1.01 }}
              className={`glass rounded-2xl md:rounded-3xl p-6 md:p-8 group cursor-default relative overflow-hidden border-l-2 ${doctrine.accent}`}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${doctrine.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl md:rounded-3xl`} />

              <div className="relative z-10 flex gap-5 md:gap-7">
                {/* Left: number + icon */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${doctrine.iconBg} shadow-lg`}>
                    <doctrine.icon size={24} className="text-white" />
                  </div>
                  <span className="font-serif text-xl font-bold text-ice-300/15 group-hover:text-ice-300/30 transition-colors duration-500">
                    {doctrine.num}
                  </span>
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-ice-100 mb-3 group-hover:text-white transition-colors duration-300">
                    {doctrine.title}
                  </h3>
                  <p className="text-ice-200/40 leading-relaxed text-sm md:text-base font-sans group-hover:text-ice-200/55 transition-colors duration-500">
                    {doctrine.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
