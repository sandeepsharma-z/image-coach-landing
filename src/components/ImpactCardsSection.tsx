import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Award, Zap } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    metric: "90+ Days",
    title: "Transformation Timeline",
    desc: "Most clients see visible shifts in perception within the first 30 days. By day 90, it is unmistakable.",
    image: "https://images.unsplash.com/photo-1611632622046-f8c03ce2b629?w=500&q=90",
  },
  {
    icon: Users,
    metric: "500+",
    title: "Lives Transformed",
    desc: "From corporate climbers to founders, from invisible experts to recognizable authorities. Real women. Real results.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=90",
  },
  {
    icon: Award,
    metric: "7 Years",
    title: "of Proven Results",
    desc: "Seven years of refining this system. Tested with founders, CEOs, directors, and women stepping into leadership.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=90",
  },
  {
    icon: Zap,
    metric: "100%",
    title: "Personalized Approach",
    desc: "No templates. No one-size-fits-all systems. Every woman gets a strategy built around her unique role and goals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=90",
  },
];

const ImpactCardsSection = () => (
  <section className="section-padding bg-charcoal relative overflow-hidden">
    {/* Background glow */}
    <motion.div
      animate={{ opacity: [0.03, 0.08, 0.03] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 50%, #f3e200 0%, transparent 70%)" }}
    />

    <div className="relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-charcoal-foreground/80 mb-4 block">
          Why This Works
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-charcoal-foreground mb-4">
          Backed by Results, Not Theory
        </h2>
        <p className="text-primary-foreground/60 font-sans font-light text-sm md:text-base">
          This is not style advice. This is a precision system built on seven years of proving that image, presence, and personal brand are the fastest levers to visibility, credibility, and impact.
        </p>
      </motion.div>

      {/* Impact Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map((item, i) => (
          <motion.div
            key={item.metric}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden"
          >
            {/* Image Background with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale brightness-40 group-hover:brightness-50 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20 group-hover:from-charcoal/95 transition-all duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-96 p-6 md:p-7">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-sm border border-accent/40 flex items-center justify-center bg-accent/10 mb-6 group-hover:border-accent/60 transition-all duration-300"
              >
                <item.icon size={20} className="text-accent" strokeWidth={1.5} />
              </motion.div>

              {/* Metric */}
              <p className="text-3xl md:text-4xl font-display text-accent mb-2 leading-none">
                {item.metric}
              </p>

              {/* Title */}
              <h3 className="font-archivo text-base md:text-lg text-primary-foreground mb-3 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/60 font-sans font-light text-xs md:text-sm leading-relaxed flex-1 mb-6">
                {item.desc}
              </p>

              {/* Spacer */}
              <div className="mt-auto" />

              {/* CTA */}
              <motion.a
                href="/contact"
                whileHover={{ gap: "0.75rem" }}
                className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans text-accent border-b border-accent/30 hover:border-accent/80 transition-all duration-300 w-fit"
              >
                Learn More <ArrowUpRight size={11} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactCardsSection;
