import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "../shared/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 ${
        scrolled
          ? "py-3 bg-white/70 backdrop-blur-xl border-b border-slate-100"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-black tracking-tighter flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-white text-sm font-bold">K</span>
          </div>
          <span className="text-slate-900">KODAWAVE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            <NavLinks />
          </div>

          <Link
            to="/contact"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-600 transition-all active:scale-95"
          >
            Get Started <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 md:hidden shadow-2xl"
          >
            <NavLinks isMobile closeMenu={() => setIsOpen(false)} />
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="mt-6 block w-full bg-slate-900 text-white p-4 rounded-2xl text-center font-bold"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
