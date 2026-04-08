import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper core styles
import "swiper/css";

/**
 * LOGO_DATA:
 * Hardcoded data-ke component-er baire rakha bhalo practice,
 * jate porobortite API theke data ashle shohoje replace kora jay.
 */
const LOGO_DATA = [
  {
    name: "Landify",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    name: "Flexify",
    url: "https://cdn.prod.website-files.com/656e9d671ff40834d6f31aff/656e9d671ff40834d6f330ed_CMeg6P-Ej4ADEAE%3D.webp",
  },
  {
    name: "Flowboard",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Agentify",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "TodoFusion",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Identify",
    url: "https://www.svgrepo.com/show/488200/find.svg",
  },
];

const ClientLogos = () => {
  // Swiper configurations as a constant for better readability
  const swiperOptions = {
    modules: [Autoplay],
    spaceBetween: 50,
    slidesPerView: 2,
    loop: true,
    speed: 5000, // Speed set for a smooth continuous flow
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 3, spaceBetween: 60 },
      768: { slidesPerView: 4, spaceBetween: 80 },
      1024: { slidesPerView: 6, spaceBetween: 100 },
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtle Section Header */}
        <div className="mb-12">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Trusted by global industry leaders
          </p>
        </div>

        {/* Continuous Ticker */}
        <Swiper {...swiperOptions} className="logo-ticker-wrapper">
          {LOGO_DATA.map((logo) => (
            <SwiperSlide
              key={logo.name}
              className="flex items-center justify-center"
            >
              <div className="flex items-center gap-3 py-2">
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className="h-7 md:h-8 w-auto object-contain select-none"
                />
                <span className="text-base md:text-lg font-bold tracking-tight text-slate-800 select-none">
                  {logo.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scoped CSS for the Infinite Ticker Effect */}
      <style>{`
        .logo-ticker-wrapper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        
        .logo-ticker-wrapper {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
