import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CtaSection = () => (
  <section id="contact" className="section-padding bg-foreground">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* Left — Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 mb-4 block">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground leading-tight mb-6">
          You already know
          <br />
          you are ready<span className="text-accent">.</span>
        </h2>
        <p className="text-primary-foreground/50 font-sans font-light text-base leading-relaxed mb-4 max-w-md">
          Every meeting you walk into underestimated. Every pitch where your image does not match your pricing. Every room where you work twice as hard to be heard half as much.
        </p>
        <p className="text-primary-foreground/50 font-sans font-light text-base leading-relaxed mb-10 max-w-md">
          This is the investment that changes how the rest of your career — and your business — plays out.
        </p>

        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
          {[
            { value: "120+", label: "Clients Transformed" },
            { value: "7+", label: "Years of Experience" },
            { value: "2", label: "Focused Niches" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl md:text-3xl text-accent">{s.value}</p>
              <p className="text-primary-foreground/40 font-sans text-xs tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right — Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="border border-white/10 p-8 md:p-10"
      >
        <h3 className="font-display text-xl text-primary-foreground mb-2">Apply to Work with Me</h3>
        <p className="text-primary-foreground/40 font-sans font-light text-sm mb-6">Or book a free discovery call to ask questions first.</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs tracking-[0.15em] uppercase font-sans text-primary-foreground/40 block mb-2">First Name</label>
              <input
                type="text"
                placeholder="Jane"
                className="w-full bg-white/5 border border-white/10 text-primary-foreground placeholder:text-white/20 font-sans text-sm px-4 py-3 outline-none focus:border-accent/50 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.15em] uppercase font-sans text-primary-foreground/40 block mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full bg-white/5 border border-white/10 text-primary-foreground placeholder:text-white/20 font-sans text-sm px-4 py-3 outline-none focus:border-accent/50 transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <label className="text-xs tracking-[0.15em] uppercase font-sans text-primary-foreground/40 block mb-2">Email</label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full bg-white/5 border border-white/10 text-primary-foreground placeholder:text-white/20 font-sans text-sm px-4 py-3 outline-none focus:border-accent/50 transition-colors duration-300"
            />
          </div>

          <div>
            <label className="text-xs tracking-[0.15em] uppercase font-sans text-primary-foreground/40 block mb-2">Phone</label>
            <input
              type="tel"
              placeholder="+91 00000 00000"
              className="w-full bg-white/5 border border-white/10 text-primary-foreground placeholder:text-white/20 font-sans text-sm px-4 py-3 outline-none focus:border-accent/50 transition-colors duration-300"
            />
          </div>

          <div>
            <label className="text-xs tracking-[0.15em] uppercase font-sans text-primary-foreground/40 block mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your goals..."
              className="w-full bg-white/5 border border-white/10 text-primary-foreground placeholder:text-white/20 font-sans text-sm px-4 py-3 outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 bg-accent text-accent-foreground py-4 text-xs tracking-[0.2em] uppercase font-sans hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Apply to Work with Me <ArrowUpRight size={13} />
            </button>
            <button
              type="button"
              className="flex-1 border border-white/20 text-primary-foreground py-4 text-xs tracking-[0.2em] uppercase font-sans hover:border-accent/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book a Discovery Call <ArrowUpRight size={13} />
            </button>
          </div>
        </form>
      </motion.div>

    </div>
  </section>
);

export default CtaSection;


