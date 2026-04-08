import React from "react";
import { CheckCircle2, Award, Zap, Users } from "lucide-react";
import Animation from "../Components/shared/Animation";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Performance First",
      desc: "We ensure lightning-fast loading speeds, scoring 90+ on Google PageSpeed Insights.",
      icon: <Zap className="text-amber-500" />,
    },
    {
      title: "Award-Winning Design",
      desc: "Our designs are recognized for their aesthetics and high-end user experience.",
      icon: <Award className="text-purple-500" />,
    },
    {
      title: "Dedicated Support",
      desc: "You get a dedicated project manager and 24/7 technical support after launch.",
      icon: <Users className="text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Text Content */}
          <div>
            <Animation direction="left" delay={0.1}>
              <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/5 px-4 py-2 rounded-full mb-6 inline-block">
                Our Competitive Edge
              </span>
            </Animation>

            <Animation direction="left" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Why businesses{" "}
                <span className="text-slate-400">trust Kodawave</span> to scale.
              </h2>
            </Animation>

            <div className="space-y-8">
              {benefits.map((item, index) => (
                <Animation key={index} direction="up" delay={0.3 + index * 0.1}>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Animation>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Stats / Image Card */}
          <Animation direction="right" delay={0.4} className="relative">
            <div className="relative z-10 p-2 bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-0" />

                <h3 className="text-3xl font-bold mb-6 relative z-10">
                  Real results, <br /> delivered.
                </h3>

                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-extrabold text-primary mb-2">
                      150+
                    </div>
                    <p className="text-slate-400 text-sm">Projects Launched</p>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary mb-2">
                      98%
                    </div>
                    <p className="text-slate-400 text-sm">Customer Retention</p>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary mb-2">
                      12+
                    </div>
                    <p className="text-slate-400 text-sm">Industry Awards</p>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-primary mb-2">
                      24/7
                    </div>
                    <p className="text-slate-500 text-sm">Expert Support</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold"
                        >
                          U{i}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-slate-400">
                      Join 500+ happy founders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background elements to match Hero style */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl -z-0" />
          </Animation>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
