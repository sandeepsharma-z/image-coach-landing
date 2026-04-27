import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya M.",
    role: "VP Operations, Mumbai",
    quote: "I did not change who I am. I finally started showing who I already was. 90 days in — I led my first cross-functional presentation. My manager commented on how differently I showed up. The promotion came two months later.",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
  },
  {
    name: "Sneha R.",
    role: "Founder & CEO, Delhi",
    quote: "Clients now reach out saying they could immediately tell I was the right person. That never happened before. After the 60-Day Authority Build — my visual identity was cohesive, I showed up on camera with confidence, and premium inquiries started flowing.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Manali Shah",
    role: "CA, Ahmedabad",
    quote: "I had 8 years of experience but kept being passed over. Working with Nilima changed everything. Her expertise helped me understand how perception shapes opportunity — and how to take control of mine. I wholeheartedly recommend her programs.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
  },
  {
    name: "Eepsita Bose",
    role: "Entrepreneur",
    quote: "I had a solid offer but my image online looked inconsistent. On discovery calls, I discounted myself. After working with Evolvere7 — everything shifted. I now show up knowing exactly what I am worth. The investment paid for itself within weeks.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80",
  },
  {
    name: "Hymavati",
    role: "CEO, Software Business",
    quote: "The sessions are very detailed and personalised. Nilima genuinely understands the corporate world and what it takes to be taken seriously in it. My presence in board meetings completely transformed. I stopped being talked over and started being heard.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    name: "Kavita S.",
    role: "Senior Director, Bangalore",
    quote: "If you are a woman in corporate who is ready for the next level but not being seen that way — this is the program. Nilima does not just style you. She rebuilds the way you carry yourself into every room. I am done being overlooked.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
  },
];

const INTERVAL = 5000;
const items = [...testimonials, ...testimonials, ...testimonials];

const useVisible = () => {
  const [visible, setVisible] = useState(
    typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1
  );
  useEffect(() => {
    const handler = () => setVisible(window.innerWidth >= 768 ? 3 : 1);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return visible;
};

const TestimonialsSection = () => {
  const total = testimonials.length;
  const visible = useVisible();
  const [index, setIndex] = useState(total);
  const [transitioning, setTransitioning] = useState(false);

  const slideTo = (next: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex(next);
    setTimeout(() => setTransitioning(false), 420);
  };

  const goNext = () => slideTo(index + 1);
  const goPrev = () => slideTo(index - 1);

  useEffect(() => {
    if (!transitioning) {
      setIndex((prev) => {
        if (prev >= total * 2) return prev - total;
        if (prev < total) return prev + total;
        return prev;
      });
    }
  }, [transitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setIndex((prev) => prev + 1);
      setTimeout(() => setTransitioning(false), 420);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const activeDot = ((index % total) + total) % total;
  const cardWidthPercent = 100 / visible;
  const translateX = -(index * cardWidthPercent);
  const trackWidth = (items.length / visible) * 100;

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans text-primary-foreground/70 mb-4 block font-medium">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-display">Real Women. Real Shifts.<br/>Real Results.</h2>
        </motion.div>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              width: `${trackWidth}%`,
              transform: `translateX(${translateX / (items.length / visible)}%)`,
              transition: transitioning ? "transform 0.42s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                style={{ width: `${100 / items.length}%` }}
                className="px-2 md:px-3 lg:px-4"
              >
                <div className="border border-border p-5 md:p-8 flex flex-col gap-4 h-full">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={11} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <Quote size={18} className="text-accent/40" />
                  <p className="text-foreground/70 font-sans font-light text-sm leading-relaxed italic flex-1">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-accent/30"
                    />
                    <div>
                      <p className="font-display text-sm text-foreground">{item.name}</p>
                      <p className="text-muted-foreground font-sans text-xs mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10">
          <button
            onClick={goPrev}
            className="w-9 h-9 md:w-10 md:h-10 border border-border flex items-center justify-center text-foreground/50 hover:border-accent hover:text-accent transition-all duration-300"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(total + i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeDot ? "w-6 md:w-8 bg-accent" : "w-2 bg-foreground/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-9 h-9 md:w-10 md:h-10 border border-border flex items-center justify-center text-foreground/50 hover:border-accent hover:text-accent transition-all duration-300"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

