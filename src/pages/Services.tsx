import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, Users, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import TestimonialsSection from "@/components/TestimonialsSection";
import JoinTribeSection from "@/components/JoinTribeSection";
import heroImg from "@/assets/service-corporate.jpg";
import mentorImg from "@/assets/evolvere7-portrait.jpg";
import step1Img from "@/assets/step-1.jpg";
import step2Img from "@/assets/step-2.jpg";
import step3Img from "@/assets/step-3.jpg";
import step4Img from "@/assets/step-4.jpg";

/* ── What's included ── */
const included = [
  "Full image audit — wardrobe, body language, digital presence",
  "Capsule wardrobe architecture for your specific role and goals",
  "3× one-on-one presence coaching sessions",
  "Meeting and boardroom body language system",
  "Vocal authority and communication framework",
  "LinkedIn profile and photo direction review",
  "On-camera presence for video calls and recordings",
  "Weekly accountability check-ins throughout 90 days",
  "Emergency style consults (WhatsApp access)",
  "Post-program follow-up session at 30 days",
];

/* ── Who it's for ── */
const forWho = [
  { title: "The Overlooked Expert", body: "You have the experience, the results, the track record — but you keep watching less qualified people get the promotion, the stage, the recognition." },
  { title: "The Stuck Senior", body: "You are in a mid-to-senior role and you feel like you have hit an invisible ceiling. You know it is not your skills. Something else is holding you back." },
  { title: "The Returning Professional", body: "You took a break — maternity leave, career pivot, sabbatical — and you are re-entering a room that has moved on. You need to re-establish your authority fast." },
  { title: "The Underpaid Achiever", body: "You are consistently doing the work of someone two levels above you, but being compensated as though you are two levels below. It is time to change the perception." },
];

/* ── How It Works ── */
const steps = [
  {
    num: "01",
    title: "Audit your current image",
    body: "We look at how you are currently showing up — online, in person, on camera. Where are the gaps between how you see yourself and how others see you? This honest assessment is where every transformation begins.",
    cta: "Start Here",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90",
  },
  {
    num: "02",
    title: "Build your presence strategy",
    body: "Based on your audit, we architect your complete presence system — wardrobe, body language, vocal authority, and digital identity — all designed around your specific role, goals, and the rooms you are walking into.",
    cta: "See the Strategy",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=90",
  },
  {
    num: "03",
    title: "Execute and elevate",
    body: "Over 90 days, you implement the system with weekly coaching, real-time feedback, and accountability check-ins. You will feel the shift in meetings, on camera, and in how people respond to you — within weeks.",
    cta: "Begin the Shift",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=90",
  },
  {
    num: "04",
    title: "Own your presence for life",
    body: "By the end, your image is no longer something you think about — it is something you own. You walk into every room knowing exactly who you are, how you are perceived, and how to command the space.",
    cta: "Apply Now",
    img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=90",
  },
];

/* ── FAQ ── */
const faqs = [
  { q: "Is this program done in person or online?", a: "The program is delivered primarily online via video sessions, which means it works for women across India and globally. In-person options are available in Mumbai, Delhi, and Bangalore." },
  { q: "What if I already have a good wardrobe?", a: "The program is not about shopping. It is about strategy. Most clients discover that they already own pieces they have been underusing — or pairing incorrectly for their goals." },
  { q: "How much time does this require each week?", a: "Expect to invest 2–3 hours per week — one session plus implementation. The changes compound quickly, and most clients notice external responses within the first few weeks." },
  { q: "Is there a payment plan available?", a: "Yes. The investment can be split into two or three instalments. We discuss this during your discovery call." },
  { q: "What results can I realistically expect?", a: "Most clients report measurable changes within 4–6 weeks — feedback from managers, more presence in meetings, increased confidence in high-stakes situations. Long-term outcomes include promotions, salary increases, and expanded influence." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-sans font-light text-sm md:text-base text-foreground group-hover:text-accent transition-colors duration-300">{q}</span>
        <ChevronDown size={16} className={`flex-shrink-0 text-foreground/40 transition-transform duration-300 ${open ? "rotate-180 text-accent" : ""}`} />
      </button>
      <AnimateHeight open={open}>
        <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
      </AnimateHeight>
    </div>
  );
};

const AnimateHeight = ({ open, children }: { open: boolean; children: React.ReactNode }) => (
  <motion.div
    initial={false}
    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="overflow-hidden"
  >
    {children}
  </motion.div>
);

const Services = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* ── HERO ── */}
    <section className="relative w-full overflow-hidden h-[88vh] md:h-[92vh] lg:h-[96vh]">
      <div className="absolute inset-0 z-0 bg-black" />
      <img
        src={heroImg}
        alt="Corporate presence hero"
        className="absolute inset-0 z-0 w-full h-full object-cover grayscale contrast-110"
        style={{ objectPosition: "center 30%" }}
      />
      <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(0,0,0,0.78)" }} />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="text-primary-foreground/85 text-xs tracking-[0.25em] uppercase font-sans mb-4">
            90-Day Program
          </p>
          <h1 className="mx-auto max-w-5xl text-4xl md:text-8xl lg:text-[120px] uppercase font-display text-primary-foreground mb-8 tracking-tight leading-none">
            Corporate<br />Presence<br />Upgrade<span className="text-accent">.</span>
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground hover:brightness-110 hover:shadow-lg transition-all duration-300">
              <span className="flex items-center gap-2">Book a Discovery Call <ArrowUpRight size={13} /></span>
            </a>
            <a href="/#transformations" className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
              <span className="flex items-center gap-2">Take the Presence Quiz <ArrowUpRight size={13} /></span>
            </a>
          </div>
        </motion.div>
      </div>

    </section>

    {/* ── WHO IT'S FOR ── */}
    <section className="bg-background px-6 md:px-16 lg:px-28 py-24 md:py-32 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #f3e200 0%, transparent 65%)", width: 400, height: 400, top: -150, right: -150 }}
      />

      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50">Is This You?</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            This program was built for you if…
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {forWho.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background p-8 md:p-10 hover:bg-accent/5 transition-colors duration-400 cursor-default"
            >
              <div className="w-8 h-px bg-accent mb-5 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
              <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOW IT WORKS ── */}
    <section style={{ background: "#0d0d0d" }}>
      {steps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group grid md:grid-cols-2 border-t cursor-default transition-all duration-500"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#f3e200")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          {/* LEFT — Content */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/30 group-hover:text-black/40 mb-4 transition-colors duration-300">{step.num}</p>
            <h3 className="font-display text-2xl md:text-4xl lg:text-5xl text-white group-hover:text-black leading-tight mb-6 uppercase transition-colors duration-300">{step.title}</h3>
            <p className="font-sans font-light text-white/50 group-hover:text-black/65 text-sm md:text-base leading-relaxed mb-10 max-w-md transition-colors duration-300">{step.body}</p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-white/40 border-b border-white/20 pb-1 w-fit group-hover:text-black group-hover:border-black/40 transition-all duration-300"
            >
              {step.cta} <ArrowUpRight size={12} />
            </a>
          </div>

          {/* RIGHT — Image */}
          <div className="overflow-hidden flex items-end justify-center" style={{ background: "#0d0d0d" }}>
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-[360px] md:h-[520px] object-cover object-top transition-all duration-700"
              style={{ mixBlendMode: "screen", filter: "grayscale(1) contrast(1.1)" }}
            />
          </div>
        </motion.div>
      ))}
    </section>

    {/* ── MEET YOUR MENTOR ── */}
    <section className="bg-[#f5f4f0] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* LEFT — Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden px-10 md:px-14 pt-16 md:pt-20 pb-16 md:pb-20"
        >
          <img
            src={mentorImg}
            alt="Meet Your Mentor — Nilima"
            className="w-full h-[420px] md:h-[500px] object-cover object-top"
          />
        </motion.div>

        {/* RIGHT — heading overlaps image by ~40%, text+button stay right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center py-16 md:py-20 pr-10 md:pr-16 lg:pr-20 pl-4 md:pl-2"
        >
          <h2 className="mentor-heading-offset font-display text-4xl md:text-5xl lg:text-6xl leading-none text-foreground uppercase mb-10 tracking-tight">
            Meet Your<br />Mentor
          </h2>

          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50">The Visionary</span>
          </div>

          <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
            Nilima is a Personal Brand Strategist, Presence Coach and Founder of{" "}
            <strong className="font-medium text-foreground">Evolvere7</strong>{" "}
            who empowers corporate women and female founders to build image authority for maximum impact and income. With Nilima's guidance and the{" "}
            <strong className="font-medium text-foreground">Evolvere7 Presence Framework™</strong>
            , commanding the room becomes not just a possibility, but your new reality.
          </p>

          <a
            href="/about"
            className="inline-flex items-center gap-2 w-fit text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground px-8 py-3.5 hover:brightness-110 hover:shadow-lg transition-all duration-300"
          >
            About Nilima <ArrowUpRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>

    {/* ── TESTIMONIALS ── */}
    <TestimonialsSection />

    {/* ── JOIN THE TRIBE ── */}
    <JoinTribeSection />


    <Footer />
    <FloatingButtons />
  </div>
);

export default Services;
