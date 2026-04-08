import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, RefreshCcw, ChevronRight } from "lucide-react";
import Animation from "../../components/shared/Animation"; // Using your existing GSAP wrapper

const POLICIES = [
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: <ShieldCheck size={20} />,
    content:
      "Your privacy is our priority. We collect only essential data to provide our services, ensuring your information is encrypted and never sold to third parties. We comply with global data protection standards.",
  },
  {
    id: "terms",
    title: "Terms of Service",
    icon: <FileText size={20} />,
    content:
      "By using Kodawave, you agree to our terms. This includes fair usage of our platform, respect for intellectual property, and adherence to our community guidelines. We reserve the right to update these terms.",
  },
  {
    id: "refund",
    title: "Refund Policy",
    icon: <RefreshCcw size={20} />,
    content:
      "We offer a 7-day money-back guarantee for our premium services. If you are not satisfied with the quality of our work, you can request a full refund within the first week of your subscription.",
  },
];

const LegalPolicies = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section using your GSAP Animation wrapper */}
        <Animation type="fade-up">
          <header className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Legal <span className="text-slate-300">Guidelines</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl font-medium">
              Clear, transparent, and human-readable policies to ensure a
              trustworthy experience for our clients and partners.
            </p>
          </header>
        </Animation>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Sidebar Navigation */}
          <div className="md:col-span-4 space-y-3">
            {POLICIES.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setActiveTab(policy.id)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-500 group ${
                  activeTab === policy.id
                    ? "bg-slate-900 text-white shadow-xl"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={
                      activeTab === policy.id
                        ? "text-blue-400"
                        : "text-slate-400 group-hover:text-slate-900 transition-colors"
                    }
                  >
                    {policy.icon}
                  </span>
                  <span className="font-bold text-sm uppercase tracking-wider">
                    {policy.title}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-500 ${activeTab === policy.id ? "rotate-90" : "group-hover:translate-x-1"}`}
                />
              </button>
            ))}
          </div>

          {/* Content Display Area */}
          <div className="md:col-span-8 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 min-h-[400px] relative overflow-hidden border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="h-[1px] w-12 bg-current" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    Documentation
                  </span>
                </div>

                <h3 className="text-3xl font-black text-slate-900">
                  {POLICIES.find((p) => p.id === activeTab).title}
                </h3>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {POLICIES.find((p) => p.id === activeTab).content}
                  </p>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none select-none">
                  {React.cloneElement(
                    POLICIES.find((p) => p.id === activeTab).icon,
                    { size: 240 },
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalPolicies;
