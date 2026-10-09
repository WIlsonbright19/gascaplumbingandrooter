import { motion } from 'motion/react';

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#D9480F] mb-4" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  const quoteWords = ['[REVIEW', 'TEXT]'];

  return (
    <section id="reviews" className="py-20 md:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="mb-12">
        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#5B7378] mb-2 block">
          Client Feedback
        </span>
        <h2 className="font-heading font-semibold text-[clamp(36px,5vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#12303A]">
          Straight from neighbors.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Featured Quote */}
        <div className="lg:col-span-7 bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-6 sm:p-8 md:p-12">
          <StarRow />
          <blockquote className="font-heading font-semibold text-2xl sm:text-3xl md:text-[40px] leading-[1.2] text-[#12303A] mb-8 break-words">
            <span className="inline-flex flex-wrap gap-x-2">
              &ldquo;
              {quoteWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
              &rdquo;
            </span>
          </blockquote>

          <div className="border-t border-[#DCD3C0] pt-6 flex items-center justify-between">
            <div>
              <p className="font-sans font-bold text-[17px] text-[#12303A]">
                [FIRST NAME]
              </p>
              <p className="font-sans text-[15px] text-[#5B7378]">
                [NEIGHBORHOOD]
              </p>
            </div>
            <span className="font-sans text-xs uppercase tracking-[0.08em] font-medium text-[#0F5C6E]">
              Verified Client
            </span>
          </div>
        </div>

        {/* Right: Two Smaller Quote Cards Stacked */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-6 sm:p-8"
          >
            <StarRow />
            <p className="font-sans text-[17px] text-[#12303A] leading-[1.65] mb-4">
              &ldquo;[REVIEW TEXT]&rdquo;
            </p>
            <div className="border-t border-[#DCD3C0] pt-4">
              <p className="font-sans font-bold text-[15px] text-[#12303A]">
                [FIRST NAME]
              </p>
              <p className="font-sans text-sm text-[#5B7378]">
                [NEIGHBORHOOD]
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FFFBF4] border border-[#DCD3C0] rounded-[24px] p-6 sm:p-8"
          >
            <StarRow />
            <p className="font-sans text-[17px] text-[#12303A] leading-[1.65] mb-4">
              &ldquo;[REVIEW TEXT]&rdquo;
            </p>
            <div className="border-t border-[#DCD3C0] pt-4">
              <p className="font-sans font-bold text-[15px] text-[#12303A]">
                [FIRST NAME]
              </p>
              <p className="font-sans text-sm text-[#5B7378]">
                [NEIGHBORHOOD]
              </p>
            </div>
          </motion.div>

          {/* Link-style Read more reviews on Google */}
          <div className="pt-2 text-left">
            <a
              href="https://maps.google.com/?cid=9189286838387373505&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw font-sans font-bold text-[17px] text-[#0F5C6E] inline-flex items-center gap-2"
            >
              <span>Read more reviews on Google</span>
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
      </div>
    </section>
  );
}
