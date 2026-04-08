import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import Animation from "../Components/shared/Animation";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    content:
      "Kodawave transformed our outdated site into a high-converting masterpiece. Their attention to 3D details is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director",
    content:
      "The SEO results were beyond our expectations. Our organic traffic doubled in just three months. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder of Nexus AI",
    content:
      "Working with Shams and his team was a breeze. They understand modern aesthetics and technical performance perfectly.",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "E-commerce Owner",
    content:
      "The new React dashboard they built for us is lightning fast. Our customers love the new smooth experience.",
    avatar: "https://i.pravatar.cc/150?u=emily",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Animation direction="up" delay={0.1}>
            <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/5 px-4 py-2 rounded-full mb-4 inline-block">
              Success Stories
            </span>
          </Animation>
          <Animation direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              What our <span className="text-slate-400">clients say.</span>
            </h2>
          </Animation>
        </div>

        <Animation direction="up" delay={0.3}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-[#f8f9fa] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <Quote size={40} className="text-primary/10 mb-4" />

                    <p className="text-lg text-slate-700 leading-relaxed italic mb-8">
                      "{item.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Animation>
      </div>

      {/* Custom Styles for Pagination dots */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-pagination-bullet-active {
          background: #000 !important; /* Change to your primary color */
          width: 20px !important;
          border-radius: 10px !important;
        }
      `,
        }}
      />
    </section>
  );
};

export default Testimonials;
