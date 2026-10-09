import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

function AnimatedCounter({ end, decimals = 0, suffix = '' }: { end: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(end);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * end;
      setVal(current);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setVal(end);
      }
    };

    requestAnimationFrame(frame);
  }, [isInView, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
      {suffix}
    </span>
  );
}

export function ProofBar() {
  return (
    <section className="relative z-30 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 -mt-10">
      <div className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#DCD3C0]/60">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center justify-center"
          >
            <span className="font-heading font-semibold text-base sm:text-lg text-[#12303A] mb-1">
              OPEN MON TO SAT
            </span>
            <span className="font-sans text-sm text-[#5B7378]">
              8am to 7pm · Closed Sunday
            </span>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center justify-center pt-4 sm:pt-0 sm:pl-6"
          >
            <span className="font-heading font-semibold text-base sm:text-lg text-[#12303A] mb-1">
              LICENSED CA CONTRACTOR
            </span>
            <span className="font-sans text-sm text-[#5B7378]">
              CA License #1063003 (C-36)
            </span>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center justify-center pt-4 sm:pt-0 sm:pl-6"
          >
            <span className="font-heading font-semibold text-base sm:text-lg text-[#12303A] mb-1">
              HONEST, UPFRONT PRICING
            </span>
            <span className="font-sans text-sm text-[#5B7378]">
              Quotes before work starts
            </span>
          </motion.div>

          {/* Item 4: with animated count-up for 4.9 and 95 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center justify-center pt-4 sm:pt-0 sm:pl-6"
          >
            <span className="font-heading font-semibold text-base sm:text-lg text-[#12303A] mb-1">
              <AnimatedCounter end={4.9} decimals={1} /> stars from <AnimatedCounter end={95} decimals={0} suffix="+" /> reviews
            </span>
            <span className="font-sans text-sm text-[#5B7378]">
              Verified Google ratings
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
