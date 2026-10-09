import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { images } from '../config/images';
import { SafeImage } from './SafeImage';
import { QuoteForm } from './QuoteForm';

interface HeroProps {
  heroReady?: boolean;
  selectedService?: string;
  onServiceChange?: (s: string) => void;
}

export function Hero({ heroReady = true, selectedService, onServiceChange }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // S1 Hero parallax: background image translateY 0 to 8% desktop, 0 to 4% mobile
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  const h1Words = ['Oakland', 'plumbing,', 'done', 'honestly.'];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden pt-8 pb-20 md:pb-28"
    >
      {/* Background Image with S1 Parallax & Entry Scale */}
      <motion.div
        style={{ y: yParallax }}
        initial={{ scale: 1.1 }}
        animate={heroReady ? { scale: 1.0 } : { scale: 1.1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <SafeImage
          src={images.heroBackground.src}
          fallbackSrc={images.heroBackground.fallbackSrc}
          alt={images.heroBackground.alt}
          width={images.heroBackground.width}
          height={images.heroBackground.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Flat Scrim: Solid rgba(10,63,77,0.62) layer over the image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0A3F4D]/62 pointer-events-none z-10"
        style={{ backgroundColor: 'rgba(10, 63, 77, 0.62)' }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto px-4 sm:px-6 md:px-8 mt-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* TEXT SITS BOTTOM-LEFT over image (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start pt-12 md:pt-16">
            {/* Status line with pulsing dot */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-3"
            >
              <span
                className="w-2.5 h-2.5 rounded-full bg-[#D9480F] inline-block"
                style={{
                  animation: 'pulseDot 2400ms infinite ease-in-out',
                }}
              />
              <span className="font-sans text-[14px] font-medium tracking-[0.08em] uppercase text-[#DCEBE8]">
                Open Monday to Saturday, 8am to 7pm
              </span>
            </motion.div>

            {/* Small label: Family plumbers serving Oakland */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#F6F1E7]/90 mb-3"
            >
              Family plumbers serving Oakland
            </motion.p>

            {/* Display H1 in cream with Plumber and rooter in Oakland, CA subline */}
            <h1 className="font-heading font-semibold text-[clamp(40px,8vw,128px)] leading-[1.04] tracking-[-0.02em] text-[#F6F1E7] mb-4 text-balance break-words">
              <span className="inline-flex flex-wrap gap-x-2.5 sm:gap-x-3 overflow-hidden">
                {h1Words.map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden">
                    <motion.span
                      className="inline-block"
                      initial={{ y: '105%' }}
                      animate={heroReady ? { y: 0 } : { y: '105%' }}
                      transition={{
                        duration: 0.9,
                        delay: 0.1 + idx * 0.07,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
              <span className="block font-sans text-lg sm:text-xl md:text-2xl font-medium tracking-normal text-[#DCEBE8] mt-2">
                Plumber and rooter in Oakland, CA
              </span>
            </h1>

            {/* One sentence max 22 words */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[17px] md:text-[18px] text-[#F6F1E7] leading-[1.65] max-w-[580px] mb-8"
            >
              Family-owned Oakland plumbers. Drain cleaning, leak repair and fixtures with honest prices and guaranteed work.
            </motion.p>

            {/* Two buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <motion.a
                href="tel:+15102396175"
                initial={{ opacity: 0, y: 20 }}
                animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="min-h-[56px] md:min-h-[60px] px-8 rounded-full font-sans font-bold text-[17px] text-[#FFFFFF] bg-[#D9480F] hover:bg-[#B93A0A] transition-all flex items-center justify-center text-center shadow-none active:scale-[0.98]"
                style={{
                  transition: 'background-color 200ms cubic-bezier(0.16, 1, 0.3, 1), transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Call us
              </motion.a>

              <motion.a
                href="#quote"
                initial={{ opacity: 0, y: 20 }}
                animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="min-h-[56px] md:min-h-[60px] px-8 rounded-full font-sans font-bold text-[17px] text-[#F6F1E7] bg-transparent border-2 border-[#F6F1E7] hover:bg-[#F6F1E7]/10 transition-all flex items-center justify-center text-center active:scale-[0.98]"
                style={{
                  transition: 'background-color 200ms cubic-bezier(0.16, 1, 0.3, 1), transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Contact us
              </motion.a>
            </div>
          </div>

          {/* RIGHT SIDE (desktop): Floating cream quote card */}
          <motion.div
            initial={{ x: 48, opacity: 0 }}
            animate={heroReady ? { x: 0, opacity: 1 } : { x: 48, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div
              className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-5 sm:p-8"
              style={{
                boxShadow: '0 12px 32px -12px rgba(18,48,58,0.28)',
              }}
            >
              <div className="mb-5">
                <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#0F5C6E]">
                  All work guaranteed
                </span>
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#12303A] mt-1">
                  Contact us
                </h2>
                <p className="font-sans text-[15px] text-[#5B7378] mt-1">
                  Honest prices. No surprises.
                </p>
              </div>

              <QuoteForm
                formIdPrefix="hero-quote"
                selectedService={selectedService}
                onServiceChange={onServiceChange}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
