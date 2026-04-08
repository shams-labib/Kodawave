import React, { useState } from "react"; // Added useState
import { ArrowRight, Calendar, Mail } from "lucide-react";
import Animation from "../Components/shared/Animation";
import { Link } from "react-router";
import BookingModal from "../Components/shared/BookingModal";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Animation direction="up" delay={0.1}>
          <div className="relative bg-[#0a0a0a] rounded-[3rem] p-12 md:p-24 text-center overflow-hidden shadow-2xl">
            {/* Background Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px]" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                Ready to bring your <br />
                <span className="text-slate-400 italic">ideas to life?</span>
              </h2>

              <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
                Whether you're starting from scratch or scaling an existing
                project, Kodawave is here to build the digital future with you.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6">
                <button
                  onClick={() => setIsModalOpen(true)} // Open Modal
                  className="bg-white text-black px-10 py-5 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform active:scale-95 shadow-xl"
                >
                  Get Started Now <ArrowRight size={20} />
                </button>

                <Link
                  to={"/contact"}
                  className="text-white border border-slate-800 px-10 py-5 rounded-full font-bold flex items-center gap-2 hover:bg-white/5 transition-all"
                >
                  <Mail size={18} /> Contact Sales
                </Link>
              </div>

              {/* Trust Badge / Sub-text */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  Free 30-min Consultation
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
        </Animation>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CTA;
