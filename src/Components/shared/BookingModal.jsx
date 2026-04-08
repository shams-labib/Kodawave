import React from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa"; // React Icons (Font Awesome)
import { IoMdClose, IoIosChatbubbles } from "react-icons/io"; // React Icons (Ionicons)
import Swal from "sweetalert2";

const BookingModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // Simulating Success
    Swal.fire({
      title: "Success!",
      text: "Your consultation request has been received.",
      icon: "success",
      confirmButtonColor: "#2563eb",
    });

    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-slate-900 p-8 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
              >
                <IoMdClose size={24} />
              </button>
              <h2 className="text-3xl font-black tracking-tight mb-2">
                Book a Call
              </h2>
              <p className="text-slate-400 text-sm">
                Schedule your free 30-min strategy session.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    {...register("fullName", { required: "Name is required" })}
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium"
                    placeholder="shams@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Project Details
                </label>
                <div className="relative">
                  <IoIosChatbubbles
                    className="absolute left-4 top-4 text-slate-400"
                    size={18}
                  />
                  <textarea
                    {...register("message", {
                      required: "Please tell us a bit about your project",
                    })}
                    rows="3"
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-95 transition-all shadow-xl shadow-blue-600/20"
              >
                Confirm Booking <FaPaperPlane size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
