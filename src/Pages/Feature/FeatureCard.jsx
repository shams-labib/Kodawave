import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon, color, index }) => {
  // Helper for brand-colored backgrounds
  const lightBg = `${color}10`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Sticky top gap-ta ektu bariyechi jate ager card-er heading dekha jay
      className="sticky top-32 w-full max-w-4xl mx-auto bg-white border border-slate-100 rounded-[2rem] p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 group"
      style={{
        // Stacked effect: niche thaka card gulo halke dark hobe
        marginTop: index === 0 ? "0" : "2rem",
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        {/* Icon: Size scaled down for better UI balance */}
        <div
          className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-6"
          style={{
            backgroundColor: lightBg,
            borderColor: `${color}30`,
            color: color,
          }}
        >
          {React.cloneElement(icon, { size: 28 })}
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Phase 0{index + 1}
            </span>
            <div className="h-px w-8 bg-slate-200" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
