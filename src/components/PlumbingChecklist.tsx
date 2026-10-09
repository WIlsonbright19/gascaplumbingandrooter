import { motion } from 'motion/react';

const CHECKLIST_STEPS = [
  {
    step: '1',
    heading: 'Locate and turn off the main water shut-off',
    instruction: 'Usually found where the main line enters your home near the water meter, basement wall, or crawlspace. Turn clockwise until tight.',
  },
  {
    step: '2',
    heading: 'Cut power to flooded zones',
    instruction: 'If water is pooling near appliances, outlets, or baseboard heaters, flip the breaker immediately from your dry main service panel.',
  },
  {
    step: '3',
    heading: 'Drain residual pressure from faucets',
    instruction: 'Open an outside hose spigot or the lowest sink faucet to draw remaining water away from the leaking pipe interior.',
  },
  {
    step: '4',
    heading: 'Clear the path for our arrival',
    instruction: 'Secure pets, move rugs and valuables away from water paths, and keep your phone close so we can reach you.',
  },
];

export function PlumbingChecklist() {
  return (
    <section
      id="plumbing-checklist"
      className="bg-[#DCEBE8] py-20 md:py-28 relative scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#0F5C6E] mb-2 block">
            Homeowner Plumbing Checklist
          </span>
          <h2 className="font-heading font-semibold text-[clamp(32px,4.5vw,64px)] leading-[1.08] tracking-[-0.02em] text-[#12303A] text-balance mb-4">
            While we&apos;re on the way.
          </h2>
          <p className="font-sans text-[16px] sm:text-[17px] text-[#12303A] leading-relaxed">
            Take these simple steps to limit water damage while we drive to your residence in Oakland.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHECKLIST_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="w-10 h-10 rounded-full bg-[#0F5C6E] text-[#F6F1E7] font-sans font-bold text-base flex items-center justify-center mb-4">
                  {item.step}
                </span>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-[#12303A] mb-2.5 leading-snug">
                  {item.heading}
                </h3>
                <p className="font-sans text-[15px] text-[#5B7378] leading-relaxed">
                  {item.instruction}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-semibold text-xl text-[#12303A] mb-1">
              Need over-the-phone guidance?
            </h4>
            <p className="font-sans text-[15px] text-[#5B7378]">
              We can walk you through shutting off your valve over the phone.
            </p>
          </div>
          <a
            href="tel:+15102396175"
            className="inline-flex items-center justify-center font-sans font-bold text-[16px] text-white bg-[#D9480F] hover:bg-[#B93A0A] transition-colors rounded-full px-6 py-3 shrink-0"
          >
            Call us
          </a>
        </div>
      </div>
    </section>
  );
}
