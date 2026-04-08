import React, { useEffect, useRef, useState } from "react"; // Added useState
import { ArrowRight, Sparkle } from "lucide-react";
import { gsap } from "gsap";
import Animation from "../Components/shared/Animation";
import { Link } from "react-router";
import BookingModal from "../Components/shared/BookingModal";

const Hero = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Human-touch: Parallax & Idle Floating Animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      elementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            x: xPos * (index + 1) * 0.4,
            y: yPos * (index + 1) * 0.4,
            duration: 1.2,
            ease: "power2.out",
          });
        }
      });
    };

    elementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          yPercent: index % 2 === 0 ? 15 : -15,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shapes = [
    {
      className:
        "top-[15%] left-[5%] w-12 h-12 md:w-16 md:h-16 bg-cyan-400 rotate-12 blur-[1px]",
      type: "glass",
    },
    {
      className:
        "bottom-[20%] left-[8%] w-10 h-10 md:w-14 md:h-14 bg-amber-400 rounded-full",
      type: "solid",
    },
    {
      className:
        "top-[12%] right-[8%] w-10 h-10 md:w-12 md:h-12 bg-rose-400 rounded-tr-[25px] -rotate-12",
      type: "solid",
    },
    {
      className:
        "bottom-[15%] right-[10%] w-16 h-16 md:w-20 md:h-20 bg-indigo-500 rotate-45 blur-[1px]",
      type: "glass",
    },
  ];

  return (
    <section className="bg-[#fafafa] overflow-hidden">
      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto min-h-[100dvh] flex items-center justify-center pt-28 pb-20 px-6"
      >
        {/* Background Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 0.5px, transparent 0.5px)`,
            backgroundSize: "clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)",
          }}
        />

        {/* Floating Interactive Shapes */}
        {shapes.map((shape, i) => (
          <div
            key={i}
            ref={(el) => (elementsRef.current[i] = el)}
            className={`absolute z-0 pointer-events-none rounded-2xl shadow-2xl ${shape.className} opacity-30 lg:opacity-100 transition-opacity duration-700`}
          >
            {shape.type === "glass" && (
              <div className="w-full h-full bg-white/20 backdrop-blur-md rounded-inherit border border-white/40" />
            )}
          </div>
        ))}

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Animation direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-10 hover:border-slate-300 transition-colors cursor-default">
              <Sparkle size={14} className="text-blue-600 animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">
                Crafting the Digital Future
              </span>
            </div>
          </Animation>

          {/* Headline */}
          <Animation direction="up" delay={0.2}>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black text-[#1a1a1a] leading-[1.05] md:leading-[0.95] tracking-tighter mb-8 px-2">
              Future-ready <br className="hidden sm:block" />
              <span className="text-slate-400/80">Experiences</span>
            </h1>
          </Animation>

          {/* Description */}
          <Animation direction="up" delay={0.3}>
            <p className="max-w-xl mx-auto text-base md:text-xl text-slate-500 font-medium leading-relaxed mb-12 px-4">
              Kodawave blends high-end aesthetics with technical precision to
              build interfaces that feel like magic and perform like machines.
            </p>
          </Animation>

          {/* Action Buttons */}
          <Animation
            direction="up"
            delay={0.4}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <button
              onClick={() => setIsModalOpen(true)} // Open Modal on Click
              className="w-full sm:w-auto group relative overflow-hidden bg-[#1a1a1a] text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-bold transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book a call{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <Link
              to={"/services"}
              className="w-full sm:w-auto text-[#1a1a1a] font-bold px-8 py-4 md:py-5 rounded-full border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all"
            >
              Our work
            </Link>
          </Animation>
        </div>

        {/* Subtle Visual Polish */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* Booking Modal Component */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
