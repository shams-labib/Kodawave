import React, { useState } from "react";
import { ArrowRight, Check, Sparkle, Zap, Shield, Rocket } from "lucide-react";
import Animation from "../Components/shared/Animation";

const SERVICES = [
  {
    id: "01",
    title: "High-End Web Development",
    tagline: "Speed meets Aesthetics",
    desc: "We build ultra-fast React & Next.js applications integrated with GSAP animations and 3D elements. Every line of code is handwritten for maximum performance and SEO ranking.",
    features: [
      "Core Web Vitals Optimized",
      "Custom GSAP & Framer Motion",
      "Headless CMS Integration",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "02",
    title: "SEO & Growth Authority",
    tagline: "Be Found, Not Just Seen",
    desc: "Move beyond basic keywords. Our technical SEO strategies focus on semantic search, authority building, and high-conversion content funnels to scale your organic traffic.",
    features: [
      "Competitor Gap Analysis",
      "Technical SEO Audit",
      "High-Quality Backlink Strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: { monthly: 499, yearly: 449 },
    desc: "Perfect for startups and personal branding.",
    icon: <Zap className="text-amber-500" />,
    features: ["Single Page React Site", "Basic SEO Setup", "3 Months Support"],
    popular: false,
  },
  {
    name: "Growth",
    price: { monthly: 1499, yearly: 1299 },
    desc: "The complete solution for scaling businesses.",
    icon: <Rocket className="text-blue-600" />,
    features: [
      "Full Multi-page Web App",
      "Advanced SEO Strategy",
      "PPC Ad Management",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: { monthly: 2999, yearly: 2599 },
    desc: "Enterprise-level digital dominance.",
    icon: <Shield className="text-purple-600" />,
    features: [
      "Custom 3D/GSAP Elements",
      "Full Digital Marketing",
      "CMS & E-commerce",
      "24/7 Dedicated Manager",
    ],
    popular: false,
  },
];

const ServicePage = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-white selection:bg-blue-100">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Animation direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
              <Sparkle size={14} className="text-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Service Ecosystem
              </span>
            </div>
          </Animation>
          <Animation direction="up" delay={0.2}>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-slate-900 leading-[1.05] tracking-tighter mb-8">
              Growth solutions for <br />
              <span className="text-slate-400">modern brands.</span>
            </h1>
          </Animation>
          <Animation direction="up" delay={0.3}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium">
              Explore our range of high-performance services designed to scale
              your business with technical precision and creative excellence.
            </p>
          </Animation>
        </div>
      </section>

      {/* 2. Detailed Service Blocks */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-32">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Image Block */}
            <div className="flex-1 w-full">
              <Animation
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.2}
              >
                <div className="relative group">
                  <div
                    className={`absolute inset-0 ${service.bg} rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-all duration-700`}
                  />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative z-10 rounded-[2.5rem] w-full aspect-[4/3] object-cover shadow-2xl border border-white/50"
                  />
                </div>
              </Animation>
            </div>
            {/* Content Block */}
            <div className="flex-1 space-y-8 text-left">
              <Animation direction="up" delay={0.1}>
                <span
                  className={`text-6xl font-black opacity-10 ${service.color}`}
                >
                  {service.id}
                </span>
                <p
                  className={`font-bold tracking-widest uppercase text-xs mb-2 ${service.color}`}
                >
                  {service.tagline}
                </p>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed font-medium mt-6">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 text-slate-700 font-bold text-sm"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${service.bg.replace("bg-", "bg-").split("-")[0] + "-600"}`}
                      />{" "}
                      {feat}
                    </div>
                  ))}
                </div>
              </Animation>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Pricing Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
              Investment Plans
            </h2>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <span
                className={`text-sm font-bold ${!isYearly ? "text-slate-900" : "text-slate-400"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-7 bg-slate-200 rounded-full relative transition-colors duration-300"
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-blue-600 rounded-full transition-all duration-300 ${isYearly ? "left-8" : "left-1"}`}
                />
              </button>
              <span
                className={`text-sm font-bold ${isYearly ? "text-slate-900" : "text-slate-400"}`}
              >
                Yearly <span className="text-emerald-500 ml-1">(Save 15%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan, i) => (
              <div
                key={i}
                className={`relative p-10 rounded-[2.5rem] transition-all duration-500 h-full flex flex-col ${plan.popular ? "bg-slate-900 text-white shadow-2xl scale-105 z-10" : "bg-white text-slate-900 border border-slate-100 hover:shadow-xl"}`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-8">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                    {plan.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-sm opacity-60 font-medium">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-black">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-sm opacity-60">/month</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm font-bold"
                    >
                      <Check
                        size={16}
                        className={
                          plan.popular ? "text-blue-400" : "text-blue-600"
                        }
                      />
                      <span className="opacity-80">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${plan.popular ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30" : "bg-slate-100 hover:bg-slate-200 text-slate-900"}`}
                >
                  Get Started <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Conversion CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1a1a1a] rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                Ready to build the <br />{" "}
                <span className="text-slate-400">next big thing?</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium mb-12">
                Stop dreaming about growth. Let's engineer it with a strategy
                that actually converts.
              </p>
              <button className="bg-white text-slate-900 px-12 py-5 rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
                Let's Talk Business
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
