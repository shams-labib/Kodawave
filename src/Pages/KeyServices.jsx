import React from "react";
import { Monitor, Search, Megaphone, ArrowUpRight } from "lucide-react";
import Animation from "../Components/shared/Animation";

const services = [
  {
    title: "Web Development",
    desc: "Building high-performance, 3D-integrated React applications that convert visitors into customers.",
    icon: <Monitor size={24} />,
    color: "bg-blue-500",
    shadow: "shadow-blue-200",
  },
  {
    title: "SEO Optimization",
    desc: "Dominating search engine rankings with data-driven strategies to increase your organic reach.",
    icon: <Search size={24} />,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-200",
  },
  {
    title: "Online Advertising",
    desc: "Strategic PPC and social media campaigns designed to maximize ROI and scale your brand fast.",
    icon: <Megaphone size={24} />,
    color: "bg-purple-500",
    shadow: "shadow-purple-200",
  },
];

const KeyServices = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <Animation direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Pushing the boundaries of <br />
              <span className="text-slate-400">digital possibilities.</span>
            </h2>
          </Animation>
          <Animation direction="up" delay={0.2}>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              We don't just build websites; we create digital ecosystems that
              drive growth and set new industry standards.
            </p>
          </Animation>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Animation key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="group relative p-10 rounded-[2.5rem] bg-[#f8f9fa] border border-slate-100 hover:bg-white hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between overflow-hidden">
                {/* Decorative Gradient Hover Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-slate-50 rounded-full group-hover:bg-primary/5 transition-colors duration-500 -z-0" />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 ${service.color} ${service.shadow} group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10">
                  <button className="flex items-center gap-2 font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                    Learn more{" "}
                    <ArrowUpRight
                      size={18}
                      className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
