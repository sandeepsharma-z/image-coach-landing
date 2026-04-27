import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Award, Shirt, Eye, Layers } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "The 90-Day Corporate Presence Upgrade",
    desc: "For women in mid-to-senior roles who are skilled and ready for the next level — but not being seen that way. Walk into every room as someone who commands respect.",
    tags: ["Wardrobe System", "Body Language", "Meeting Presence", "Communication"],
    price: "₹30,000 – ₹60,000",
  },
  {
    icon: TrendingUp,
    title: "The 60-Day Authority Build System",
    desc: "For women building a business who are not being perceived as the premium expert they are. Your image and brand will reflect the credibility that converts browsers into buyers.",
    tags: ["Brand Positioning", "Styling", "Photoshoot Direction", "On-Camera"],
    price: "₹50,000 – ₹1,00,000+",
  },
  {
    icon: Award,
    title: "The 12-Week Full Transformation",
    desc: "For women serious about a complete transformation — image, presence, communication, and personal brand rebuilt from the ground up. You become someone people notice, remember, and trust.",
    tags: ["Image", "Presence", "Communication", "Personal Brand"],
    price: "₹80,000 – ₹1,50,000+",
  },
  {
    icon: Shirt,
    title: "Professional Wardrobe System",
    desc: "A wardrobe built around your role, your goals, and the room you are stepping into — so every outfit you wear becomes a strategic asset.",
    tags: ["Wardrobe Audit", "Capsule Wardrobe", "Outfit Planning"],
    price: "Included in programs",
  },
  {
    icon: Eye,
    title: "On-Camera & Meeting Presence",
    desc: "From discovery calls to board presentations — learn how to show up with certainty, hold the room, and make people lean in when you speak.",
    tags: ["Body Language", "Eye Contact", "Vocal Authority"],
    price: "Included in programs",
  },
  {
    icon: Layers,
    title: "Personal Brand & Visual Identity",
    desc: "A cohesive digital presence that signals premium — LinkedIn, Instagram, website, and beyond. Your online image should match the authority you carry offline.",
    tags: ["LinkedIn", "Instagram", "Brand Visuals"],
    price: "Included in programs",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-charcoal relative overflow-hidden">
    <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
    <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/3 blur-2xl" />

    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 mb-4 block">
          What I Offer
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-charcoal-foreground">
          Choose your transformation
        </h2>
        <p className="text-charcoal-foreground/40 font-sans font-light text-sm mt-4 max-w-md mx-auto">
          Two focused programs. One outcome — you become impossible to overlook.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-foreground/80 p-8 border border-white/10 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 cursor-pointer flex flex-col gap-4"
          >
            <s.icon size={28} strokeWidth={1} className="text-accent group-hover:-translate-y-1 transition-transform duration-300" />
            <h3 className="font-sans font-semibold text-sm uppercase tracking-[0.1em] text-charcoal-foreground">{s.title}</h3>
            <p className="font-sans font-light text-sm leading-relaxed text-charcoal-foreground/60 flex-1">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map(t => (
                <span key={t} className="text-[9px] tracking-[0.12em] uppercase border border-accent/20 text-accent/70 px-2 py-0.5">{t}</span>
              ))}
            </div>
            <p className="text-xs font-sans text-accent tracking-wide pt-2 border-t border-white/10">{s.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

