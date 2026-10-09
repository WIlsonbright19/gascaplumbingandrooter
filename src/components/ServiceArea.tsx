import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { images } from '../config/images';
import { SafeImage } from './SafeImage';

const TOWNS = [
  'Oakland',
  'Fruitvale',
  'San Antonio',
  'More of the East Bay',
];

export function ServiceArea() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Motion S9: image drifts translateY -5% to +5%
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      id="areas"
      ref={containerRef}
      className="relative min-h-[640px] md:min-h-[720px] flex items-center justify-end overflow-hidden py-20 md:py-28"
    >
      {/* Background Image with S9 parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[110%] -top-[5%] pointer-events-none"
      >
        <SafeImage
          src={images.areaBackground.src}
          fallbackSrc={images.areaBackground.fallbackSrc}
          alt={images.areaBackground.alt}
          width={images.areaBackground.width}
          height={images.areaBackground.height}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Flat Scrim: solid rgba(10,63,77,0.62) layer over image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(10, 63, 77, 0.62)' }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto px-4 sm:px-6 md:px-8 flex justify-end">
        {/* Cream rounded panel floats on the right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[32px] p-8 sm:p-12 max-w-xl w-full"
        >
          <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#5B7378] mb-2 block">
            Service Coverage
          </span>
          <h2 className="font-heading font-semibold text-[clamp(36px,5vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#12303A] mb-6">
            Where we work.
          </h2>

          <p className="font-sans text-[17px] text-[#5B7378] leading-relaxed mb-6">
            We provide plumbing and rooter services for homes and rental properties across Oakland and neighboring communities in the East Bay.
          </p>

          {/* Towns as pill chips (exactly 4) */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {TOWNS.map((town, index) => (
              <span
                key={index}
                className="bg-[#F6F1E7] border border-[#DCD3C0] rounded-full px-5 py-2 font-sans font-medium text-[15px] text-[#12303A]"
              >
                {town}
              </span>
            ))}
          </div>

          <div className="border-t border-[#DCD3C0] pt-6">
            <p className="font-sans text-[17px] text-[#12303A]">
              Don&apos;t see your town?{' '}
              <a
                href="tel:+15102396175"
                className="font-bold text-[#0F5C6E] hover:underline whitespace-nowrap link-draw"
              >
                Call us.
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
