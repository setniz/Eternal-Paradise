import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  reverse: boolean;
}

export default function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3.5 + 1.5,
      duration: Math.random() * 18 + 12,
      delay: Math.random() * 20,
      opacity: Math.random() * 0.35 + 0.05,
      reverse: Math.random() > 0.5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            background: `radial-gradient(circle, rgba(200, 220, 255, ${flake.opacity + 0.2}), rgba(200, 220, 255, 0))`,
            animation: `${flake.reverse ? 'snowfall-reverse' : 'snowfall'} ${flake.duration}s linear ${flake.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
