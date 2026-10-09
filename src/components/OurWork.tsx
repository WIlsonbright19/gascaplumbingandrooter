import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { images } from '../config/images';
import { SafeImage } from './SafeImage';

const GALLERY_ITEMS = [
  {
    image: images.gallery1,
    caption: 'Drain cleaning',
    odd: true,
  },
  {
    image: images.gallery2,
    caption: 'Water line replacement',
    odd: false,
  },
  {
    image: images.gallery3,
    caption: 'Faucet and valve install',
    odd: true,
  },
  {
    image: images.gallery4,
    caption: 'Sewer line cleanout',
    odd: false,
  },
  {
    image: images.gallery5,
    caption: 'Garbage disposal replacement',
    odd: true,
  },
  {
    image: images.gallery6,
    caption: 'Shutoff valve repair',
    odd: false,
  },
];

export function OurWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax: col A moves translateY 0 to -6% and col B moves 0 to +6% on desktop
  const colAY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const colBY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  const colA = [GALLERY_ITEMS[0], GALLERY_ITEMS[2], GALLERY_ITEMS[4]];
  const colB = [GALLERY_ITEMS[1], GALLERY_ITEMS[3], GALLERY_ITEMS[5]];

  return (
    <section
      id="our-work"
      ref={sectionRef}
      className="py-20 md:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8"
    >
      {/* Heading RIGHT-aligned */}
      <div className="text-right mb-14 md:mb-20">
        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#5B7378] mb-2 block">
          Proven Craftsmanship
        </span>
        <h2 className="font-heading font-semibold text-[clamp(36px,5vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#12303A]">
          Recent jobs.
        </h2>
      </div>

      {/* 2-column staggered masonry (Desktop) / 1-column (Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Column A */}
        <motion.div
          style={{ y: colAY }}
          className="space-y-8"
        >
          {colA.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] overflow-hidden group"
            >
              <div className="overflow-hidden aspect-[4/3] w-full">
                <SafeImage
                  src={item.image.src}
                  fallbackSrc={item.image.fallbackSrc}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="font-sans text-[17px] font-medium text-[#12303A]">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Column B */}
        <motion.div
          style={{ y: colBY }}
          className="space-y-8 md:pt-12"
        >
          {colB.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] overflow-hidden group"
            >
              <div className="overflow-hidden aspect-[4/3] w-full">
                <SafeImage
                  src={item.image.src}
                  fallbackSrc={item.image.fallbackSrc}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="font-sans text-[17px] font-medium text-[#12303A]">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
