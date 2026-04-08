import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Autoplay } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";

// Swiper Essential Styles
import "swiper/css";
import "swiper/css/effect-creative";

const VISUAL_ASSETS = [
  {
    id: 1,
    title: "Neon Cyber",
    img: "https://framerusercontent.com/images/8WMnfCRl3zac1wpAY0wCh8WzOQ8.png?width=1200&height=1200",
  },
  {
    id: 2,
    title: "Abstract Flow",
    img: "https://framerusercontent.com/images/rxLeuZvRkGASW3OXEvmeg7cTKI.jpg?width=1200&height=1200",
  },
  {
    id: 3,
    title: "Etheral Forms",
    img: "https://framerusercontent.com/images/jEqT2POKDbZ6ITwZ8eA3JCXiJls.png?width=1200&height=1200",
  },
  {
    id: 4,
    title: "Digital Bloom",
    img: "https://framerusercontent.com/images/nrbt8VMc9cmZoRqHaFugyjiwzHQ.png?width=1200&height=1200",
  },
  {
    id: 5,
    title: "Future Mesh",
    img: "https://framerusercontent.com/images/iUGSzNuNIGtfWHbNmcw8wMIxQ.png?width=1200&height=1200",
  },
];

const VisualsSlider = () => {
  const swiperOptions = {
    grabCursor: true,
    effect: "creative",
    centeredSlides: true,
    loop: true,
    slidesPerView: 1.2,
    speed: 800,
    creativeEffect: {
      prev: {
        shadow: false,
        translate: ["-120%", 0, -400],
        rotate: [0, 0, -8],
      },
      next: { shadow: false, translate: ["120%", 0, -400], rotate: [0, 0, 8] },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    modules: [EffectCreative, Navigation, Autoplay],
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Responsive Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Immersive <span className="text-slate-300">3D Visuals</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-xl font-medium">
              A curated reel of 3D studies and product shots pushing digital
              boundaries.
            </p>
          </div>

          {/* Minimal Navigation Buttons */}
          <div className="flex gap-3">
            <button className="btn-prev w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300">
              <ArrowLeft size={20} />
            </button>
            <button className="btn-next w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300">
              <ArrowRight size={20} />
            </button>
          </div>
        </header>

        {/* Swiper Implementation */}
        <Swiper {...swiperOptions} className="overflow-visible">
          {VISUAL_ASSETS.map((item) => (
            <SwiperSlide
              key={item.id}
              className="transition-opacity duration-500 swiper-slide-custom"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Minimalist Project Label */}
                <div className="absolute bottom-6 left-6">
                  <div className="px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                      Visual_{item.id}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Basic Functional CSS for Active Slide State */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.4;
          filter: grayscale(0.5);
        }
        .swiper-slide {
          transition: all 0.6s ease-in-out;
        }
      `,
        }}
      />
    </section>
  );
};

export default VisualsSlider;
