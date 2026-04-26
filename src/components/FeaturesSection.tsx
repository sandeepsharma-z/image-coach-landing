import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const items = [
  {
    image: hero1,
    title: "Audit your current image",
    desc: "We look at how you are currently showing up — online, in person, on camera. Where are the gaps between how you see yourself and how others see you? This honest assessment is where every transformation begins.",
    link: "Start Here",
  },
  {
    image: hero2,
    title: "Define your next version",
    desc: "We get clear on the position you are stepping into — and build the image that belongs in that room. Leadership role, premium brand, or both. Your next version already exists. We make it visible.",
    link: "Define Your Vision",
  },
  {
    image: hero3,
    title: "Transform your external presence",
    desc: "Style. Wardrobe. Body language. On-camera presence. Personal brand visuals. We work on every layer that shapes how you are perceived — so the outside finally matches the ambition inside.",
    link: "See the Transformation",
  },
  {
    image: hero4,
    title: "Make it consistent and natural",
    desc: "Real-world application so your new presence is not something you perform — it is something you own, in every room, on every platform, every day. This is not a makeover. It is a system.",
    link: "Apply Now",
  },
];

const FeaturesSection = () => (
  <section id="features" className="overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center py-16 px-6"
    >
      <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 mb-4 block">
        How It Works
      </span>
      <h2 className="font-display text-3xl md:text-5xl text-foreground">
        This is not a makeover.<br />It is a system.
      </h2>
      <p className="text-muted-foreground font-sans font-light text-sm mt-4 max-w-md mx-auto">
        Four steps. Built around you. Designed to last.
      </p>
    </motion.div>
    {items.map((item, i) => {
      const isEven = i % 2 === 0;
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ backgroundColor: "rgba(0,0,0,0.06)" }}
          transition={{ duration: 0.4 }}
          className="group grid md:grid-cols-2 transition-colors duration-400"
        >
          {/* Image */}
          <div className={`relative overflow-hidden ${isEven ? "md:order-1" : "md:order-2"}`}>
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter,transform] duration-500"
              style={{ minHeight: 420 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/24 transition-colors duration-400" />
          </div>

          {/* Content */}
          <div
            className={`flex items-center px-10 lg:px-20 py-16 bg-background group-hover:bg-black/[0.06] transition-colors duration-400 ${isEven ? "md:order-2" : "md:order-1"}`}
          >
            <motion.div
              initial={{ opacity: 0, x: isEven ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-md"
            >
              <span className="text-xs tracking-[0.25em] uppercase font-sans text-foreground/70 mb-4 block">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground mb-6">
                {item.title}
              </h3>
              <p className="font-sans font-light text-muted-foreground leading-relaxed text-sm lg:text-base mb-8">
                {item.desc}
              </p>
              <a
                href="#"
                className="btn-slide-hover inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans border-b border-accent text-foreground px-6 py-2.5 transition-colors duration-300"
              >
                {item.link}
                <ArrowUpRight size={13} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      );
    })}
  </section>
);

export default FeaturesSection;

