import { motion } from 'motion/react';

const STANDARDS = [
  {
    num: '01',
    title: 'Upfront Guaranteed Pricing',
    desc: 'You receive a fixed price before work begins. We never add unexpected travel charges or unapproved line items.',
  },
  {
    num: '02',
    title: 'No Hidden Dispatch Fees',
    desc: 'We provide clear estimates before work begins. What we quote is what you pay during all business hours.',
  },
  {
    num: '03',
    title: 'Clean Home Policy',
    desc: 'Our plumbers put on protective shoe covers before crossing your doorway and lay heavy duty mats beneath every work area.',
  },
  {
    num: '04',
    title: 'One-Year Workmanship Guarantee',
    desc: 'Every soldered joint, replaced valve, and installed fixture is backed by our full 12-month parts and labor commitment.',
  },
];

export function Standards() {
  return (
    <section id="standards" className="py-20 md:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="mb-12 md:mb-16 text-left">
        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#5B7378] mb-2 block">
          Our Commitments
        </span>
        <h2 className="font-heading font-semibold text-[clamp(32px,4.5vw,64px)] leading-[1.08] tracking-[-0.02em] text-[#12303A] text-balance">
          The standards we put in writing.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {STANDARDS.map((std, idx) => (
          <motion.div
            key={std.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <span className="font-heading font-semibold text-3xl sm:text-4xl text-[#0F5C6E] block mb-3">
                {std.num}
              </span>
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#12303A] mb-3 leading-snug">
                {std.title}
              </h3>
              <p className="font-sans text-[16px] sm:text-[17px] text-[#5B7378] leading-relaxed">
                {std.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
