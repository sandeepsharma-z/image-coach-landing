import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const heroImg = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=90";

const services = [
  "90-Day Corporate Presence Upgrade",
  "60-Day Authority Build System",
  "12-Week Full Transformation",
  "Professional Wardrobe System",
  "On-Camera & Meeting Presence",
  "Personal Brand & Visual Identity",
  "Not sure yet — help me decide",
];

const contactDetails = [
  { icon: Mail,   label: "Email",    value: "nilima@evolvere7.com",              href: "mailto:nilima@evolvere7.com" },
  { icon: Phone,  label: "WhatsApp", value: "+91-9004290666",                     href: "https://wa.me/919004290666" },
  { icon: MapPin, label: "Location", value: "Mumbai · Delhi · Bangalore · Online", href: null },
];

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── HERO — image + overlay + text ── */}
      <section className="relative w-full overflow-hidden h-[88vh] md:h-[92vh] lg:h-[96vh]">
        <div className="absolute inset-0 z-0 bg-black" />
        <img
          src={heroImg}
          alt="Contact Evolvere7"
          className="absolute inset-0 z-0 w-full h-full object-cover grayscale contrast-110"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(0,0,0,0.78)" }} />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="max-w-5xl">
            <p className="text-primary-foreground/85 text-xs tracking-[0.25em] uppercase font-sans mb-4">Let's Begin</p>
            <h1 className="mx-auto max-w-5xl text-4xl md:text-8xl lg:text-[120px] uppercase font-display text-primary-foreground mb-8 tracking-tight leading-none">
              Get in<br />Touch<span className="text-accent">.</span>
            </h1>
            <p className="font-sans font-light text-primary-foreground/50 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
              Applications are reviewed individually. If we are a fit, you will receive a personal discovery call within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact-form" className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground hover:brightness-110 hover:shadow-lg transition-all duration-300">
                <span className="flex items-center gap-2">Apply Now <ArrowUpRight size={13} /></span>
              </a>
              <a href="#map" className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
                <span className="flex items-center gap-2">Find Us <ArrowUpRight size={13} /></span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO + FORM — light background ── */}
      <section id="contact-form" className="bg-[#f5f4f0] px-6 md:px-16 lg:px-28 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24 items-start">

          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50">Reach Out</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6 uppercase">
              Every transformation<br />starts with a<br />conversation<span className="text-accent">.</span>
            </h2>
            <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed mb-12 max-w-sm">
              Fill in the form and we will be in touch within 48 hours. Prefer WhatsApp? Reach us directly — we are happy to chat.
            </p>

            {/* Contact Details */}
            <div className="space-y-7 mb-12">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 border border-foreground/15 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon size={14} className="text-foreground/40 group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-foreground/30 mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-sans text-sm text-foreground/70 hover:text-accent transition-colors duration-300">{value}</a>
                    ) : (
                      <p className="font-sans text-sm text-foreground/70">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-foreground/10 mb-10" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: "120+", label: "Clients" },
                { value: "7+",   label: "Years" },
                { value: "48h",  label: "Response" },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-display text-2xl md:text-3xl text-accent">{s.value}</p>
                  <p className="text-foreground/40 font-sans text-[10px] tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/evolvere7" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-foreground/15 flex items-center justify-center text-foreground/40 hover:border-accent hover:text-accent transition-all duration-300">
                <Instagram size={14} />
              </a>
              <a href="https://www.youtube.com/@NilimaSSethia" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-foreground/15 flex items-center justify-center text-foreground/40 hover:border-accent hover:text-accent transition-all duration-300">
                <Youtube size={14} />
              </a>
              <a href="https://www.facebook.com/evolvere7" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-foreground/15 flex items-center justify-center text-foreground/40 hover:border-accent hover:text-accent transition-all duration-300">
                <Facebook size={14} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-background border border-foreground/8 p-8 md:p-12"
          >
            <div className="h-px bg-accent w-12 mb-8" />
            <h3 className="font-display text-2xl text-foreground mb-1">Apply to Work with Nilima SSethia</h3>
            <p className="font-sans font-light text-muted-foreground text-xs tracking-wide mb-10">
              Or book a free discovery call to ask questions first.
            </p>

            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                {[["firstName","First Name","Jane"], ["lastName","Last Name","Doe"]].map(([k, label, ph]) => (
                  <div key={k}>
                    <label className="text-[10px] tracking-[0.2em] uppercase font-sans text-foreground/40 block mb-2">{label}</label>
                    <input type="text" placeholder={ph} value={form[k as keyof typeof form]} onChange={set(k)}
                      className="w-full bg-secondary/30 border border-foreground/10 text-foreground placeholder:text-foreground/25 font-sans text-sm px-4 py-3.5 outline-none focus:border-accent/50 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase font-sans text-foreground/40 block mb-2">Email</label>
                <input type="email" placeholder="jane@company.com" value={form.email} onChange={set("email")}
                  className="w-full bg-secondary/30 border border-foreground/10 text-foreground placeholder:text-foreground/25 font-sans text-sm px-4 py-3.5 outline-none focus:border-accent/50 transition-colors duration-300" />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase font-sans text-foreground/40 block mb-2">Phone / WhatsApp</label>
                <input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={set("phone")}
                  className="w-full bg-secondary/30 border border-foreground/10 text-foreground placeholder:text-foreground/25 font-sans text-sm px-4 py-3.5 outline-none focus:border-accent/50 transition-colors duration-300" />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase font-sans text-foreground/40 block mb-2">Program of Interest</label>
                <select value={form.service} onChange={set("service")}
                  className="w-full bg-secondary/30 border border-foreground/10 text-foreground font-sans text-sm px-4 py-3.5 outline-none focus:border-accent/50 transition-colors duration-300 cursor-pointer"
                  style={{ color: form.service ? undefined : "rgba(0,0,0,0.3)" }}>
                  <option value="" disabled>Select a program…</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase font-sans text-foreground/40 block mb-2">Tell Me About Your Goals</label>
                <textarea rows={4} placeholder="Where are you now, and where do you want to be?" value={form.message} onChange={set("message")}
                  className="w-full bg-secondary/30 border border-foreground/10 text-foreground placeholder:text-foreground/25 font-sans text-sm px-4 py-3.5 outline-none focus:border-accent/50 transition-colors duration-300 resize-none" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button type="submit"
                  className="flex-1 bg-accent text-accent-foreground py-4 text-xs tracking-[0.2em] uppercase font-sans hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2">
                  Apply to Work with Me <ArrowUpRight size={13} />
                </button>
                <button type="button"
                  className="flex-1 border border-foreground/20 text-foreground py-4 text-xs tracking-[0.2em] uppercase font-sans hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Discovery Call <ArrowUpRight size={13} />
                </button>
              </div>

              <p className="text-[10px] text-foreground/25 font-sans tracking-wide text-center pt-1">
                Your information is private and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section id="map" className="bg-[#f5f4f0] px-6 md:px-16 lg:px-28 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50">Find Us</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground uppercase">Our Locations</h2>
        </motion.div>

        {/* Location tags */}
        <div className="flex flex-wrap gap-4 mb-8">
          {["Mumbai", "Delhi", "Bangalore", "Online — Worldwide"].map(city => (
            <span key={city} className="inline-flex items-center gap-2 border border-foreground/15 px-4 py-2 text-xs tracking-[0.15em] uppercase font-sans text-foreground/60">
              <MapPin size={10} className="text-accent" /> {city}
            </span>
          ))}
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="overflow-hidden border border-foreground/10"
          style={{ filter: "grayscale(0.3) contrast(1.05)" }}
        >
          <iframe
            title="Evolvere7 Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823058!2d72.74110193817748!3d19.08257565789946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713960000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
