import React, { useState, useEffect, useCallback } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Constants - Clean and Maintainable
  const WHATSAPP_NUMBER = "8801784768887";
  const DEFAULT_MESSAGE = "Hello Shams! I'm interested in your services.";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  // Throttle logic for better performance
  const handleScroll = useCallback(() => {
    if (window.scrollY > 400) {
      if (!isVisible) setIsVisible(true);
    } else {
      if (isVisible) setIsVisible(false);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Mobile responsive bottom/right spacing (smaller on phones)
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] flex flex-col items-center gap-3 md:gap-4 pointer-events-none">
      {/* Scroll to Top Arrow */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            onClick={scrollToTop}
            className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white text-slate-900 rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:bg-slate-50 active:scale-90 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="md:w-5 md:h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp FAB */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle
          size={28}
          className="md:w-8 md:h-8"
          fill="currentColor"
        />

        {/* Desktop Tooltip - Hidden on Mobile */}
        <span className="hidden md:block absolute right-20 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Chat With Me
        </span>

        {/* Pulse attention grabber */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      </motion.a>
    </div>
  );
};

export default FloatingActions;
