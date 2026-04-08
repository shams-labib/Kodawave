import React from "react";
import { Users, Award, BarChart3, Star, CheckCircle2 } from "lucide-react";
import Animation from "../Components/shared/Animation";

const STATS = [
  {
    label: "Projects Delivered",
    value: "250+",
    icon: <CheckCircle2 className="text-blue-600" />,
  },
  {
    label: "Client Satisfaction",
    value: "99%",
    icon: <Star className="text-amber-500" />,
  },
  {
    label: "Global Reach",
    value: "15+",
    icon: <BarChart3 className="text-emerald-600" />,
  },
  {
    label: "Awards Won",
    value: "12",
    icon: <Award className="text-purple-600" />,
  },
];

const TEAM = [
  {
    name: "Shams Al Labib",
    role: "Founder & Lead Developer",
    img: "https://i.ibb.co.com/4wbXJGc5/james-person-1.jpg",
  },
  {
    name: "Shafin Ahmed",
    role: "UI/UX Strategist",
    img: "https://i.ibb.co.com/m58WkyWV/young-bearded-man-with-striped-shirt-273609-5677.avif",
  },
  {
    name: "Maqsuda Mahboob",
    role: "Creative Director",
    img: "https://i.ibb.co.com/yBdJjzyc/Kayla-Person.jpg",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* 1. Vision & Expertise Hero */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Animation direction="right">
            <div className="space-y-6">
              <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">
                Our Vision
              </span>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-slate-900 leading-[1.05] tracking-tighter">
                We build the{" "}
                <span className="text-slate-400">digital backbone</span> of
                future giants.
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-xl">
                Founded with a mission to bridge the gap between high-end
                aesthetics and technical performance. We don't just follow
                trends; we engineer them.
              </p>
            </div>
          </Animation>

          <Animation direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -rotate-2" />
              <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px]" />
                <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
                <div className="space-y-4">
                  {[
                    "React & Next.js Ecosystem",
                    "GSAP & High-Performance Animation",
                    "SEO Authority Building",
                    "Scalable Cloud Architecture",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-sm font-semibold opacity-80">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </section>

      {/* 2. Client Success Statistics (KPIs) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, i) => (
              <Animation key={i} direction="up" delay={i * 0.1}>
                <div className="text-center space-y-3">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              </Animation>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            The Strategy Minds
          </h2>
          <p className="text-slate-500 mt-4 font-medium">
            A collective of thinkers, builders, and growth hackers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM.map((member, i) => (
            <Animation key={i} direction="up" delay={i * 0.1}>
              <div className="group text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                  <img
                    src={member.img}
                    alt={member.name}
                    className="relative z-10 w-64 h-72 object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h4>
                <p className="text-sm text-blue-600 font-bold uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
            </Animation>
          ))}
        </div>
      </section>

      {/* 4. Testimonials (Client Trust) */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                What our partners say.
              </h2>
              <div className="mt-8 flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className="fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <p className="text-slate-400 mt-6 font-medium">
                Over 200+ global brands trust us with their digital presence.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((card) => (
                <div
                  key={card}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem]"
                >
                  <p className="text-slate-300 italic mb-8">
                    "Kodawave transformed our outdated site into a
                    high-performance machine. Our conversion rate increased by
                    40% within the first month."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700" />
                    <div>
                      <div className="text-white font-bold text-sm">
                        Jason Miller
                      </div>
                      <div className="text-slate-500 text-xs">
                        CEO, TechFlow
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
