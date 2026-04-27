import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const journey = [
  {
    phase: "Week 1-2",
    title: "Clarity",
    desc: "You get honest about where you are and where you want to be. No judgment. Just the truth about how you are currently showing up.",
    icon: "01",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=90",
    color: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    phase: "Week 3-6",
    title: "Strategy",
    desc: "We build your blueprint. Your style system. Your presence principles. The framework that becomes your decision-making authority.",
    icon: "02",
    image: "https://images.unsplash.com/photo-1611632622046-f8c03ce2b629?w=500&q=90",
    color: "bg-accent/15",
    borderColor: "border-accent/40",
  },
  {
    phase: "Week 7-12",
    title: "Implementation",
    desc: "You apply. You practise. You refine. Real-world application until your new presence is not performed — it is owned.",
    icon: "03",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=90",
    color: "bg-accent/20",
    borderColor: "border-accent/50",
  },
  {
    phase: "Week 13+",
    title: "Authority",
    desc: "You live it. Every room. Every camera. Every interaction. This is not a makeover anymore. It is who you are.",
    icon: "04",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=90",
    color: "bg-accent/25",
    borderColor: "border-accent/60",
  },
];

const JourneyPathSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

    <div className="relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 mb-4 block">
          Your Path to Authority
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">
          Four Phases. One Outcome.
        </h2>
        <p className="text-muted-foreground font-sans font-light text-sm mt-4 max-w-2xl mx-auto">
          Watch what becomes possible when you stop performing and start owning your authority.
        </p>
      </motion.div>

      {/* Journey Timeline */}
      <div className="relative">
        {/* Connecting line (hidden on mobile) */}
        <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

        {/* Phase Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className={`relative overflow-hidden border transition-all duration-500 ${item.borderColor} ${item.color} hover:border-accent group-hover:-translate-y-2`}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-[filter] duration-500"
                    whileHover={{ scale: 1.08 }}
                  />
                  {/* Phase Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-foreground px-3 py-1 text-xs tracking-[0.1em] uppercase font-sans font-semibold rounded-sm">
                    {item.phase}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Number Icon */}
                  <div className="w-10 h-10 rounded-sm border border-accent/40 flex items-center justify-center bg-accent/10 mb-4 group-hover:border-accent/80 transition-all duration-300">
                    <span className="text-accent font-display text-lg font-semibold">{item.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-archivo text-xl md:text-2xl text-foreground mb-3 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Check mark */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-sans text-accent group-hover:text-accent/80 transition-colors duration-300"
                  >
                    <CheckCircle2 size={16} strokeWidth={1.5} />
                    <span>You Own This</span>
                  </motion.div>
                </div>
              </div>

              {/* Connector arrow (visible on larger screens) */}
              {i < journey.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-32 w-6 h-6 items-center justify-center text-accent/40 group-hover:text-accent transition-colors duration-300">
                  <ArrowUpRight size={20} strokeWidth={1} className="rotate-45" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex justify-center mt-14"
      >
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans bg-accent text-accent-foreground px-8 py-4 hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Start Your Journey <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default JourneyPathSection;
