import React from "react";
import {
  Lightbulb,
  Search,
  CloudUpload,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import { motion, useScroll, useTransform } from "framer-motion";
import Animation from "../../Components/shared/Animation";

// Clean variable base data structure
const FEATURES_DATA = [
  {
    title: "Idea to Blueprint",
    description:
      "Transforming concepts into structural strategies. We deep dive to understand goals and audience before a single pixel moves.",
    icon: <Lightbulb size={40} />,
    color: "#3b82f6", // blue-500
  },
  {
    title: "Strategic Research",
    description:
      "Market analysis meets technical feasibility. We provide a detailed questionnaire to analyze business needs before designing.",
    icon: <Search size={40} />,
    color: "#10b981", // emerald-500
  },
  {
    title: "High-Performance Design",
    description:
      "Pixel-perfect mockups with standard UI/UX patterns. Focus on fluid experiences that convert across any device type.",
    icon: <CloudUpload size={40} />,
    color: "#a855f7", // purple-500
  },
  {
    title: "Secure No-Code Ops",
    description:
      "Scalable no-code development with robust security protocols. We follow industry best practices for a perfect, SEO-friendly launch.",
    icon: <ShieldCheck size={40} />,
    color: "#eab308", // amber-500
  },
  {
    title: "Launch & Growth",
    description:
      "Scheduled deployment followed by dedicated training. We empower teams to own and grow their new digital asset seamlessly.",
    icon: <LifeBuoy size={40} />,
    color: "#f97316", // orange-500
  },
];

const FeatureScroll = () => {
  // Framer Motion useScroll hook total page scroll track kore
  const { scrollYProgress } = useScroll();

  return (
    <section className="bg-white py-24 md:py-32 selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial style header logic - Mobile-first design pattern */}
        <div className="max-w-3xl mb-16 md:mb-24 flex flex-col items-start">
          <Animation direction="up" delay={0.1}>
            <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">
              Process Excellence
            </span>
          </Animation>
          <Animation direction="up" delay={0.2}>
            <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-black text-slate-900 leading-[1.05] tracking-tighter">
              A precise roadmap to your <br />
              <span className="text-slate-400">digital transformation.</span>
            </h2>
          </Animation>
        </div>

        {/* The Animated Feature Container - Responsive gaps */}
        <div className="relative space-y-8 md:space-y-12">
          {FEATURES_DATA.map((feature, index) => {
            // Mobile brightness issue solve korar performant logic base logic
            const y = useTransform(
              scrollYProgress,
              // indexing logic carefully adjust korte hobe
              [0, 1 - index * 0.05, 1], // dynamic brightness reduction range
              ["0%", "-20%", "-20%"],
            );

            return (
              <FeatureCard
                key={index}
                index={index}
                y={y}
                // opacity logic adjustment for better visual flow base flow
                sticky={index > 0}
                {...feature}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureScroll;
