import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import Animation from "../../Components/shared/Animation";

const ContactPage = () => {
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
      info: "+880 1234 567890",
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
      {/* Hero Header */}
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
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7">
            <Animation direction="right" delay={0.2}>
              <form className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Shams Al Labib"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="shams@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Subject
                  </label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium appearance-none">
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
                    rows="5"
                    placeholder="Tell us about your project goals..."
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>
                <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/10">
                  Send Message{" "}
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </Animation>
          </div>

          {/* Right Side: Details & CTA */}
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

              {/* Consultation CTA Block */}
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

      {/* Embedded Map Section */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <Animation direction="up">
          <div className="w-full h-[450px] rounded-[3rem] overflow-hidden grayscale contrast-125 border-8 border-slate-50 shadow-inner">
            <iframe
              title="office-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.42858102375!2d89.2205562!3d25.7466384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f14966601f7063%3A0x6442654c609c1328!2sRangpur!5e0!3m2!1sen!2sbd!4v1712570000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Animation>
      </section>
    </div>
  );
};

export default ContactPage;
