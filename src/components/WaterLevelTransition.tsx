import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WaterLevelTransitionProps {
  onComplete?: () => void;
}

export function WaterLevelTransition({ onComplete }: WaterLevelTransitionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [waterFilled, setWaterFilled] = useState(false);
  const [splitting, setSplitting] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    // Check session storage
    try {
      const visited = sessionStorage.getItem('plumber_visited');
      if (visited) {
        if (onComplete) onComplete();
        return;
      }
      sessionStorage.setItem('plumber_visited', 'true');
    } catch {
      // sessionStorage unavailable
    }

    setShouldRender(true);

    // Timeline:
    // 0ms - 800ms: water rises from bottom (scaleY 0 to 1)
    // 800ms: water filled, wordmark inverts to cream
    // 900ms: splitting starts (halves slide apart horizontally 700ms)
    // 900ms: call onComplete so hero begins entering at moment halves start separating
    // 1500ms: transition finishes completely, unmount
    const fillTimer = setTimeout(() => {
      setWaterFilled(true);
    }, 800);

    const splitTimer = setTimeout(() => {
      setSplitting(true);
      if (onComplete) onComplete();
    }, 900);

    const finishTimer = setTimeout(() => {
      setFinished(true);
    }, 1500);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  if (!shouldRender || finished) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
    >
      {/* Left Half */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: splitting ? '-100%' : '0%' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#F6F1E7] overflow-hidden"
      >
        {/* Teal water rising */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0 bg-[#0F5C6E] origin-bottom"
        />
        {/* Centered wordmark - left half */}
        <div className="absolute top-0 bottom-0 right-0 w-[100vw] flex items-center justify-center pointer-events-none">
          <span
            className={`font-heading text-3xl md:text-5xl font-semibold transition-colors duration-300 ${
              waterFilled ? 'text-[#F6F1E7]' : 'text-[#12303A]'
            }`}
          >
            Gasca Plumbing & Rooter
          </span>
        </div>
      </motion.div>

      {/* Right Half */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: splitting ? '100%' : '0%' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#F6F1E7] overflow-hidden"
      >
        {/* Teal water rising */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0 bg-[#0F5C6E] origin-bottom"
        />
        {/* Centered wordmark - right half */}
        <div className="absolute top-0 bottom-0 left-0 w-[100vw] flex items-center justify-center pointer-events-none">
          <span
            className={`font-heading text-3xl md:text-5xl font-semibold transition-colors duration-300 ${
              waterFilled ? 'text-[#F6F1E7]' : 'text-[#12303A]'
            }`}
          >
            Gasca Plumbing & Rooter
          </span>
        </div>
      </motion.div>
    </div>
  );
}
