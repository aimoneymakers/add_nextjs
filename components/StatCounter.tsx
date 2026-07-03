'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

export default function StatCounter({ target, prefix = '', suffix = '', decimals = 0, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    if (!el) return;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <div className="stat-figure text-4xl md:text-5xl text-white">
        {prefix}
        {value.toFixed(decimals)}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-white/50">{label}</p>
    </div>
  );
}
