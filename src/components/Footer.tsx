export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A3F4D] text-[#F6F1E7] border-t border-[#DCD3C0]/20 pt-16 pb-24 md:pb-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#DCD3C0]/20">
          {/* Brand & Phone & Address */}
          <div className="md:col-span-6 flex flex-col items-start">
            <span className="font-heading font-semibold text-2xl md:text-3xl text-[#F6F1E7] tracking-tight mb-2">
              Gasca Plumbing &amp; Rooter
            </span>
            <p className="font-sans text-[17px] text-[#DCEBE8] max-w-md mb-4 leading-relaxed">
              Family-owned plumbing and rooter company in Oakland. Drain cleaning, leak repair, water lines, and fixtures with honest prices and guaranteed work.
            </p>
            <p className="font-sans text-[15px] text-[#DCEBE8]/90 mb-4">
              2535 11th Ave #D, Oakland, CA 94606
            </p>
            <a
              href="tel:+15102396175"
              className="font-heading font-semibold text-2xl text-[#F6F1E7] hover:text-[#DCEBE8] transition-colors"
            >
              (510) 239-6175
            </a>
          </div>

          {/* Service Area, Hours & License */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between">
            <div className="md:text-right mb-6">
              <span className="font-sans text-[14px] uppercase tracking-[0.08em] font-medium text-[#DCEBE8] block mb-2">
                Hours &amp; Service Area
              </span>
              <p className="font-sans text-[16px] text-[#F6F1E7]/90 leading-relaxed max-w-sm mb-2">
                Monday to Saturday, 8am to 7pm. Closed Sunday.
              </p>
              <p className="font-sans text-[15px] text-[#DCEBE8]/80 leading-relaxed max-w-sm">
                Serving Oakland, Fruitvale, San Antonio, and the wider East Bay.
              </p>
            </div>

            <div className="md:text-right">
              <span className="inline-block px-3 py-1 rounded bg-[#F6F1E7]/10 font-sans text-xs text-[#DCEBE8]">
                CA License #1063003 (C-36)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DCEBE8]/80 font-sans gap-4">
          <p>
            &copy; {currentYear} Gasca Plumbing &amp; Rooter. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Drain Cleaning &amp; Rooter</span>
            <span>·</span>
            <span>Upfront Pricing</span>
            <span>·</span>
            <span>Guaranteed Work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
