import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const heroImg = "https://evolvere7.com/public_assets/img/ev22.jpg";
const BASE = "https://evolvere7.com/public_assets/img/ttt/";

const images = [
  BASE + "ba16.webp",
  BASE + "ba2.jpg",
  BASE + "baa4.jpg",
  BASE + "ba6.jpeg",
  BASE + "10-768x768.jpg",
  BASE + "11-768x768.jpg",
  BASE + "Client-Transformation-4-768x768.jpg",
  BASE + "Client-Transformation-5-768x768.jpg",
  BASE + "Client-Transformation-6-768x768.jpg",
  BASE + "WhatsApp-Image-2023-11-04-at-15.50.38-768x768.jpg",
  BASE + "WhatsApp-Image-2023-11-04-at-15.50.38-1-768x768.jpg",
  BASE + "bf33.jpg",
  BASE + "1-768x768%20(1).jpg",
  BASE + "1-768x768.jpg",
  BASE + "8-768x768.jpg",
  BASE + "9-768x768.jpg",
  "https://evolvere7.com/public_assets/img/BEFORE4.png",
];

const Transformations = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* ── HERO ── */}
    <section className="relative w-full overflow-hidden h-[88vh] md:h-[92vh] lg:h-[96vh]">
      <div className="absolute inset-0 z-0 bg-black" />
      <img
        src={heroImg}
        alt="Client Transformations"
        className="absolute inset-0 z-0 w-full h-full object-cover grayscale contrast-110"
        style={{ objectPosition: "center 30%" }}
      />
      <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(0,0,0,0.75)" }} />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="text-primary-foreground/85 text-xs tracking-[0.25em] uppercase font-sans mb-4">
            Real Results
          </p>
          <h1 className="mx-auto max-w-5xl text-4xl md:text-8xl lg:text-[110px] uppercase font-display text-primary-foreground mb-8 tracking-tight leading-none">
            Client<br />Transformations<span className="text-accent">.</span>
          </h1>
          <p className="font-sans font-light text-primary-foreground/50 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
            These are real women, real wardrobes, and real results. Every transformation starts with a decision.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground hover:brightness-110 hover:shadow-lg transition-all duration-300"
          >
            Start Your Journey <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>

    {/* ── INTRO ── */}
    <section className="bg-[#f5f4f0] px-6 md:px-16 lg:px-28 pt-20 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50">Before & After</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-4 uppercase">
          120+ Women.<br />One Decision<span className="text-accent">.</span>
        </h2>
        <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">
          Scroll through real client results — corporate leaders, entrepreneurs, and women who decided their image should match their ambition.
        </p>
      </motion.div>
    </section>

    {/* ── GRID ── */}
    <section className="bg-[#f5f4f0] px-6 md:px-16 lg:px-28 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="bg-white border border-foreground/8 overflow-hidden shadow-sm group"
          >
            <img
              src={src}
              alt={`Client transformation ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="bg-foreground py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary-foreground/50 text-xs tracking-[0.3em] uppercase font-sans mb-4">Your Turn</p>
        <h2 className="font-display text-4xl md:text-6xl text-primary-foreground uppercase mb-6 leading-none">
          Ready to Transform<span className="text-accent">?</span>
        </h2>
        <p className="font-sans font-light text-primary-foreground/50 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Book a free discovery call and let's talk about what's possible for you.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground hover:brightness-110 transition-all duration-300"
        >
          Apply Now <ArrowUpRight size={13} />
        </a>
      </motion.div>
    </section>

    <Footer />
    <FloatingButtons />
  </div>
);

export default Transformations;
