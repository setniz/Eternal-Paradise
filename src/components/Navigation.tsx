import { motion } from 'framer-motion';
import { BookOpen, Crown, Users, Star, TrendingUp, ScrollText, Snowflake } from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Обзор', icon: Crown },
  { id: 'doctrine', label: 'Учение', icon: BookOpen },
  { id: 'hierarchy', label: 'Иерархия', icon: Users },
  { id: 'apostles', label: 'Апостолы', icon: Star },
  { id: 'ranks', label: 'Ранги', icon: TrendingUp },
  { id: 'commandments', label: 'Заповеди', icon: ScrollText },
];

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' as const }}
      className="fixed top-0 left-0 right-0 z-40 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab('overview')}
          >
            <motion.div
              className="p-1.5 rounded-lg bg-gradient-to-br from-ice-400/20 to-ice-600/10 border border-ice-400/15"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Snowflake size={20} className="text-ice-300" />
            </motion.div>
            <span className="font-serif text-lg md:text-xl font-semibold text-ice-100 hidden sm:block">
              Вечный Рай
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white'
                      : 'text-ice-300/50 hover:text-ice-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/8 rounded-lg border border-ice-400/15"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon size={15} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden flex items-center gap-1 overflow-x-auto max-w-[75vw]" style={{ scrollbarWidth: 'none' }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative p-2.5 rounded-lg transition-colors duration-300 flex-shrink-0 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-ice-300/40 hover:text-ice-200'
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
