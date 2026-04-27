import { motion } from "framer-motion";
import { Users, Star, Award } from "lucide-react";

const items = [
  { icon: Users, label: "Trusted by corporate professionals and founders across India" },
  { icon: Star, label: "90-day transformation programs" },
  { icon: Award, label: "Image · Presence · Personal Brand" },
];

const TrustStrip = () => (
  <section className="bg-charcoal border-y border-charcoal-foreground/10">
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="flex items-center gap-3"
        >
          <item.icon size={20} className="text-accent" strokeWidth={1.5} />
          <span className="text-xs tracking-[0.15em] uppercase font-sans text-charcoal-foreground/70">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
