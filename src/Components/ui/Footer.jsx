import React, { useRef, useState } from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { Loader2 } from "lucide-react"; // Import for loading state
import emailjs from "@emailjs/browser"; // Recommended over 'emailjs-com'
import Swal from "sweetalert2";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration with your specific keys
    const EMAILJS_CONFIG = {
      SERVICE_ID: "service_vyedps4",
      TEMPLATE_ID: "template_gu4xayn",
      PUBLIC_KEY: "qAo87EgVJLY4cIA-A",
    };

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSubmitting(false);
          Swal.fire({
            icon: "success",
            title: "Subscribed!",
            text: "Thank you for joining our newsletter.",
            confirmButtonColor: "#2563eb",
            background: "#111827", // Modern dark background
            color: "#fff",
            customClass: {
              popup: "rounded-[2rem]",
            },
          });
          e.target.reset();
        },
        (error) => {
          setIsSubmitting(false);
          console.error("EmailJS Error:", error);
          Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text: "Please try again later.",
            confirmButtonColor: "#ef4444",
            background: "#111827",
            color: "#fff",
            customClass: {
              popup: "rounded-[2rem]",
            },
          });
        },
      );
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 border-b border-white/10 gap-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Let's craft your <br />{" "}
              <span className="text-slate-500">digital legacy.</span>
            </h2>
            <Link
              to="/contact"
              className="group flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-xs mt-4"
            >
              Start a conversation{" "}
              <FaArrowUpRightFromSquare
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>

          <div className="w-full lg:w-96">
            <p className="text-slate-400 font-medium mb-6 text-sm">
              Join our newsletter for weekly engineering insights.
            </p>

            <form
              ref={form}
              onSubmit={handleNewsletter}
              className="relative group"
            >
              <input
                name="user_email" // Map this in your EmailJS Template
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-600 transition-all text-sm pr-16"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 px-6 rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <HiOutlineMail size={20} />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="text-2xl font-black tracking-tighter uppercase italic">
              KODAWAVE<span className="text-blue-600">.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              Next-generation digital agency specializing in high-performance
              web solutions and growth-driven design.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              Navigation
            </h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-500 transition-colors"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              Services
            </h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  SEO Authority
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  UI/UX Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  3D Experience
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-right md:text-left col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              Location
            </h4>
            <p className="text-slate-400 font-bold text-sm leading-loose">
              Rangpur, Bangladesh <br />
              <span className="text-slate-600 font-medium">
                Global / Remote Operations
              </span>
            </p>
            <div className="flex justify-end md:justify-start gap-3 pt-4">
              <a
                href="#"
                className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all group"
              >
                <FaXTwitter
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all group"
              >
                <FaLinkedinIn
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://github.com/shamsallabib"
                target="_blank"
                className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all group"
              >
                <FaGithub
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all group"
              >
                <FaInstagram
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <div>© {currentYear} KODAWAVE AGENCY. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/refund-policy"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
