import { Instagram, Facebook, Youtube, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
    {/* Subtle background glow */}
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(243,226,0,0.04) 0%, transparent 70%)" }}
    />

    {/* Top accent line */}
    <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

    {/* Main footer content */}
    <div className="w-full px-6 md:px-16 lg:px-28 pt-16 pb-10 relative z-10">

      {/* Big brand statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-b border-white/8 pb-12 mb-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-primary-foreground leading-none mb-3">
              Evolvere7<span className="text-accent">.</span>
            </h2>
            <p className="text-primary-foreground/40 font-sans font-light text-sm max-w-xs">
              Image and personal brand consulting for high-value women who are done being overlooked.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-xs tracking-[0.2em] uppercase font-sans hover:brightness-110 transition-all duration-300 self-start md:self-auto"
          >
            Book a Consultation <ArrowUpRight size={13} />
          </a>
        </div>
      </motion.div>

      {/* Links grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

        {/* Quick Links */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase font-sans mb-5 text-primary-foreground/50">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {["About", "Services", "Transformations", "Blog", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-primary-foreground/40 hover:text-accent font-sans text-sm transition-colors duration-300 flex items-center gap-1.5 group w-fit"
              >
                <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase font-sans mb-5 text-primary-foreground/50">
            Services
          </h4>
          <div className="flex flex-col gap-3">
            {["90-Day Corporate Upgrade", "60-Day Authority Build", "12-Week Full Experience", "Wardrobe System", "Personal Brand Strategy"].map((s) => (
              <a
                key={s}
                href="#services"
                className="text-primary-foreground/40 hover:text-accent font-sans text-sm transition-colors duration-300 flex items-center gap-1.5 group w-fit"
              >
                <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase font-sans mb-5 text-primary-foreground/50">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            <a href="mailto:nilima@evolvere7.com" className="flex items-start gap-3 text-primary-foreground/40 hover:text-accent font-sans text-sm transition-colors duration-300 group">
              <Mail size={14} className="mt-0.5 shrink-0 group-hover:text-accent" strokeWidth={1.5} />
              nilima@evolvere7.com
            </a>
            <a href="https://wa.me/919004290666" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-primary-foreground/40 hover:text-accent font-sans text-sm transition-colors duration-300 group">
              <Phone size={14} className="mt-0.5 shrink-0 group-hover:text-accent" strokeWidth={1.5} />
              +91-9004290666
            </a>
            <div className="flex items-start gap-3 text-primary-foreground/40 font-sans text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0" strokeWidth={1.5} />
              Mumbai · Delhi · Bangalore
            </div>
          </div>
        </div>

        {/* Follow */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase font-sans mb-5 text-primary-foreground/50">
            Follow Us
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { icon: Instagram, label: "Instagram",  href: "https://www.instagram.com/evolvere7" },
              { icon: Youtube,   label: "YouTube",    href: "https://www.youtube.com/@NilimaSSethia" },
              { icon: Facebook,  label: "Facebook",   href: "https://www.facebook.com/evolvere7" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/40 hover:text-accent font-sans text-sm transition-colors duration-300 group w-fit"
              >
                <Icon size={14} strokeWidth={1.5} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/25 font-sans text-xs tracking-wider">
          © 2026 Evolvere7. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-primary-foreground/25 hover:text-accent font-sans text-xs tracking-wider transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
