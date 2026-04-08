import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Import SweetAlert2
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Loader2,
  CheckCircle,
} from "lucide-react";
import Animation from "../../Components/shared/Animation";

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

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
          setLoading(false);
          setStatus("success");
          form.current.reset();

          // SweetAlert Success
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonColor: "#2563eb", // Tailwind blue-600
          });

          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("FAILED...", error.text);

          // SweetAlert Error
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonColor: "#ef4444", // Tailwind red-500
          });

          setTimeout(() => setStatus(null), 5000);
        },
      );
  };

  const contactDetails = [
    {
      icon: <Mail className="text-blue-600" />,
      title: "Email Us",
      info: "hello@kodawave.com",
      sub: "Response within 24 hours",
    },
    {
      icon: <Phone className="text-emerald-600" />,
      title: "Call Us",
      info: "+880 1784 768887",
      sub: "Mon - Fri, 9am - 6pm",
    },
    {
      icon: <MapPin className="text-purple-600" />,
      title: "Visit Us",
      info: "Rangpur, Bangladesh",
      sub: "CST Plaza, 6th Floor",
    },
  ];

  return (
    <div className="bg-white selection:bg-blue-100">
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <Animation direction="up">
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black text-slate-900 leading-[1.05] tracking-tighter mb-6">
            Let's build something <br />
            <span className="text-slate-400">extraordinary.</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-500 font-medium">
            Have a project in mind? Or just want to say hi? We're always open to
            discussing new ideas and high-impact digital strategies.
          </p>
        </Animation>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <Animation direction="right" delay={0.2}>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      Full Name
                    </label>
                    <input
                      name="user_name"
                      type="text"
                      required
                      placeholder="Shams Al Labib"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      Email Address
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      required
                      placeholder="shams@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium appearance-none"
                  >
                    <option>Web Development</option>
                    <option>SEO Optimization</option>
                    <option>UI/UX Design</option>
                    <option>Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project goals..."
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <button
                    disabled={loading}
                    type="submit"
                    className={`w-full md:w-auto px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 group shadow-xl ${
                      status === "success"
                        ? "bg-emerald-600 text-white cursor-default"
                        : "bg-slate-900 text-white hover:bg-blue-600 active:scale-95"
                    }`}
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : status === "success" ? (
                      <>
                        Message Sent <CheckCircle size={16} />
                      </>
                    ) : (
                      <>
                        Send Message{" "}
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <span className="text-red-500 text-xs font-bold uppercase tracking-tight">
                      Submission Failed. Try again later.
                    </span>
                  )}
                </div>
              </form>
            </Animation>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <Animation direction="left" delay={0.3}>
              <div className="space-y-8">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xl font-bold text-slate-900">
                        {item.info}
                      </p>
                      <p className="text-sm text-slate-500 font-medium mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 p-8 rounded-[2.5rem] bg-blue-600 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] rounded-full" />
                <div className="relative z-10">
                  <MessageSquare className="mb-4 opacity-80" size={32} />
                  <h3 className="text-2xl font-black tracking-tighter mb-2">
                    Book a Free Consultation
                  </h3>
                  <p className="text-blue-100 text-sm font-medium mb-6">
                    Let's talk for 30 minutes and discover how we can scale your
                    business.
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                    Schedule Now
                  </button>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
