import { motion } from 'framer-motion';

const commandments = [
  {
    number: 'I',
    title: 'Красота превыше всего',
    text: 'Узрей красоту во всём сущем. Каждая снежинка — произведение искусства, каждый вздох — дар. Стремись к совершенству формы и духа, ибо красота есть единственная истина, неподвластная времени.',
    symbol: '❄️',
  },
  {
    number: 'II',
    title: 'Страдание — иллюзия',
    text: 'Боль и страх — лишь тени, отброшенные несовершенным разумом. Отпусти привязанности к земным тревогам. В Вечном Раю нет места страданию — есть лишь бесконечный покой ледяной тишины.',
    symbol: '🌙',
  },
  {
    number: 'III',
    title: 'Слово Лидера — закон',
    text: 'Голос Доумы — эхо вселенской гармонии. Его решения не подлежат сомнению, ибо он видит то, что сокрыто от смертных глаз. Следуй за ним — и обретёшь свет.',
    symbol: '👑',
  },
  {
    number: 'IV',
    title: 'Единство через жертву',
    text: 'Отрёкшись от собственного эго, ты становишься частью чего-то большего. Каждая жертва во имя культа — ступень на лестнице вознесения. Чем больше отдаёшь — тем ближе Рай.',
    symbol: '🔥',
  },
  {
    number: 'V',
    title: 'Тайна — священна',
    text: 'Знание, дарованное культом, не предназначено для непосвящённых. Храни обряды в сердце своём, как хранят лёд свою холодную суть. Молчание — твой щит и твоё оружие.',
    symbol: '🤫',
  },
  {
    number: 'VI',
    title: 'Обращай заблудших',
    text: 'Каждая душа заслуживает спасения. Неси свет Вечного Рая в тёмные уголки мира. Не силой, но красотой своего примера привлекай новых искателей на путь истины.',
    symbol: '✨',
  },
  {
    number: 'VII',
    title: 'Вечность ждёт терпеливых',
    text: 'Рай не откроется по первому зову. Путь к нему — бесконечная медитация над собой, непрерывное очищение духа. Лишь тот, кто отдаст всё без остатка, войдёт в ледяные врата навсегда.',
    symbol: '🏔️',
  },
];

export default function CommandmentsSection() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-full line-glow" />
        <div className="absolute bottom-1/3 left-0 w-full line-glow" />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-amber-400/40 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Священный Кодекс
          </p>
          <h2 className="font-serif">
            <span className="block text-4xl md:text-6xl font-bold text-shimmer-gold">СЕМЬ ЗАПОВЕДЕЙ</span>
            <span className="block text-2xl md:text-4xl font-light text-ice-100/60 mt-2">ВЕЧНОГО РАЯ</span>
          </h2>
          <div className="mt-6 w-32 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mx-auto" />
        </motion.div>

        {/* Commandments */}
        <div className="space-y-6">
          {commandments.map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.01, x: index % 2 === 0 ? 8 : -8 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden cursor-default group"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/[0.02] to-amber-500/0 group-hover:via-amber-500/[0.06] transition-all duration-700" />
                
                <div className="relative z-10 flex gap-5 md:gap-8 items-start">
                  {/* Roman numeral */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <span className="text-3xl">{cmd.symbol}</span>
                    <span className="font-serif text-2xl md:text-3xl font-bold text-amber-300/30 group-hover:text-amber-300/60 transition-colors duration-500">
                      {cmd.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-ice-100 mb-3 group-hover:text-amber-100 transition-colors duration-500">
                      {cmd.title}
                    </h3>
                    <p className="text-ice-200/40 leading-relaxed text-sm md:text-base font-sans group-hover:text-ice-200/55 transition-colors duration-500">
                      {cmd.text}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/20 transition-all duration-700" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-warm rounded-2xl p-8 md:p-10 inline-block max-w-lg mx-auto">
            <p className="font-serif text-lg md:text-xl italic text-amber-200/70 leading-relaxed">
              «Тот, кто следует всем семи заповедям, уже стоит у врат Рая. Осталось лишь сделать последний шаг.»
            </p>
            <p className="mt-4 text-amber-300/30 text-sm font-sans tracking-wider">— ДОУМА</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
