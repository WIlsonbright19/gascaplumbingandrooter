import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    q: 'What are your business hours?',
    a: 'We are open Monday to Saturday from 8am to 7pm. We are closed on Sunday.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We provide plumbing and rooter services in Oakland, Fruitvale, San Antonio, and across the East Bay.',
  },
  {
    q: 'Are estimates provided before work starts?',
    a: 'Yes. We inspect your plumbing setup and provide an honest, upfront price before turning any tools. All of our work is guaranteed.',
  },
  {
    q: 'What rooter and drain services do you handle?',
    a: 'We clear clogged bathroom and kitchen drains, sewer backups, and tree root intrusions using professional cable and rooter equipment.',
  },
  {
    q: 'Are you a licensed plumbing contractor in California?',
    a: 'Yes. Andres Gasca holds California Contractors State License #1063003 with the plumbing classification (C-36).',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 scroll-mt-20">
      <div className="max-w-2xl mb-12 md:mb-16">
        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#5B7378] mb-2 block">
          Questions &amp; Answers
        </span>
        <h2 className="font-heading font-semibold text-[clamp(32px,4.5vw,64px)] leading-[1.08] tracking-[-0.02em] text-[#12303A] text-balance mb-4">
          Common questions.
        </h2>
        <p className="font-sans text-[16px] sm:text-[17px] text-[#5B7378] leading-relaxed">
          Clear answers about our dispatch times, pricing policies, and service scope.
        </p>
      </div>

      <div className="max-w-3xl space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans focus:outline-none"
              >
                <span className="font-heading font-semibold text-lg sm:text-xl text-[#12303A] leading-snug">
                  {faq.q}
                </span>
                <span
                  className="w-8 h-8 rounded-full bg-[#F6F1E7] border border-[#DCD3C0] flex items-center justify-center shrink-0 text-[#0F5C6E] transition-transform duration-300"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6l5 5 5-5" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-[#DCD3C0]/40">
                      <p className="font-sans text-[16px] text-[#5B7378] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
