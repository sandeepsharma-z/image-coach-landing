import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import testimonialVideo1 from "@/assets/testimonial-1.mp4";
import testimonialVideo2 from "@/assets/testimonial-2.mp4";
import testimonialVideo2b from "@/assets/testimonial-2b.mp4";

const testimonials = [
  {
    name: "Priya M.",
    role: "VP Operations, Mumbai",
    quote: "I did not change who I am. I finally started showing who I already was. 90 days in — I led my first cross-functional presentation and got the promotion two months later.",
    video: testimonialVideo1,
  },
  {
    name: "Sneha R.",
    role: "Founder & CEO, Delhi",
    quote: "Clients now reach out saying they could immediately tell I was the right person. That never happened before. My first premium inquiry came through within three weeks.",
    video: testimonialVideo2,
  },
  {
    name: "Kavita S.",
    role: "Senior Director, Bangalore",
    quote: "In meetings, people used to talk over me. Now they lean in. My manager commented on how differently I showed up — and my image finally matches where I was always headed.",
    video: testimonialVideo2b,
  },
];

const VideoCard = ({ t, index }: { t: typeof testimonials[0]; index: number }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col"
    >
      {/* Video Container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "9/14" }}>
        <video
          ref={videoRef}
          src={t.video}
          playsInline
          preload="metadata"
          controls={playing}
          onPause={handlePause}
          onEnded={handlePause}
          className="w-full h-full object-cover"
        />

        {/* Overlay + Play button — hidden when playing */}
        {!playing && (
          <>
            <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-colors duration-500" />

            {/* Play Button */}
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full border-2 border-white/70 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300"
              >
                <Play size={22} className="text-white group-hover:text-accent transition-colors duration-300 ml-1" fill="currentColor" />
              </motion.div>
            </div>

            {/* Bottom gradient + name */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
              <p className="font-display text-lg text-primary-foreground leading-tight">{t.name}</p>
              <p className="text-xs tracking-[0.15em] uppercase font-sans text-primary-foreground/80 mt-0.5">{t.role}</p>
            </div>
          </>
        )}
      </div>

      {/* Quote */}
      <div className="border border-white/10 border-t-0 p-6 flex-1 group-hover:border-accent/30 transition-colors duration-500">
        <Quote size={18} className="text-accent/50 mb-3" />
        <p className="text-charcoal-foreground/60 font-sans font-light text-sm leading-relaxed italic group-hover:text-charcoal-foreground/80 transition-colors duration-300">
          "{t.quote}"
        </p>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => (
  <section className="section-padding bg-charcoal relative overflow-hidden">
    {/* Background glow */}
    <motion.div
      animate={{ opacity: [0.04, 0.09, 0.04] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 20% 80%, #f3e200 0%, transparent 60%)" }}
    />

    <div className="relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-charcoal-foreground/80 mb-4 block">
          Real Women. Real Shifts.
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-charcoal-foreground">
          Real Results.
        </h2>
        <p className="text-primary-foreground/70 font-sans font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
          Not just style upgrades. Career pivots. Brand breakthroughs. Confidence that changed everything.
        </p>
      </motion.div>

      {/* Video Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <VideoCard key={i} t={t} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

