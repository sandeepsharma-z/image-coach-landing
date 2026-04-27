import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Your image speaks\nbefore you do.",
    tag: "Image and Personal Brand Consultant for High-Value Women",
    buttons: [
      { label: "Apply to Work with Me", variant: "gold" as const },
      { label: "See Transformations", variant: "outline" as const },
    ],
  },
  {
    image: hero2,
    title: "You did the work.\nNow look the part.",
    tag: "For Corporate Women and Female Founders",
    buttons: [{ label: "About Nilima", variant: "gold" as const }],
  },
  {
    image: hero3,
    title: "You are judged\nin seven seconds.",
    tag: "90-Day Transformation Programs",
    buttons: [{ label: "Choose Your Program", variant: "gold" as const }],
  },
  {
    image: hero1,
    title: "You already know.\nYou are ready.",
    tag: "Apply Now - Limited Spots",
    buttons: [
      { label: "Apply to Work with Me", variant: "gold" as const },
      { label: "Book a Discovery Call", variant: "outline" as const },
    ],
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 9000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden h-[74vh] md:h-[80vh] lg:h-[84vh]"
    >
      <div className="absolute inset-0 z-0 bg-black" />
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={slide.image}
          alt="Image coach hero background"
          width={1920}
          height={1080}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0 z-0 w-full h-full object-cover grayscale contrast-110"
          style={{ objectPosition: "center 38%" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.58)" }} />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="max-w-5xl"
          >
            <p className="text-primary-foreground/85 text-xs tracking-[0.25em] uppercase font-sans mb-4">{slide.tag}</p>
            <h1
              className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-[80px] uppercase font-display text-primary-foreground mb-8 tracking-tight leading-tight"
              style={{ whiteSpace: "pre-line" }}
            >
              {slide.title}
            </h1>

            <div className="flex flex-wrap gap-4 justify-center">
              {slide.buttons.map((btn) => (
                <a
                  key={btn.label}
                  href="#contact"
                  className={`px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 ${
                    btn.variant === "gold"
                      ? "bg-accent text-accent-foreground hover:brightness-110 hover:shadow-lg"
                      : "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {btn.label} <ArrowUpRight size={13} />
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-primary-foreground/50 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <ChevronDown size={16} className="text-primary-foreground/50 animate-scroll-down" />
      </div>
    </section>
  );
};

export default HeroSlider;
