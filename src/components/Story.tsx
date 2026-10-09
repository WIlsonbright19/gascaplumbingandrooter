import { motion } from 'motion/react';
import { images } from '../config/images';
import { SafeImage } from './SafeImage';

const PROMISES = [
  {
    num: '01',
    title: 'Show up when we say',
    desc: 'We arrive within our agreed service window with all essential parts on our truck.',
  },
  {
    num: '02',
    title: 'Quote before we start',
    desc: 'You receive a complete written price breakdown before any tool touches a pipe.',
  },
  {
    num: '03',
    title: 'Clean up after ourselves',
    desc: 'We wear floor covers, wipe down workspaces, and haul away every replaced component.',
  },
];

export function Story() {
  return (
    <section className="py-20 md:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT: Portrait Image with overlapping floating card */}
        <div className="lg:col-span-5 relative">
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-[#DCD3C0] aspect-[4/5] w-full"
          >
            <SafeImage
              src={images.story.src}
              fallbackSrc={images.story.fallbackSrc}
              alt={images.story.alt}
              width={images.story.width}
              height={images.story.height}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlapping floating card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 sm:-bottom-8 right-4 sm:right-6 left-4 sm:left-auto sm:max-w-xs bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-5 z-20"
          >
            <p className="font-sans text-[15px] font-semibold text-[#12303A] mb-1">
              Andres Gasca, owner.
            </p>
            <p className="font-sans text-[14px] text-[#5B7378]">
              Call me directly:{' '}
              <a
                href="tel:+15102396175"
                className="font-bold text-[#0F5C6E] hover:underline whitespace-nowrap"
              >
                (510) 239-6175
              </a>
            </p>
          </motion.div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start pt-6 lg:pt-0">
          <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#5B7378] mb-2 block">
            About Our Company
          </span>
          <h2 className="font-heading font-semibold text-[clamp(36px,5vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#12303A] mb-6 text-balance">
            Local people. Honest work.
          </h2>

          <p className="font-sans text-[17px] md:text-[18px] text-[#12303A] leading-[1.65] mb-4">
            Gasca Plumbing &amp; Rooter is a family-owned plumbing company in Oakland. We handle drains, leaks, water lines and fixtures for homes and rental properties across the East Bay.
          </p>

          <p className="font-sans text-[17px] md:text-[18px] text-[#5B7378] leading-[1.65] mb-8">
            You get an honest price before work starts, and all of our work is guaranteed.
          </p>

          {/* 3 Numbered Promises */}
          <div className="w-full space-y-4 mb-8">
            {PROMISES.map((promise, index) => (
              <motion.div
                key={promise.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-5 sm:p-6 flex items-start gap-4"
              >
                <span className="font-heading font-semibold text-2xl text-[#0F5C6E] shrink-0">
                  {promise.num}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-[#12303A] mb-1">
                    {promise.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5B7378] leading-relaxed">
                    {promise.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link-style CTA */}
          <a
            href="#quote"
            className="link-draw font-sans font-bold text-[17px] text-[#0F5C6E] inline-flex items-center gap-2"
          >
            <span>Request a service visit</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
