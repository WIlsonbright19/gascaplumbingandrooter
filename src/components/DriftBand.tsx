import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function DriftBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Motion S7: moves translateX 0 to -20% bound to scroll progress (scroll-linked, never looping), desktop only
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hidden md:block overflow-hidden py-12 md:py-16 select-none pointer-events-none w-full"
    >
      <motion.div
        style={{ x }}
        className="whitespace-nowrap font-heading font-semibold text-[clamp(64px,8.5vw,130px)] leading-none tracking-tight flex items-center gap-12 will-change-transform"
      >
        <span
          className="text-transparent"
          style={{
            WebkitTextStroke: '1px rgba(15, 92, 110, 0.25)',
          }}
        >
          Leaks · Drains · Heaters · Repairs
        </span>
        <span
          className="text-transparent"
          style={{
            WebkitTextStroke: '1px rgba(15, 92, 110, 0.25)',
          }}
        >
          Leaks · Drains · Heaters · Repairs
        </span>
        <span
          className="text-transparent"
          style={{
            WebkitTextStroke: '1px rgba(15, 92, 110, 0.25)',
          }}
        >
          Leaks · Drains · Heaters · Repairs
        </span>
      </motion.div>
    </div>
  );
}
