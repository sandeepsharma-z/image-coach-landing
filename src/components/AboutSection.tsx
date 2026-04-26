import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Users, Award, ArrowUpRight } from "lucide-react";
import stylistImg from "@/assets/evolvere7-portrait.jpg";

const highlights = [
  { icon: CheckCircle2, text: "Image consulting for corporate women ready for the next level" },
  { icon: Users,        text: "Personal brand strategy for female founders attracting premium clients" },
  { icon: Sparkles,     text: "Presence coaching that makes you impossible to overlook" },
  { icon: Award,        text: "90-day programs built around your specific role and goals" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary/40 relative overflow-hidden">

    {/* Yellow glow orbs — animated */}
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.45, 0.65, 0.45] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, #f3e200 0%, transparent 65%)", width: 320, height: 320, top: -120, right: -120 }}
    />

    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

      {/* ── LEFT — Image ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="overflow-hidden rounded-sm">
          <img
            src={stylistImg}
            alt="Image Coach"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/40" />
        <div className="absolute -top-4 -left-4 w-16 h-16 border border-accent/20" />

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 left-6 px-5 py-3 rounded-sm"
          style={{ background: "#f3e200", boxShadow: "0 8px 30px rgba(243,226,0,0.35)" }}
        >
          <p className="font-display text-2xl text-foreground leading-none font-bold">500+</p>
          <p className="text-xs font-sans text-foreground/70 mt-0.5 tracking-wider uppercase">Clients Transformed</p>
        </motion.div>
      </motion.div>

      {/* ── RIGHT — Content ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 block">
          The Visionary
        </span>

        <h2 className="font-display text-3xl md:text-5xl leading-tight text-foreground">
          You have put in the work.
          <br />
          <span className="gold-underline">It is time your presence reflects it.</span>
        </h2>

        <p className="text-muted-foreground font-sans font-light leading-relaxed text-base lg:text-lg max-w-2xl">
          I help corporate women and female founders align image, presence, and personal brand so they are seen, trusted, and valued at the level they have earned.
        </p>

        <div className="grid grid-cols-1 gap-3 pt-2">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center transition-colors duration-300">
                <item.icon size={15} style={{ color: "#111" }} strokeWidth={1.8} />
              </div>
              <span className="text-sm font-sans text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        <a
          href="/about"
          className="btn-slide-hover inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans border-b border-accent text-foreground px-6 py-2.5 mt-2 transition-colors duration-300"
        >
          About Nilima <ArrowUpRight size={13} />
        </a>
      </motion.div>

    </div>
  </section>
);

export default AboutSection;
