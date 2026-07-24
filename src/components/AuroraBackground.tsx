import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  char: string;
}

const runeChars = ['✦', '✧', '⟡', '◇', '○', '△', '⬡', '⊹', '✵'];

export default function AuroraBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const p: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
      char: runeChars[Math.floor(Math.random() * runeChars.length)],
    }));
    setParticles(p);
  }, []);

  return (
    <>
      {/* Aurora layers */}
      <div className="aurora-bg" />

      {/* Floating rune particles */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rune-text select-none"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              fontSize: `${p.size}px`,
              color: 'rgba(125, 180, 255, 0.06)',
              animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          >
            {p.char}
          </span>
        ))}
      </div>

      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.03]"
          style={{
            top: '10%',
            left: '20%',
            background: 'radial-gradient(circle, #3db5ff, transparent 70%)',
            animation: 'float-slow 30s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.04]"
          style={{
            bottom: '20%',
            right: '15%',
            background: 'radial-gradient(circle, #7b5ea7, transparent 70%)',
            animation: 'float-slow 25s ease-in-out 5s infinite',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-[0.02]"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, #1e50aa, transparent 70%)',
            animation: 'float-slow 35s ease-in-out 10s infinite',
          }}
        />
      </div>
    </>
  );
}
