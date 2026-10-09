import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingNavProps {
  heroReady?: boolean;
}

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'our-work', label: 'Our Work' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'standards', label: 'Standards' },
  { id: 'faq', label: 'FAQ' },
  { id: 'areas', label: 'Areas' },
];

export function FloatingNav({ heroReady = true }: FloatingNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('services');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const navHeight = 90;
      let current = '';

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - navHeight - 60;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = item.id;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setDrawerOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 96;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={heroReady ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-4 z-40 px-3 sm:px-4 w-full flex justify-center pointer-events-none"
      >
        <nav
          aria-label="Main Navigation"
          className={`w-full max-w-[1100px] pointer-events-auto bg-[#FFFBF4] border border-[#DCD3C0] rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
            scrolled ? 'scale-[0.97]' : 'scale-100'
          }`}
          style={{
            boxShadow: '0 12px 32px -12px rgba(18,48,58,0.28)',
          }}
        >
          {/* Left: wordmark in Fraunces 600 */}
          <a
            href="#"
            className="font-heading font-semibold text-lg sm:text-xl md:text-2xl text-[#12303A] tracking-tight whitespace-nowrap hover:text-[#0F5C6E] transition-colors truncate max-w-[190px] sm:max-w-none"
          >
            Gasca Plumbing &amp; Rooter
          </a>

          {/* Right Actions: Call button + menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+15102396175"
              className="inline-flex items-center justify-center font-sans font-bold text-[14px] sm:text-[16px] md:text-[17px] text-[#FFFFFF] bg-[#D9480F] hover:bg-[#B93A0A] transition-all rounded-full px-4 sm:px-6 py-2 sm:py-2.5 whitespace-nowrap active:scale-[0.98]"
              style={{
                transition: 'background-color 200ms cubic-bezier(0.16, 1, 0.3, 1), transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Call us
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="site-navigation-drawer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#12303A] hover:bg-[#F6F1E7] border border-[#DCD3C0] transition-colors focus:border-[#0F5C6E]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Slide-in Navigation Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Flat Scrim Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 pointer-events-auto"
              style={{ backgroundColor: 'rgba(10, 63, 77, 0.62)' }}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-sm h-full bg-[#FFFBF4] border-l border-[#DCD3C0] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto pointer-events-auto"
              id="site-navigation-drawer"
              aria-label="Navigation Menu"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#DCD3C0]">
                  <span className="font-heading font-semibold text-xl text-[#12303A]">
                    Gasca Plumbing &amp; Rooter
                  </span>
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#12303A] hover:bg-[#F6F1E7] border border-[#DCD3C0] transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="5" x2="15" y2="15" />
                      <line x1="15" y1="5" x2="5" y2="15" />
                    </svg>
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="py-6 space-y-2">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`block py-3 px-4 rounded-xl font-sans text-lg font-medium transition-colors ${
                        activeSection === item.id
                          ? 'bg-[#DCEBE8] text-[#0F5C6E] font-bold'
                          : 'text-[#12303A] hover:bg-[#F6F1E7]'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#plumbing-checklist"
                    onClick={(e) => handleNavClick(e, 'plumbing-checklist')}
                    className="block py-3 px-4 rounded-xl font-sans text-lg font-medium text-[#12303A] hover:bg-[#F6F1E7] transition-colors"
                  >
                    Plumbing Checklist
                  </a>
                </nav>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-6 border-t border-[#DCD3C0] space-y-4">
                <a
                  href="tel:+15102396175"
                  className="w-full min-h-[54px] rounded-full font-sans font-bold text-[16px] text-white bg-[#D9480F] hover:bg-[#B93A0A] flex items-center justify-center transition-colors"
                >
                  Call us
                </a>
                <p className="text-center font-sans text-xs uppercase tracking-[0.08em] font-medium text-[#5B7378]">
                  Mon to Sat, 8am to 7pm in Oakland
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
