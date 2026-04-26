import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Why the promotion went to her — not you",
    category: "Corporate",
    date: "Mar 2026",
    excerpt: "You had the experience. You put in the hours. But someone else got the title. The uncomfortable truth is that decisions about promotions are made before you even open your mouth — and here is what you can do about it.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    readTime: "5 min read",
  },
  {
    title: "5 ways your image is costing you clients right now",
    category: "Founders",
    date: "Feb 2026",
    excerpt: "Potential clients are making decisions about your credibility before they read a single word. If your personal brand is inconsistent, your pricing feels unjustified, or your on-camera presence feels unsure — you are losing business you cannot see.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    readTime: "6 min read",
  },
  {
    title: "How to walk into any room like you belong at the top",
    category: "Presence",
    date: "Jan 2026",
    excerpt: "Presence is not something you are born with. It is something you build — deliberately. From how you enter a room to how you sit in a meeting, these are the signals that tell people whether to take you seriously.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    readTime: "4 min read",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding bg-background relative overflow-hidden">
    <div className="relative z-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 mb-4 block">
          Insights
        </span>
        <h2 className="text-3xl md:text-5xl font-display">Insights on image,<br/>presence, and personal brand</h2>
        <p className="text-muted-foreground font-sans font-light text-sm mt-4 max-w-sm mx-auto">Practical thinking for women who are building something serious.</p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group block border border-border hover:border-accent/30 transition-all duration-500"
          >
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-foreground/80 backdrop-blur-sm px-3 py-1">
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-foreground/65">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              {/* Meta */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.15em] font-sans text-muted-foreground">{post.date}</span>
                <span className="text-[10px] tracking-[0.15em] font-sans text-muted-foreground">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg leading-snug group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground font-sans font-light text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read more */}
              <div className="flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase font-sans text-foreground/50 group-hover:text-accent transition-colors duration-300 pt-2 border-t border-border mt-1">
                Read Article <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

    </div>
  </section>
);

export default BlogSection;

