import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { images } from '../config/images';
import { SafeImage } from './SafeImage';
import { QuoteForm } from './QuoteForm';

interface FinalCTAProps {
  selectedService?: string;
  onServiceChange?: (s: string) => void;
}

export function FinalCTA({ selectedService, onServiceChange }: FinalCTAProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Motion S9: parallax translateY -5% to +5%
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      id="quote"
      ref={containerRef}
      className="relative min-h-[840px] flex flex-col justify-center items-center overflow-hidden py-24 md:py-32 scroll-mt-24"
    >
      {/* Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[110%] -top-[5%] pointer-events-none"
      >
        <SafeImage
          src={images.ctaBackground.src}
          fallbackSrc={images.ctaBackground.fallbackSrc}
          alt={images.ctaBackground.alt}
          width={images.ctaBackground.width}
          height={images.ctaBackground.height}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Flat Scrim: Solid rgba(10,63,77,0.62) layer over image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(10, 63, 77, 0.62)' }}
      />

      {/* Centered Content */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">
        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#DCEBE8] mb-3 block">
          PLUMBING &amp; ROOTER SERVICE
        </span>

        <h2 className="font-heading font-semibold text-[clamp(36px,5vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#F6F1E7] mb-4">
          Ready when you are.
        </h2>

        {/* Giant tappable phone number in Fraunces at Display size */}
        <div className="mb-10 sm:mb-12 max-w-full">
          <a
            href="tel:+15102396175"
            className="font-heading font-semibold text-[clamp(32px,7vw,110px)] leading-[1.04] tracking-[-0.02em] text-[#F6F1E7] hover:text-[#DCEBE8] transition-colors block break-words"
            aria-label="Call Gasca Plumbing & Rooter"
          >
            Call us
          </a>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#DCEBE8] mt-2">
            Mon to Sat, 8am to 7pm · Closed Sunday
          </p>
        </div>

        {/* Compact Quote Form in cream card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-lg bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-5 sm:p-10 text-left"
        >
          <div className="mb-6">
            <h3 className="font-heading font-semibold text-2xl text-[#12303A] mb-1">
              Request a free upfront quote
            </h3>
            <p className="font-sans text-[15px] text-[#5B7378]">
              No obligation. Honest pricing before work begins.
            </p>
          </div>

          <QuoteForm
            formIdPrefix="final-quote"
            selectedService={selectedService}
            onServiceChange={onServiceChange}
          />

          <p className="font-sans text-xs text-[#5B7378] text-center mt-4">
            Closed Sunday. We&apos;ll call you back during business hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
