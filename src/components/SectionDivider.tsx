import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center gap-4 py-6"
    >
      <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent to-ice-400/15" />
      <motion.span
        className="text-ice-300/15 text-sm"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        ✦
      </motion.span>
      <div className="h-px w-20 md:w-40 bg-gradient-to-l from-transparent to-ice-400/15" />
    </motion.div>
  );
}
