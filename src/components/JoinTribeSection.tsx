import { motion } from "framer-motion";
import { Play, Instagram } from "lucide-react";
import { useState } from "react";

const posts = [
  { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", video: true },
  { img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80", video: false },
  { img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80", video: true },
  { img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&q=80", video: true },
  { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80", video: false },
  { img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80", video: true },
];

const JoinTribeSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section style={{ background: "#161614" }} className="overflow-hidden">

      {/* ── TOP — Heading + Form ── */}
      <div className="px-6 md:px-16 lg:px-28 pt-20 pb-14 grid md:grid-cols-[2.2fr_1fr] gap-12 md:gap-16 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] text-primary-foreground uppercase leading-none mb-6 tracking-tight whitespace-nowrap">
            Join the Tribe
          </h2>
          <p className="font-sans font-light text-primary-foreground/50 text-sm leading-relaxed max-w-md">
            <strong className="font-semibold text-primary-foreground/80">Want to see real results?</strong>{" "}
            Let's be friends and be the first to receive actionable tips on image authority, personal branding, and presence.
          </p>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col justify-center"
        >
          <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 font-sans text-sm py-3 outline-none focus:border-accent transition-colors duration-300 tracking-wide"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 font-sans text-sm py-3 outline-none focus:border-accent transition-colors duration-300 tracking-wide"
            />
            <button
              type="submit"
              className="font-sans text-sm text-primary-foreground hover:text-accent transition-colors duration-300 tracking-[0.15em] uppercase text-left"
            >
              Count Me In →
            </button>
          </form>
        </motion.div>
      </div>

      {/* ── BOTTOM — Instagram Grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="grid grid-cols-3 md:grid-cols-6"
      >
        {posts.map((post, i) => (
          <a
            key={i}
            href="https://www.instagram.com/evolvere7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden aspect-square group"
          >
            <img
              src={post.img}
              alt={`Instagram post ${i + 1}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            {/* Play icon center for video posts — always visible */}
            {post.video && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Play size={18} className="text-white fill-white" />
                </div>
              </div>
            )}
            {/* Hover overlay with Instagram icon */}
            <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram size={22} className="text-white" />
            </div>
          </a>
        ))}
      </motion.div>

    </section>
  );
};

export default JoinTribeSection;
