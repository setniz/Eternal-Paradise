import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Snowflakes from './components/Snowflakes';
import AuroraBackground from './components/AuroraBackground';
import SectionDivider from './components/SectionDivider';
import OverviewSection from './components/sections/OverviewSection';
import DoctrineSection from './components/sections/DoctrineSection';
import HierarchySection from './components/sections/HierarchySection';
import ApostlesSection from './components/sections/ApostlesSection';
import RanksSection from './components/sections/RanksSection';
import CommandmentsSection from './components/sections/CommandmentsSection';

const sections: Record<string, React.ComponentType> = {
  overview: OverviewSection,
  doctrine: DoctrineSection,
  hierarchy: HierarchySection,
  apostles: ApostlesSection,
  ranks: RanksSection,
  commandments: CommandmentsSection,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const ActiveSection = sections[activeTab];

  return (
    <div className="min-h-screen bg-[#050a1a] relative">
      {/* Aurora + ambient background */}
      <AuroraBackground />

      {/* Snowflakes */}
      <Snowflakes />

      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
          >
            {activeTab === 'overview' ? (
              <OverviewSection />
            ) : (
              <div className="pt-20">
                <ActiveSection />
              </div>
            )}

            {/* Divider */}
            <SectionDivider />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-8 pt-4">
        <div className="text-center">
          <p className="text-ice-300/10 text-[10px] font-sans tracking-[0.2em] uppercase">
            ❄ Культ Вечного Рая ❄
          </p>
          <p className="text-ice-300/8 text-[9px] mt-1.5 font-sans italic">
            Спасение через красоту · Вечность через веру
          </p>
        </div>
      </footer>
    </div>
  );
}
