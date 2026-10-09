import contact from '../assets/images/contact.jpg';
import drains from '../assets/images/drains.jpg';
import emergency from '../assets/images/emergency.jpg';
import fixtures from '../assets/images/fixtures.jpg';
import heaters from '../assets/images/heaters.jpg';
import hero from '../assets/images/hero.jpg';
import imageFallback from '../assets/images/image-fallback.svg';
import leaks from '../assets/images/leaks.jpg';
import pipes from '../assets/images/pipes.jpg';
import processCall from '../assets/images/process-call.jpg';
import processQuote from '../assets/images/process-quote.jpg';
import processRepair from '../assets/images/process-repair.jpg';
import serviceArea from '../assets/images/service-area.jpg';
import story from '../assets/images/story.jpg';

export interface ImageSlot {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
}

export interface ImagesConfig {
  heroBackground: ImageSlot;
  serviceEmergency: ImageSlot;
  serviceLeaks: ImageSlot;
  serviceDrains: ImageSlot;
  serviceHeaters: ImageSlot;
  serviceFixtures: ImageSlot;
  servicePipes: ImageSlot;
  story: ImageSlot;
  process1: ImageSlot;
  process2: ImageSlot;
  process3: ImageSlot;
  areaBackground: ImageSlot;
  ctaBackground: ImageSlot;
  gallery1: ImageSlot;
  gallery2: ImageSlot;
  gallery3: ImageSlot;
  gallery4: ImageSlot;
  gallery5: ImageSlot;
  gallery6: ImageSlot;
}

const fallbackSrc = imageFallback;

export const images: ImagesConfig = {
  heroBackground: {
    src: hero,
    fallbackSrc,
    alt: "Modern clean residential bathroom plumbing with pristine fixtures and water lines in Oakland",
    width: 1600,
    height: 900,
  },
  serviceEmergency: {
    src: emergency,
    fallbackSrc,
    alt: "Plumber clearing sewer and drain line with specialized rooter equipment",
    width: 1000,
    height: 700,
  },
  serviceLeaks: {
    src: leaks,
    fallbackSrc,
    alt: "Acoustic leak detection equipment testing home copper water supply lines",
    width: 800,
    height: 600,
  },
  serviceDrains: {
    src: drains,
    fallbackSrc,
    alt: "Clean chrome sink drain clear of clogs and running fresh water smoothly",
    width: 800,
    height: 600,
  },
  serviceHeaters: {
    src: heaters,
    fallbackSrc,
    alt: "Residential water line and valve replacement installation",
    width: 800,
    height: 600,
  },
  serviceFixtures: {
    src: fixtures,
    fallbackSrc,
    alt: "Contemporary bathroom vanity fixture and shut-off valves professionally installed",
    width: 800,
    height: 600,
  },
  servicePipes: {
    src: pipes,
    alt: "Neat copper piping and pressure regulation valves installed in residential basement",
    fallbackSrc,
    width: 800,
    height: 600,
  },
  story: {
    src: story,
    fallbackSrc,
    alt: "Andres Gasca, licensed plumbing contractor in Oakland",
    width: 900,
    height: 1125,
  },
  process1: {
    src: processCall,
    fallbackSrc,
    alt: "Plumbing technician taking customer call and scheduling home service appointment",
    width: 900,
    height: 675,
  },
  process2: {
    src: processQuote,
    fallbackSrc,
    alt: "Plumber inspecting plumbing setup and writing clear upfront price quote on clipboard",
    width: 900,
    height: 675,
  },
  process3: {
    src: processRepair,
    fallbackSrc,
    alt: "Completing pipe installation cleanly and testing pressure with zero mess left behind",
    width: 900,
    height: 675,
  },
  areaBackground: {
    src: serviceArea,
    fallbackSrc,
    alt: "Panoramic neighborhood view of homes served across Oakland and the East Bay",
    width: 1600,
    height: 900,
  },
  ctaBackground: {
    src: contact,
    fallbackSrc,
    alt: "Pristine modern kitchen with brass plumbing fittings and clean countertops",
    width: 1600,
    height: 900,
  },
  gallery1: {
    src: hero,
    fallbackSrc,
    alt: "Drain cleaning and sink plumbing",
    width: 800,
    height: 600,
  },
  gallery2: {
    src: heaters,
    fallbackSrc,
    alt: "Water line replacement",
    width: 800,
    height: 600,
  },
  gallery3: {
    src: pipes,
    fallbackSrc,
    alt: "Faucet and valve install",
    width: 800,
    height: 600,
  },
  gallery4: {
    src: fixtures,
    fallbackSrc,
    alt: "Sewer line cleanout",
    width: 800,
    height: 600,
  },
  gallery5: {
    src: drains,
    fallbackSrc,
    alt: "Garbage disposal replacement",
    width: 800,
    height: 600,
  },
  gallery6: {
    src: emergency,
    fallbackSrc,
    alt: "Shutoff valve repair",
    width: 800,
    height: 600,
  },
};
