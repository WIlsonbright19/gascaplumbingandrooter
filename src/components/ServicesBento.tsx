import { useState } from 'react';
import { motion } from 'motion/react';
import { images } from '../config/images';
import { SafeImage } from './SafeImage';

interface ServicesBentoProps {
  onSelectService: (service: string) => void;
}

const SERVICES = [
  {
    id: 'drain-cleaning',
    title: 'Drain cleaning & rooter',
    description: 'Clogged sinks, tubs and main lines cleared properly.',
    image: images.serviceEmergency,
    className: 'lg:col-span-6 lg:row-span-2 min-h-[380px] lg:min-h-[480px]',
  },
  {
    id: 'sewer-roots',
    title: 'Sewer & tree roots',
    description: 'Root intrusion and sewer backups cleared and diagnosed.',
    image: images.serviceDrains,
    className: 'lg:col-span-3 min-h-[260px] lg:min-h-[230px]',
  },
  {
    id: 'leak-repair',
    title: 'Leak repair',
    description: 'Find the leak, fix it, and protect your home.',
    image: images.serviceLeaks,
    className: 'lg:col-span-3 min-h-[260px] lg:min-h-[230px]',
  },
  {
    id: 'water-lines',
    title: 'Water line replacement',
    description: 'Water service line replacement from the meter to your house.',
    image: images.serviceHeaters,
    className: 'lg:col-span-3 min-h-[260px] lg:min-h-[230px]',
  },
  {
    id: 'garbage-disposals',
    title: 'Garbage disposals',
    description: 'Broken or jammed disposals repaired or replaced.',
    image: images.servicePipes,
    className: 'lg:col-span-3 min-h-[260px] lg:min-h-[230px]',
  },
  {
    id: 'faucets-fixtures',
    title: 'Faucets, valves & fixtures',
    description: 'Faucets, shutoff valves and fixtures installed or replaced.',
    image: images.serviceFixtures,
    className: 'lg:col-span-12 min-h-[260px] lg:min-h-[280px]',
  },
];

export function ServicesBento({ onSelectService }: ServicesBentoProps) {
  // Track currently active/expanded tile on mobile touch
  const [activeTileId, setActiveTileId] = useState<string | null>(null);

  const toggleTile = (id: string) => {
    setActiveTileId((prev) => (prev === id ? null : id));
  };

  const handleBook = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    e.preventDefault();
    onSelectService(title);
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      const top = quoteEl.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="pt-24 md:pt-28 pb-16 md:pb-24 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
      {/* Section Header: LEFT-aligned */}
      <div className="mb-12 md:mb-16 text-left">
        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#5B7378] block mb-2">
          Specialized Plumbing Services
        </span>
        <h2 className="font-heading font-semibold text-[clamp(36px,5vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#12303A] text-balance">
          Everything your pipes need.
        </h2>
      </div>

      {/* Asymmetric 12-column Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {SERVICES.map((service) => {
          const isActive = activeTileId === service.id;

          return (
            <motion.div
              key={service.id}
              initial={false}
              onClick={() => toggleTile(service.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleTile(service.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              aria-label={`${service.title}. Tap to toggle details.`}
              className={`group relative overflow-hidden rounded-[24px] border border-[#DCD3C0] cursor-pointer select-none transition-shadow ${service.className}`}
            >
              {/* Background Image with S3 & Hover Scale */}
              <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1.0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <SafeImage
                  src={service.image.src}
                  fallbackSrc={service.image.fallbackSrc}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                    isActive ? 'scale-105' : ''
                  }`}
                />
              </motion.div>

              {/* Flat Scrim: Solid rgba(10,63,77,0.62) layer over image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: 'rgba(10, 63, 77, 0.62)' }}
              />

              {/* Mobile "Tap to view" subtle pill indicator (top-right on mobile/tablet) */}
              <div className="absolute top-4 right-4 z-30 md:hidden pointer-events-none">
                <span className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.08em] font-medium text-[#DCEBE8] bg-[#0A3F4D]/75 border border-[#DCD3C0]/30 rounded-full px-3 py-1">
                  <span>{isActive ? 'Hide' : 'Tap to view'}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </span>
              </div>

              {/* Content: Service name in Fraunces bottom-left + description & book link */}
              <div className="relative z-20 h-full p-6 md:p-8 flex flex-col justify-end text-left pointer-events-auto">
                <h3 className="font-heading font-semibold text-2xl lg:text-3xl text-[#F6F1E7] mb-2 leading-tight">
                  {service.title}
                </h3>

                {/* Desktop hover + Mobile active tap transition */}
                <div
                  className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] md:opacity-0 md:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 ${
                    isActive
                      ? 'max-h-60 opacity-100 translate-y-0 mt-1'
                      : 'max-h-0 md:max-h-none opacity-0 md:opacity-0 overflow-hidden md:overflow-visible'
                  }`}
                >
                  <p className="font-sans text-[15px] md:text-[16px] text-[#DCEBE8] leading-relaxed mb-4 max-w-xl">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => handleBook(e, service.title)}
                    className="inline-flex items-center gap-2 font-sans font-bold text-sm text-[#F6F1E7] link-draw"
                  >
                    <span>Book this</span>
                    <svg
                      width="14"
                      height="14"
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
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative mt-6 h-[300px] sm:h-[380px] lg:h-[460px] overflow-hidden rounded-[24px] border border-[#DCD3C0]">
        <SafeImage
          src={images.servicePipes.src}
          fallbackSrc={images.servicePipes.fallbackSrc}
          alt={images.servicePipes.alt}
          width={images.servicePipes.width}
          height={images.servicePipes.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(10, 63, 77, 0.72), rgba(10, 63, 77, 0.08) 78%)' }}
        />
        <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-14">
          <p className="max-w-xl font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#F6F1E7]">
            Careful work, from the first look to the final test.
          </p>
        </div>
      </div>
    </section>
  );
}
