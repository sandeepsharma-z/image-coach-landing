import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import stylistImg from "@/assets/evolvere7-portrait.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

/* ─── Timeline milestones ─── */
const milestones = [
  {
    year: "2008",
    title: "The Beginning",
    body: "Started her career in corporate India, quickly realising that perception shaped opportunity long before performance ever did.",
  },
  {
    year: "2013",
    title: "The Shift",
    body: "Left a senior management role to answer one question: why do equally skilled women keep being passed over? The research that followed became the foundation of every program.",
  },
  {
    year: "2017",
    title: "Evolvere7 Founded",
    body: "Launched what would become India's most results-driven image and personal brand consultancy for high-value women — corporate leaders and female founders.",
  },
  {
    year: "2021",
    title: "500+ Transformed",
    body: "Passed 500 client transformations across sectors — finance, tech, law, and entrepreneurship. Every woman left commanding rooms she used to shrink in.",
  },
  {
    year: "2024",
    title: "The Signature System",
    body: "Codified the 90-Day Presence Architecture — a proprietary method combining image science, brand strategy, and executive communication into one complete transformation.",
  },
];

/* ─── Philosophy tiles ─── */
const pillars = [
  {
    num: "01",
    title: "Image Is Strategy",
    body: "Your appearance communicates before you speak. Every choice — deliberate or not — is a signal. The women I work with learn to make that signal intentional.",
  },
  {
    num: "02",
    title: "Presence Is Earned Daily",
    body: "Confidence is not a trait. It is a practice built through consistent, aligned action. My programs build the rituals that make powerful presence automatic.",
  },
  {
    num: "03",
    title: "Premium Is a Position",
    body: "Being seen as premium has nothing to do with price and everything to do with how you show up — in every room, every frame, every conversation.",
  },
  {
    num: "04",
    title: "Your Brand Is Always On",
    body: "From the way you dress to how you speak in a meeting to what your LinkedIn photo says — every touchpoint either builds authority or dilutes it.",
  },
  {
    num: "05",
    title: "Transformation Is Specific",
    body: "There are no templates here. Every program is built around your role, your goals, the rooms you are walking into, and the woman you are becoming.",
  },
  {
    num: "06",
    title: "Results Over Theory",
    body: "Promotions. Premium clients. Board-level confidence. My work is measured in outcomes — not aesthetic upgrades.",
  },
];

/* ─── Who I Am slider — reference layout ─── */
// Each pair: [portrait image] [big-number + title + body] side by side
const whoItems = [
  {
    num: "01",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    title: "Image Consultant",
    body: "I decode how others perceive you and rebuild that perception deliberately — wardrobe, body language, and digital presence.",
  },
  {
    num: "02",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80",
    title: "Presence Architect",
    body: "I design how you show up in boardrooms, on camera, on stage. Presence is not a personality trait. It is a system.",
  },
  {
    num: "03",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
    title: "Brand Strategist",
    body: "Your LinkedIn, your photos, your bio — every touchpoint is a signal. I make sure every signal says exactly what it should.",
  },
  {
    num: "04",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",
    title: "Corporate Mentor",
    body: "I understand what it takes to be taken seriously inside corporate structures — and what quietly holds brilliant women back.",
  },
  {
    num: "05",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80",
    title: "Storyteller",
    body: "Every woman I work with has a story worth telling. My job is helping her tell it through how she looks, moves, and speaks.",
  },
  {
    num: "06",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    title: "Your Next Chapter",
    body: "500+ women have walked out of my programs impossible to overlook. You could be next. The room is already waiting.",
  },
];

// Triple-duplicate for seamless infinite loop
const whoTrack = [...whoItems, ...whoItems, ...whoItems];
const TOTAL = whoItems.length;

const WhoIAmSlider = () => {
  const [index, setIndex] = useState(TOTAL);          // start in middle copy
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);

  const slideTo = useCallback((next: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex(next);
    setTimeout(() => setTransitioning(false), 520);
  }, [transitioning]);

  // Reset to middle copy seamlessly after transition
  useEffect(() => {
    if (!transitioning) {
      setIndex(prev => {
        if (prev >= TOTAL * 2) return prev - TOTAL;
        if (prev < TOTAL)      return prev + TOTAL;
        return prev;
      });
    }
  }, [transitioning]);

  // Auto-advance every 3s
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => slideTo(index + 1), 3000);
    return () => clearInterval(t);
  }, [index, paused, slideTo]);

  const activeDot = ((index % TOTAL) + TOTAL) % TOTAL;

  // Each pair = 2 flex-items (img block + text block)
  // On desktop show 3 pairs = 6 blocks. trackWidth relative to container.
  const pairWidthPct = 100 / 3;          // 3 pairs visible on desktop
  const blockWidthPct = pairWidthPct / 2; // each block = half a pair
  const trackWidthPct = (whoTrack.length / 3) * 100; // total track width %
  const translateX = -(index * blockWidthPct * 2); // advance by one pair per step

  return (
    <section className="bg-[#f0ede8] py-20 md:py-28 overflow-hidden relative">

      {/* Header */}
      <div className="px-6 md:px-16 lg:px-28 mb-10 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 mb-4 block">About Nilima SSethia</span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">Things That I Am</h2>
        </motion.div>
        {/* Arrow right */}
        <button
          onClick={() => slideTo(index + 1)}
          className="w-9 h-9 border border-foreground/20 flex items-center justify-center text-foreground/40 hover:border-accent hover:text-accent transition-all duration-300"
        >
          →
        </button>
      </div>

      {/* Track */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex"
          style={{
            width: `${trackWidthPct}%`,
            transform: `translateX(${translateX / (whoTrack.length / 3)}%)`,
            transition: transitioning ? "transform 0.52s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        >
          {whoTrack.map((item, i) => (
            <div key={i} className="flex group cursor-default" style={{ width: `${100 / whoTrack.length}%` }}>
              {/* LEFT — Portrait image */}
              <div className="w-1/2 overflow-hidden relative" style={{ aspectRatio: "3/4" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.05] group-hover:scale-100 transition-all duration-700"
                />
              </div>

              {/* RIGHT — Number + title + body */}
              <div className="w-1/2 flex flex-col justify-center px-6 md:px-8 py-6">
                <span className="font-display text-6xl md:text-8xl text-foreground/10 leading-none select-none mb-2">
                  {item.num}
                </span>
                <h3 className="font-sans font-bold text-xs md:text-sm tracking-[0.12em] uppercase text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-foreground/55 text-xs md:text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {whoItems.map((_, i) => (
          <button
            key={i}
            onClick={() => slideTo(TOTAL + i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeDot ? "w-8 bg-accent" : "w-2 bg-foreground/20"}`}
          />
        ))}
      </div>
    </section>
  );
};

/* ─── Stats ─── */
const stats = [
  { value: "500+", label: "Women Transformed" },
  { value: "15+", label: "Years Experience" },
  { value: "3", label: "Signature Programs" },
  { value: "97%", label: "Report Career Impact" },
];

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ════════════════════════════════════════════
          HERO — full-width cinematic (Kelly Lundberg style)
      ════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ height: "92vh", minHeight: "580px" }}>
        {/* Background image — full bleed, grayscale */}
        <img
          src={stylistImg}
          alt="Nilima SSethia — Image and Presence Coach"
          className="absolute inset-0 w-full h-full object-cover object-top grayscale"
        />

        {/* Dark overlay — gradient, heavier at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.78) 100%)",
          }}
        />

        {/* Bottom-left: ABOUT label + BIG NAME stacked */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-16 lg:px-28 pb-10 md:pb-12 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-1"
          >
            <p className="text-[14px] tracking-[0.3em] uppercase font-sans text-white/60 leading-none mb-3">
              About
            </p>
            <h1
              className="font-display text-white leading-none uppercase"
              style={{ fontSize: "80px", letterSpacing: "-0.02em" }}
            >
              Nilima SSethia
            </h1>
          </motion.div>

          {/* Bottom-right: FOLLOW + icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            className="flex flex-col items-end gap-3 pb-2"
          >
            <span className="text-[10px] tracking-[0.35em] uppercase font-sans text-white/50">
              Follow
            </span>
            <div className="flex items-center gap-3 md:gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/evolvere7" },
                { Icon: Youtube,   href: "https://www.youtube.com/@NilimaSSethia" },
                { Icon: Facebook,  href: "https://www.facebook.com/evolvere7" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-accent hover:text-accent transition-all duration-300"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Thin gold bottom accent line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px] z-30"
          style={{ background: "linear-gradient(to right, #f3e200 0%, transparent 60%)" }}
        />
      </section>

      {/* ════════════════════════════════════════════
          MISSION SECTION
      ════════════════════════════════════════════ */}
      <section className="bg-foreground px-6 md:px-16 lg:px-28 py-20 md:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase font-sans text-primary-foreground/50 mb-8"
          >
            Hi, I'm Nilima SSethia!
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-[56px] text-primary-foreground leading-tight mb-10"
          >
            My mission is to help every woman{" "}
            <span
              className="highlight-rise"
            >
              own her presence
            </span>{" "}
            and command every room she walks into.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-primary-foreground/55 text-base leading-relaxed mb-10"
          >
            Image Consultant. Personal Brand Strategist. Presence Coach. Founder of Evolvere7 — dedicated to helping corporate women and female founders align how they look, how they show up, and how they are perceived, so that their outer world finally matches the authority they have already earned.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans hover:brightness-110 transition-all duration-300"
          >
            Get in Touch <ArrowUpRight size={13} />
          </motion.a>
        </div>

        {/* ── AS SEEN ON marquee ── */}
        <div className="mt-20 md:mt-28 border-t border-white/8 pt-10">
          <div className="flex items-center gap-10 md:gap-16 overflow-hidden">
            {/* Label */}
            <p className="flex-shrink-0 text-[10px] tracking-[0.3em] uppercase font-sans text-primary-foreground/35 whitespace-nowrap">
              As Seen On
            </p>

            {/* Marquee track — two identical rows for seamless loop */}
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #0f0f0f, transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #0f0f0f, transparent)" }} />

              <div className="flex items-center whitespace-nowrap">
                {/* First copy */}
                <div className="flex items-center gap-16 animate-marquee-loop shrink-0">
                  {["Forbes", "TED×", "HuffPost", "Entrepreneur", "Vogue India", "The Hindu", "Economic Times", "LinkedIn News"].map((name, i) => (
                    <span key={i} className="text-primary-foreground/60 font-display text-lg md:text-xl tracking-wide hover:text-primary-foreground transition-colors duration-300 cursor-default select-none">
                      {name}
                    </span>
                  ))}
                </div>
                {/* Second copy — seamless continuation */}
                <div className="flex items-center gap-16 animate-marquee-loop shrink-0" aria-hidden="true">
                  {["Forbes", "TED×", "HuffPost", "Entrepreneur", "Vogue India", "The Hindu", "Economic Times", "LinkedIn News"].map((name, i) => (
                    <span key={i} className="text-primary-foreground/60 font-display text-lg md:text-xl tracking-wide hover:text-primary-foreground transition-colors duration-300 cursor-default select-none">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════ */}
      <div ref={statsRef} className="bg-foreground border-y border-white/5">
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center md:border-r md:last:border-r-0 border-white/8"
            >
              <span className="font-display text-4xl md:text-5xl text-accent leading-none">
                {s.value}
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-primary-foreground/40 mt-2">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════
          STORY SECTION
      ════════════════════════════════════════════ */}
      <section className="bg-background px-6 md:px-16 lg:px-28 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        {/* Yellow glow bubble — top right, same as homepage About section */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.45, 0.65, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #f3e200 0%, transparent 65%)", width: 320, height: 320, top: -120, right: -120 }}
        />

        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-24 items-start relative z-10">
          {/* Sticky label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[10px] tracking-[0.35em] uppercase font-sans text-foreground/50">Her Story</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Why I do<br />this work.
            </h2>
            <div className="mt-8 w-16 h-px bg-accent/40" />
          </motion.div>

          {/* Story paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-7"
          >
            {[
              "I spent years watching brilliant, hardworking women get passed over — for promotions, clients, speaking opportunities, board seats. Not because they lacked the skill. Because they were invisible in the rooms that mattered.",
              "I was one of them. Despite a decade of corporate experience, I kept shrinking. Dressing to blend in. Speaking to be polite rather than to be heard. I had no idea that my image and presence were actively working against me.",
              "When I finally understood the mechanics of perception — how the brain reads authority, trustworthiness, and premium in under seven seconds — everything changed. I stopped dressing for comfort and started dressing for impact. I rebuilt my presence from the ground up.",
              "Within six months, I had the promotion I had been working toward for three years. Clients started reaching out instead of being chased. I was asked to speak at events I had previously attended as an audience member.",
              "That transformation became Evolvere7. Not a styling service. Not a confidence workshop. A complete presence architecture for women who have done the inner work and are ready for the world to see it.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={`font-sans font-light leading-relaxed ${
                  i === 0
                    ? "text-lg md:text-xl text-foreground/80"
                    : "text-base text-muted-foreground"
                }`}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHO I AM — card slider, auto 3s
      ════════════════════════════════════════════ */}
      <WhoIAmSlider />

      {/* ════════════════════════════════════════════
          TIMELINE — dark creative
      ════════════════════════════════════════════ */}
      <section className="bg-foreground px-6 md:px-16 lg:px-28 py-24 md:py-32 relative overflow-hidden">

        {/* Ambient gold glow */}
        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute pointer-events-none inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #f3e200 0%, transparent 60%)" }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 relative z-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-primary-foreground/50">The Journey</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground leading-tight">
            How we got here.
          </h2>
        </motion.div>

        {/* Alternating milestone cards */}
        <div className="relative z-10 flex flex-col gap-0">
          {milestones.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group grid md:grid-cols-2 border-b border-white/6 last:border-0"
              >
                {/* Year block */}
                <div
                  className={`relative flex items-center py-12 md:py-16 ${isEven ? "md:order-1 md:pr-16 md:justify-end" : "md:order-2 md:pl-16 md:justify-start"}`}
                >
                  {/* Giant faded year */}
                  <span
                    className="absolute font-display text-[100px] md:text-[140px] leading-none text-white/[0.04] select-none pointer-events-none"
                    style={{ top: "50%", transform: "translateY(-50%)", [isEven ? "right" : "left"]: "-10px" }}
                  >
                    {m.year}
                  </span>

                  {/* Gold year badge */}
                  <div className="relative z-10 text-center md:text-right">
                    <span className="inline-block font-display text-4xl md:text-5xl text-accent leading-none">
                      {m.year}
                    </span>
                    <div className={`mt-3 h-px w-16 bg-accent/40 group-hover:bg-accent group-hover:w-24 transition-all duration-500 ${isEven ? "ml-auto" : ""}`} />
                  </div>
                </div>

                {/* Content block */}
                <div
                  className={`flex items-center py-12 md:py-16 ${isEven ? "md:order-2 md:pl-16 border-l border-white/6" : "md:order-1 md:pr-16 border-r border-white/6"}`}
                >
                  <div>
                    <h3 className="font-display text-xl md:text-2xl text-primary-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {m.title}
                    </h3>
                    <p className="font-sans font-light text-primary-foreground/45 text-sm leading-relaxed max-w-md group-hover:text-primary-foreground/65 transition-colors duration-300">
                      {m.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PHILOSOPHY — light, editorial, last section
      ════════════════════════════════════════════ */}
      <section className="bg-background px-6 md:px-16 lg:px-28 py-24 md:py-32 relative overflow-hidden">

        {/* Subtle gold orb bottom-left */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #f3e200 0%, transparent 65%)", width: 400, height: 400, bottom: -150, left: -150 }}
        />

        <div className="relative z-10">

          {/* Header — two-col */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 border-b border-border pb-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50">What I Stand For</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                The six beliefs that drive<br className="hidden md:block" /> every transformation.
              </h2>
            </div>
            <p className="font-sans font-light text-muted-foreground text-sm max-w-xs leading-relaxed md:text-right">
              These are not motivational quotes. They are the operating principles behind every program I run.
            </p>
          </motion.div>

          {/* Asymmetric grid: row 1 = 2+1, row 2 = 1+2 */}
          <div className="grid md:grid-cols-3 gap-px bg-border">

            {/* Row 1 */}
            {/* Wide card — 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group md:col-span-2 bg-background p-8 md:p-12 flex flex-col justify-between min-h-[280px] hover:bg-accent/5 transition-colors duration-500 cursor-default"
            >
              <span className="font-display text-[80px] md:text-[100px] leading-none text-foreground/6 select-none">{pillars[0].num}</span>
              <div>
                <div className="w-8 h-px bg-accent mb-5 group-hover:w-20 transition-all duration-500" />
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{pillars[0].title}</h3>
                <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed max-w-lg">{pillars[0].body}</p>
              </div>
            </motion.div>

            {/* Narrow card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[280px] hover:bg-accent/5 transition-colors duration-500 cursor-default"
            >
              <span className="font-display text-[80px] md:text-[100px] leading-none text-foreground/6 select-none">{pillars[1].num}</span>
              <div>
                <div className="w-8 h-px bg-accent mb-5 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{pillars[1].title}</h3>
                <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">{pillars[1].body}</p>
              </div>
            </motion.div>

            {/* Row 2 */}
            {/* Narrow card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[280px] hover:bg-accent/5 transition-colors duration-500 cursor-default"
            >
              <span className="font-display text-[80px] md:text-[100px] leading-none text-foreground/6 select-none">{pillars[2].num}</span>
              <div>
                <div className="w-8 h-px bg-accent mb-5 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{pillars[2].title}</h3>
                <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">{pillars[2].body}</p>
              </div>
            </motion.div>

            {/* Wide card — 2 cols, accent bg on hover fills gold */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="group md:col-span-2 bg-background p-8 md:p-12 flex flex-col justify-between min-h-[280px] hover:bg-accent/5 transition-colors duration-500 cursor-default"
            >
              <span className="font-display text-[80px] md:text-[100px] leading-none text-foreground/6 select-none">{pillars[3].num}</span>
              <div>
                <div className="w-8 h-px bg-accent mb-5 group-hover:w-20 transition-all duration-500" />
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{pillars[3].title}</h3>
                <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed max-w-lg">{pillars[3].body}</p>
              </div>
            </motion.div>

            {/* Row 3 — 3 equal */}
            {[pillars[4], pillars[5]].map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[240px] hover:bg-accent/5 transition-colors duration-500 cursor-default"
              >
                <span className="font-display text-[80px] md:text-[100px] leading-none text-foreground/6 select-none">{p.num}</span>
                <div>
                  <div className="w-8 h-px bg-accent mb-5 group-hover:w-16 transition-all duration-500" />
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{p.title}</h3>
                  <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}

            {/* Last wide accent card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              className="group bg-foreground p-8 md:p-10 flex flex-col justify-center min-h-[240px] cursor-default"
            >
              <p className="font-display text-xl md:text-2xl text-primary-foreground leading-snug mb-6">
                "You have already done the work.<br />Now let the world see it."
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-xs tracking-[0.2em] uppercase font-sans hover:brightness-110 transition-all duration-300 self-start">
                Apply Now <ArrowUpRight size={12} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
