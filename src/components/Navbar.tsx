import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "90-Day Corporate Presence Upgrade", href: "/services/corporate-presence" },
  { label: "60-Day Authority Build System",     href: "/services/authority-build" },
  { label: "12-Week Full Transformation",       href: "/services/full-transformation" },
  { label: "Professional Wardrobe System",      href: "/services/wardrobe-system" },
  { label: "On-Camera & Meeting Presence",      href: "/services/on-camera-presence" },
  { label: "Personal Brand & Visual Identity",  href: "/services/personal-brand" },
];

const Navbar = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled
    ? "text-foreground/70 hover:text-foreground"
    : "text-primary-foreground/80 hover:text-primary-foreground";

  const linkHref = (link: string) => {
    if (link === "Home") return "/";
    if (link === "About") return "/about";
    if (link === "Contact") return "/contact";
    if (link === "Transformations") return "/transformations";
    return `/#${link.toLowerCase()}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 md:px-16 lg:px-28 py-4">
        {/* Logo */}
        <a href="/" className="font-display text-xl md:text-2xl tracking-wider">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            Evolvere7
          </span>
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">

          {/* Home */}
          <a href="/" className={`text-xs tracking-[0.2em] uppercase font-sans font-light transition-colors duration-300 gold-underline ${textColor}`}>
            Home
          </a>

          {/* About */}
          <a href="/about" className={`text-xs tracking-[0.2em] uppercase font-sans font-light transition-colors duration-300 gold-underline ${textColor}`}>
            About
          </a>

          {/* Services — with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-xs tracking-[0.2em] uppercase font-sans font-light transition-colors duration-300 ${textColor}`}
            >
              Services
              <ChevronDown
                size={12}
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="bg-background border border-border shadow-xl z-50"
                  style={{ position: "fixed", top: "64px", left: "50%", transform: "translateX(-50%)", width: "20rem", whiteSpace: "nowrap" }}
                >
                  {/* Top gold line */}
                  <div className="h-px bg-accent w-full" />

                  <div className="py-2">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between px-5 py-3 text-[11px] tracking-[0.12em] uppercase font-sans text-foreground/60 hover:text-accent hover:bg-accent/5 transition-all duration-200 group"
                      >
                        {s.label}
                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <div className="border-t border-border p-3">
                    <a
                      href="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground py-2.5 text-[10px] tracking-[0.2em] uppercase font-sans hover:brightness-110 transition-all duration-300"
                    >
                      Apply Now <ArrowUpRight size={11} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other links */}
          {["Transformations", "Contact"].map((link) => (
            <a
              key={link}
              href={linkHref(link)}
              className={`text-xs tracking-[0.2em] uppercase font-sans font-light transition-colors duration-300 gold-underline ${textColor}`}
            >
              {link}
            </a>
          ))}

          <a
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground px-6 py-2.5 hover:brightness-110 transition-all duration-300"
          >
            <span className="flex items-center gap-1.5">Book Now <ArrowUpRight size={13} /></span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-5 py-8 px-6">
              <a href="/" onClick={() => setMobileOpen(false)} className="text-xs tracking-[0.2em] uppercase font-sans text-foreground/70 hover:text-foreground transition-colors">Home</a>
              <a href="/about" onClick={() => setMobileOpen(false)} className="text-xs tracking-[0.2em] uppercase font-sans text-foreground/70 hover:text-foreground transition-colors">About</a>

              {/* Mobile Services accordion */}
              <div className="w-full flex flex-col items-center gap-0">
                <button
                  onClick={() => setMobileServicesOpen(o => !o)}
                  className="flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase font-sans text-foreground/70 hover:text-foreground transition-colors"
                >
                  Services
                  <ChevronDown size={12} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="w-full mt-3 border border-border overflow-hidden"
                    >
                      {serviceLinks.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                          className="block px-4 py-3 text-[10px] tracking-[0.12em] uppercase font-sans text-foreground/60 hover:text-accent border-b border-border last:border-0 transition-colors"
                        >
                          {s.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {["Transformations", "Contact"].map((link) => (
                <a key={link} href={linkHref(link)} onClick={() => setMobileOpen(false)} className="text-xs tracking-[0.2em] uppercase font-sans text-foreground/70 hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}

              <a href="/contact" onClick={() => setMobileOpen(false)} className="text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground px-8 py-3">
                <span className="flex items-center gap-1.5">Book Now <ArrowUpRight size={13} /></span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
