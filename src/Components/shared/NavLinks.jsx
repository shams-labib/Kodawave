import React from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];

const NavLinks = ({ isMobile = false, closeMenu }) => {
  const location = useLocation();

  const handleLinkClick = (path) => {
    // Close mobile menu drawer if it exists
    if (closeMenu) closeMenu();

    // If user is already on the target path, scroll to top smoothly
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <ul
      className={`flex ${isMobile ? "flex-col gap-4" : "items-center gap-1"}`}
    >
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;

        return (
          <li key={link.name} className="relative">
            <Link
              to={link.path}
              onClick={() => handleLinkClick(link.path)}
              className={`relative z-10 px-5 py-2 text-sm font-bold transition-colors duration-300 block ${
                isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}

              {isActive && (
                <motion.span
                  layoutId="activePill"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  className="absolute inset-0 bg-slate-900 rounded-full -z-10"
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
