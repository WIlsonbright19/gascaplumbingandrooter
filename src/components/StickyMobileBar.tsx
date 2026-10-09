import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appears after the hero scrolls out of view (~600px)
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 md:hidden pointer-events-none"
          style={{
            paddingBottom: 'max(14px, env(safe-area-inset-bottom))',
          }}
        >
          <div
            className="max-w-md mx-auto grid grid-cols-2 gap-3 pointer-events-auto p-2 bg-[#FFFBF4] border border-[#DCD3C0] rounded-full"
            style={{
              boxShadow: '0 12px 32px -12px rgba(18,48,58,0.28)',
            }}
          >
            {/* Call Button */}
            <a
              href="tel:+15102396175"
              className="min-h-[50px] rounded-full font-sans font-bold text-[16px] text-[#FFFFFF] bg-[#D9480F] hover:bg-[#B93A0A] transition-all flex items-center justify-center shadow-none active:scale-[0.98]"
              style={{
                transition: 'background-color 200ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Call us
            </a>

            {/* Quote Button */}
            <a
              href="#quote"
              className="min-h-[50px] rounded-full font-sans font-bold text-[16px] text-[#12303A] bg-[#FFFBF4] border border-[#DCD3C0] hover:bg-[#F6F1E7] transition-all flex items-center justify-center active:scale-[0.98]"
              style={{
                transition: 'background-color 200ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Contact us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
