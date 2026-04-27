import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Sparkles, Target } from "lucide-react";

const showcases = [
  {
    icon: Zap,
    title: "From Underestimated to Unmissable",
    desc: "Walk into rooms where people finally see your authority. No more discounting yourself or working twice as hard to be heard.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=90",
    cta: "See Transformations",
  },
  {
    icon: Target,
    title: "Build a Visual Brand That Sells",
    desc: "Stop building a personal brand and start building a premium brand. Your visual identity becomes your biggest asset.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=90",
    cta: "Explore Branding",
  },
  {
    icon: Sparkles,
    title: "Command Every Room You Enter",
    desc: "Body language. Wardrobe. On-camera presence. Every element working together so you finally match the authority you carry.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=90",
    cta: "Master Presence",
  },
];

const CreativeShowcaseSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    {/* Background accents */}
    <div className="absolute top-0 right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

    <div className="relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 mb-4 block">
          The Shift
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">
          What Becomes Possible
        </h2>
        <p className="text-muted-foreground font-sans font-light text-sm mt-4 max-w-2xl mx-auto">
          When your external presence finally matches your internal authority, everything changes. Here is what women just like you have discovered.
        </p>
      </motion.div>

      {/* Showcase Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {showcases.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col overflow-hidden border border-foreground/10 hover:border-accent/40 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-48 md:h-56">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter] duration-500"
                whileHover={{ scale: 1.05 }}
              />
              {/* Icon Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center border border-accent/40 backdrop-blur-sm group-hover:bg-accent/40 group-hover:border-accent transition-all duration-300"
                >
                  <item.icon size={24} className="text-accent" strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 md:p-8 bg-background group-hover:bg-accent/2 transition-colors duration-300">
              <h3 className="font-archivo text-lg md:text-xl text-foreground mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                {item.desc}
              </p>

              {/* CTA Button */}
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-accent border-b border-accent hover:gap-3 transition-all duration-300 w-fit"
              >
                {item.cta} <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CreativeShowcaseSection;
