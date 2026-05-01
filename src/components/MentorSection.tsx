import { motion } from "framer-motion";
import mentorImg from "@/assets/evolvere7-portrait.jpg";

const MentorSection = () => (
  <section className="bg-[#f5f4f0] overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-0">

      {/* LEFT — Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-10 md:px-16 py-16 md:py-20"
      >
        <img
          src={mentorImg}
          alt="Meet Your Mentor — Nilima SSethia"
          className="w-full h-[500px] md:h-[640px] object-cover object-top"
        />
      </motion.div>

      {/* RIGHT — Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-10 md:px-16 lg:px-20 py-16 md:py-20 flex flex-col justify-center"
      >
        <h2 className="font-display text-5xl md:text-7xl lg:text-[88px] leading-none text-foreground uppercase mb-10 tracking-tight">
          Meet Your<br />Mentor
        </h2>

        <p className="font-sans font-light text-foreground/65 text-sm md:text-base leading-relaxed mb-10 max-w-md">
          Nilima SSethia is a Personal Brand Strategist, Presence Coach and Founder of{" "}
          <strong className="font-semibold text-foreground">Evolvere7</strong>{" "}
          who empowers corporate women and female founders to build image authority for maximum impact and income. With Nilima SSethia's guidance and the{" "}
          <strong className="font-semibold text-foreground">Evolvere7 Presence Framework™</strong>
          , commanding the room becomes not just a possibility, but your new reality.
        </p>

        <a
          href="/about"
          className="inline-flex items-center w-fit border border-foreground/60 rounded-full px-7 py-2.5 text-xs tracking-[0.2em] uppercase font-sans text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
        >
          About Nilima SSethia
        </a>
      </motion.div>

    </div>
  </section>
);

export default MentorSection;
