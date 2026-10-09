import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { images } from '../config/images';
import { SafeImage } from './SafeImage';

const STEPS = [
  {
    num: '01',
    title: 'Call or message us',
    desc: 'Reach us by phone or quote request. We confirm your issue and schedule your appointment.',
    image: images.process1,
    imageLeft: true,
  },
  {
    num: '02',
    title: 'We arrive and quote upfront',
    desc: 'We inspect your plumbing and give you a fixed quote before turning a single wrench.',
    image: images.process2,
    imageLeft: false,
  },
  {
    num: '03',
    title: 'Fixed, tested, cleaned up',
    desc: 'We finish the repair properly, test every joint, and leave your room cleaner than before.',
    image: images.process3,
    imageLeft: true,
  },
];

interface StickyCardProps {
  step: typeof STEPS[0];
  index: number;
  total: number;
}

function StickyCard({ step, index, total }: StickyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  // Motion S5: each sticky card scales 1.00 to 0.96 and dims to opacity 0.85 as next card covers it (desktop only)
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, index < total - 1 ? 0.96 : 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1.0, index < total - 1 ? 0.85 : 1.0]);

  return (
    <div
      ref={cardRef}
      style={{
        top: `calc(96px + ${index * 16}px)`,
      }}
      className="md:sticky mb-12 last:mb-0"
    >
      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[32px] overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center"
      >
        {/* Photo Half */}
        <div
          className={`h-[280px] md:h-[400px] w-full overflow-hidden relative ${
            step.imageLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'
          }`}
        >
          <SafeImage
            src={step.image.src}
            fallbackSrc={step.image.fallbackSrc}
            alt={step.image.alt}
            width={step.image.width}
            height={step.image.height}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Half */}
        <div
          className={`p-8 md:p-12 flex flex-col justify-center ${
            step.imageLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'
          }`}
        >
          <span className="font-heading font-semibold text-4xl md:text-5xl text-[#0F5C6E] mb-3 block">
            {step.num}
          </span>
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-[#12303A] mb-3 leading-snug">
            {step.title}
          </h3>
          <p className="font-sans text-[17px] md:text-[18px] text-[#5B7378] leading-[1.65]">
            {step.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function Process() {
  return (
    <section className="bg-[#DCEBE8] py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* H2 CENTERED: "Three steps. That's it." */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#0F5C6E] mb-2 block">
            Simple, Transparent Process
          </span>
          <h2 className="font-heading font-semibold text-[clamp(36px,5vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#12303A]">
            Three steps. That&apos;s it.
          </h2>
        </div>

        {/* 3 Large Cards that stack using native CSS position: sticky */}
        <div className="relative pb-12">
          {STEPS.map((step, index) => (
            <StickyCard
              key={step.num}
              step={step}
              index={index}
              total={STEPS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
