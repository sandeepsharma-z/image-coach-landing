import { motion } from "framer-motion";
import { ArrowUpRight, Lightbulb, Users, Target, Zap } from "lucide-react";

const approaches = [
  {
    icon: Lightbulb,
    title: "Not Style. Strategy.",
    desc: "We do not just tell you what to wear. We build a system around your goals, your role, and the rooms you need to command.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=90",
  },
  {
    icon: Users,
    title: "Not One-Size-Fits-All. You-Specific.",
    desc: "From corporate climbers to founders, from risk-averse to bold. Your strategy is built around who you are and who you want to be.",
    image: "https://images.unsplash.com/photo-1611632622046-f8c03ce2b629?w=600&q=90",
  },
  {
    icon: Target,
    title: "Not Theory. Tested Systems.",
    desc: "Seven years of refining this. Tested with 500+ women. Real problems. Real solutions. Real results.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=90",
  },
  {
    icon: Zap,
    title: "Not a Makeover. A Transformation.",
    desc: "This is not about looking different. It is about finally showing the authority you carry. The shift is internal and external.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=90",
  },
];

const UniqueApproachSection = () => (
  <section className="section-padding bg-charcoal relative overflow-hidden">
    {/* Background glow */}
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
      transition={{ duration: 7, repeat: Infinity }}
      className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
    />

    <div className="relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-primary-foreground/70 mb-4 block">
          Why Different
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-charcoal-foreground mb-4">
          This Is Not What You Have Tried Before
        </h2>
        <p className="text-primary-foreground/60 font-sans font-light text-sm md:text-base max-w-3xl mx-auto">
          Most image work is surface-level. Colors, cuts, accessories. That is not how real change happens. We work on the things that actually move the needle.
        </p>
      </motion.div>

      {/* Approach Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {approaches.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale brightness-30 group-hover:brightness-40 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent group-hover:via-charcoal/60 transition-all duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-6 md:p-7 group-hover:-translate-y-1 transition-transform duration-300">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                className="w-12 h-12 rounded-sm border border-accent/40 flex items-center justify-center bg-accent/15 mb-6 group-hover:border-accent/70 group-hover:bg-accent/25 transition-all duration-300"
              >
                <item.icon size={24} className="text-accent" strokeWidth={1.5} />
              </motion.div>

              {/* Title */}
              <h3 className="font-archivo text-lg md:text-xl text-primary-foreground mb-3 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans font-light text-primary-foreground/70 text-sm leading-relaxed flex-1">
                {item.desc}
              </p>

              {/* Arrow indicator */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-2 mt-6 text-accent/50 group-hover:text-accent transition-colors duration-300"
              >
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-8 mt-16 pt-12 border-t border-white/10"
      >
        <p className="font-sans font-light text-primary-foreground/60 text-sm md:text-base max-w-2xl text-center">
          Ready to experience the difference? Book a discovery call with no obligation. We will map exactly where you are and what your next-level transformation looks like.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground px-8 py-4 hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Book Your Discovery Call <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default UniqueApproachSection;
