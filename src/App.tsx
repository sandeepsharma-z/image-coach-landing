import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Star, Calendar, Clock, Video, Globe, CheckCircle, Volume2, X, Briefcase, Zap, Sparkles, Home, Dumbbell, BookOpen, ChevronDown } from "lucide-react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-l-4 border-blue-600 bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-gray-100 transition-colors duration-200"
      >
        <span className="text-blue-600 font-bold text-xl flex-shrink-0 mt-1">+</span>
        <span className="font-bold text-base text-gray-900 flex-1">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown size={20} className="text-blue-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 text-gray-700 text-base leading-relaxed border-t border-gray-200">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const App = () => {
  const [playingVideo, setPlayingVideo] = React.useState(null);
  const [bonusInView, setBonusInView] = React.useState(false);
  const [openFAQ, setOpenFAQ] = React.useState(0);
  const bonusRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (bonusRef.current) {
        const rect = bonusRef.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        // Show content only when section is in the middle of viewport
        setBonusInView(distance < window.innerHeight / 2.5);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div className="min-h-screen pb-20">
    {/* ── WARNING BANNER ── */}
    <div className="bg-red-600 text-white py-3 text-center text-sm tracking-wide font-semibold">
      ⚠️ <span className="text-yellow-300">WARNING: Only 5 Spots Left!</span> "Image Authority Blueprint" Workshop
    </div>

    {/* ── HERO HEADER ── */}
    <div className="bg-gray-900 text-white py-4 px-6 md:px-16 lg:px-28 flex items-center justify-center gap-8 border-b-4 border-accent">
      <h1 className="font-display text-base md:text-lg tracking-wider font-bold">"Image Authority Blueprint" Workshop</h1>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="px-8 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-sm font-bold hover:brightness-110 transition-all whitespace-nowrap flex-shrink-0 relative overflow-hidden group shadow-lg"
      >
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
        />
        <span className="relative z-10">Join Now</span>
      </motion.button>
    </div>

    {/* ── MAIN HERO ── */}
    <section className="bg-white text-gray-900 px-6 md:px-16 lg:px-28 py-8 md:py-12 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '30px 30px',
      }}
    >
      <div className="flex justify-center mb-6">
        <div className="inline-block bg-red-100 border-2 border-red-500 rounded-full px-5 py-1.5 text-center">
          <p className="text-red-600 text-xs md:text-sm font-bold tracking-wider">
            Attention: Corporate Women, Entrepreneurs, Professionals
          </p>
        </div>
      </div>

      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight text-center mb-4 max-w-4xl mx-auto font-bold">
        <span className="text-green-600">Transform Your Image</span>
        <br />
        <span className="text-black">Build Your Authority</span>
        <br />
        <span className="text-green-600">In Just 90 Days</span>
      </h1>

      <p className="text-center text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-10 font-medium">
        Working Just 3 Hours A Week | Even Without Professional Styling Experience
      </p>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start max-w-5xl mx-auto mt-12 md:mt-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative" style={{ overflow: "visible", paddingTop: "45px" }}>
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gray-900 shadow-2xl overflow-visible relative mx-auto" style={{ marginTop: "-45px", border: "8px solid #9ca3af" }}>
              <img
                src="/assets/IMG_9903-Photoroom.png"
                alt="Nilima Sethia"
                className="absolute w-full"
                style={{ height: "140%", top: "-30px", left: "0", objectFit: "cover", objectPosition: "center 45%" }}
              />
            </div>

            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-12 py-5 rounded-2xl text-center w-96 shadow-xl border border-gray-800">
              <p className="font-display text-4xl font-bold text-yellow-400 mb-2">NILIMA SETHIA</p>
              <p className="text-xs font-semibold text-white mb-1">Founder & Image Authority Coach</p>
              <p className="text-[11px] text-gray-400">7+ Years | 120+ Transformations</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          {/* Workshop Details Grid */}
            <div className="grid grid-cols-2 gap-4 mt-16 sm:mt-12 md:mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Date</p>
                  <p className="text-base font-bold text-gray-900">26 April 2026</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Time</p>
                  <p className="text-base font-bold text-gray-900">4 PM to 7 PM</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Video className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Platform</p>
                  <p className="text-base font-bold text-gray-900">Zoom</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Language</p>
                  <p className="text-base font-bold text-gray-900">Hindi</p>
                </div>
              </motion.div>
            </div>

            {/* Red Pricing Button */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 px-8 rounded-2xl cursor-pointer shadow-lg transition-all relative overflow-hidden group mt-6 mx-auto max-w-sm">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              />
              <div className="relative z-10 text-center">
                <p className="font-bold text-base mb-1">Register For Workshop Now</p>
                <p className="text-xs font-semibold">
                  <span className="line-through text-red-100 mr-2">₹999</span>
                  <span className="font-bold text-yellow-300">₹199</span>
                </p>
              </div>
            </div>

            {/* Payment Logos - Images */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-6 object-contain" />
            </div>
        </motion.div>
      </div>
    </section>

    {/* ── FEATURED IN & STATS ── */}
    <section>
      <div className="bg-white w-full py-20 text-center" style={{
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '30px 30px',
      }}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-gray-900 px-6"
        >
          FEATURED IN
        </motion.h2>
        <div className="w-full overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .marquee-container {
              width: 100%;
              overflow: hidden;
            }
            .marquee {
              display: flex;
              animation: marquee 70s linear infinite;
              gap: 30px;
              padding: 0 20px;
            }
            @media (min-width: 768px) {
              .marquee {
                gap: 60px;
                padding: 0 30px;
              }
            }
            .marquee:hover {
              animation-play-state: paused;
            }
            .marquee-item {
              flex-shrink-0;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 80px;
              min-width: 200px;
            }
          `}</style>
          <div className="marquee-container">
            <div className="marquee">
              {[
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
                "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg",
                "https://www.vectorlogo.zone/logos/cnbc/cnbc-ar21.svg",
              ].map((logo, i) => (
                <div key={i} className="marquee-item">
                  <img src={logo} alt="Brand Logo" className="h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 px-6 md:px-16 lg:px-28 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="text-center"
          >
            <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-2 md:mb-3">143K</p>
            <p className="text-white text-xs sm:text-sm uppercase tracking-widest font-medium">Followers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-2 md:mb-3">436</p>
            <p className="text-white text-xs sm:text-sm uppercase tracking-widest font-medium">Posts</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-2 md:mb-3">442</p>
            <p className="text-white text-xs sm:text-sm uppercase tracking-widest font-medium">Following</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── WHAT YOU'LL LEARN ── */}
    <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20" style={{
      backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)`,
      backgroundSize: '30px 30px',
    }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          What You'll Learn In This Exclusive
          <br />
          <span className="text-green-600">3-Hour Workshop</span>
        </motion.h2>

        <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-green-200 rounded-2xl p-8 md:p-10 mb-8 shadow-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-50/50 before:via-transparent before:to-transparent before:pointer-events-none">
          <div className="space-y-5 relative z-10">
            {[
              "HOW TO BUILD YOUR PERSONAL BRAND that sets you apart and positions you as an authority in your industry",
              "THE 3 PILLARS OF IMAGE TRANSFORMATION that create lasting confidence and credibility",
              "WARDROBE STRATEGY without breaking the bank - How to build a versatile capsule wardrobe for professional success",
              "BODY LANGUAGE & PRESENCE techniques to command respect and influence in every room",
              "SOCIAL MEDIA OPTIMIZATION for personal branding - How to leverage Instagram, LinkedIn to attract clients",
              "NETWORKING MASTERY - How to make powerful connections and turn them into opportunities",
              "THE 90-DAY TRANSFORMATION ROADMAP with daily actionable steps you can implement immediately",
              "COMMON MISTAKES that limit your growth and how to avoid them",
              "YOUR PERSONALIZED ACTION PLAN - Direct feedback and custom strategy for your specific goals",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="text-green-500" size={28} strokeWidth={1.5} />
                </div>
                <p className="text-gray-900 text-sm md:text-base font-semibold leading-loose">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-5 px-8 rounded-2xl cursor-pointer shadow-lg transition-all relative overflow-hidden group w-full md:w-auto">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center">
              <p className="font-bold text-base md:text-lg mb-1">Yes, I am Ready to Transform My Image In 90 Days</p>
              <p className="text-sm font-semibold">
                <span className="line-through text-red-100 mr-2">₹999</span>
                <span className="font-bold text-yellow-300">₹199</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </section>

    {/* ── SUCCESS STORIES ── */}
    <section className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 px-6 md:px-16 lg:px-28 py-20 md:py-28 overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="font-display text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
          Over <span className="text-yellow-400">1,500+ Success Stories</span> From Real
          <br />
          People Just Like You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-12">
          {[
            {
              src: "/assets/video1.mp4",
              title: "Dream Income achieved in just 1 year!"
            },
            {
              src: "/assets/video2.mp4",
              title: "From charging Rs.500 to charging 50K+ per client"
            },
            {
              src: "/assets/video3.mp4",
              title: "From struggling with one income to succeeding with multiple incomes"
            },
          ].map((card, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all block group w-full border-2 border-transparent hover:border-red-400">
              <div className="bg-red-600 px-4 py-2 text-center text-white text-xs font-bold tracking-widest flex items-center justify-center gap-2 group-hover:bg-red-700 transition-colors">
                <Volume2 size={16} />
                CLICK BELOW TO WATCH (SOUND ON)
              </div>
              <div className="relative w-full bg-black" style={{ aspectRatio: '9/16' }}>
                <video
                  src={card.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  playsInline
                  controlsList="nodownload"
                />
              </div>
              <div className="bg-yellow-400 px-4 py-3 text-center group-hover:bg-yellow-300 transition-colors flex items-center justify-center min-h-[60px]">
                <p className="text-slate-900 font-bold text-sm leading-tight">{card.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] py-4 bg-transparent">
          <style>{`
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .marquee-wrapper {
              width: 100%;
              overflow: hidden;
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            .marquee-scroll {
              display: flex;
              animation: marquee-scroll 200s linear infinite !important;
              gap: 20px;
              padding: 30px 20px;
              width: fit-content;
              animation-play-state: running !important;
              pointer-events: none;
            }
            .marquee-scroll:hover {
              animation-play-state: running !important;
            }
            .success-card {
              flex-shrink-0;
              min-width: 350px;
              background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 58, 138, 0.65) 100%);
              border: 2px solid rgba(59, 130, 246, 0.8);
              border-radius: 1.25rem;
              padding: 24px;
              display: flex;
              flex-direction: row-reverse;
              gap: 20px;
              align-items: center;
              backdrop-filter: blur(10px);
              box-shadow: none;
              transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
              position: relative;
              overflow: hidden;
              min-height: 140px;
            }
            .success-card::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, transparent, rgba(255,255,255,0.05), transparent);
              opacity: 0;
              transition: opacity 0.4s ease;
              pointer-events: none;
            }
            .success-card:hover {
              background: linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(59, 130, 246, 0.75) 100%);
              border-color: rgba(59, 130, 246, 1);
              transform: translateY(-6px) scale(1.05);
              box-shadow: none;
            }
            .success-card:hover::before {
              opacity: 1;
            }
          `}</style>

          <div className="marquee-wrapper">
            <div className="marquee-scroll">
              {[
                { name: "PRIYA SINGH", title: "CORPORATE EXECUTIVE", earnings: "₹50L+", desc: "Clients now approach me for opportunities", image: coach1 },
                { name: "RAJESHWARI PATEL", title: "ENTREPRENEUR", earnings: "₹2.5L+/M", desc: "Image transformed, business doubled", image: coach2 },
                { name: "MEERA GUPTA", title: "CONSULTANT", earnings: "₹1.5L+/M", desc: "Authority status in my industry now", image: coach3 },
                { name: "DIVYA SHARMA", title: "FREELANCER", earnings: "₹3.2L+", desc: "Finally charging what I deserve", image: coach1 },
                { name: "ANJALI DESAI", title: "BUSINESS OWNER", earnings: "₹4L+/M", desc: "My presence attracts the right clients", image: coach2 },
                { name: "NEHA KAPOOR", title: "COACH", earnings: "₹2.8L+/M", desc: "Brand positioning completely changed", image: coach3 },
                { name: "PRIYA SINGH", title: "CORPORATE EXECUTIVE", earnings: "₹50L+", desc: "Clients now approach me for opportunities", image: coach1 },
                { name: "RAJESHWARI PATEL", title: "ENTREPRENEUR", earnings: "₹2.5L+/M", desc: "Image transformed, business doubled", image: coach2 },
                { name: "MEERA GUPTA", title: "CONSULTANT", earnings: "₹1.5L+/M", desc: "Authority status in my industry now", image: coach3 },
                { name: "DIPIT PATEL", title: "BARODA", earnings: "17L", desc: "Personal brand to business", image: coach1 },
                { name: "SHRUTI SHARMA", title: "ENTREPRENEUR", earnings: "2.5L+", desc: "Scaled business through image", image: coach2 },
                { name: "ANJALI VERMA", title: "CONSULTANT", earnings: "3L+", desc: "Authority in 90 days", image: coach3 },
                { name: "DR NEHA ARORA", title: "MEDICAL DOCTOR", earnings: "50L", desc: "Transformed practice in 6 months", image: coach1 },
                { name: "DR. AMRUTHA", title: "MBBS, MD", earnings: "1L+/2M", desc: "From clinic to digital presence", image: coach2 },
                { name: "GEETHA", title: "HOME-MAKER", earnings: "1.48L", desc: "Built income while at home", image: coach3 },
                { name: "DIPIT PATEL", title: "BARODA", earnings: "17L", desc: "Personal brand to business", image: coach1 },
                { name: "SHRUTI SHARMA", title: "ENTREPRENEUR", earnings: "2.5L+", desc: "Scaled business through image", image: coach2 },
                { name: "ANJALI VERMA", title: "CONSULTANT", earnings: "3L+", desc: "Authority in 90 days", image: coach3 },
              ].map((person, i) => (
                <div key={i} className="success-card">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-lg flex-shrink-0 object-cover border-3 border-yellow-400 shadow-lg"
                  />
                  <div className="text-left flex-1 ml-4">
                    <p className="text-yellow-400 font-black text-base leading-tight mb-1">{person.name}</p>
                    <p className="text-blue-100 text-xs mb-2">{person.title}</p>
                    <p className="text-blue-200 text-xs mb-3 italic">{person.desc}</p>
                    <div className="bg-yellow-400 text-slate-900 px-3 py-1.5 rounded inline-block">
                      <p className="font-bold text-sm">{person.earnings}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-8 rounded-2xl cursor-pointer shadow-2xl transition-all relative overflow-hidden group max-w-lg">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="font-bold text-base md:text-lg leading-tight whitespace-nowrap text-white">Yes, Ready To Transform Image In 90 Days</p>
              <p className="text-sm font-bold mt-2">
                <span className="line-through text-red-100 mr-2">₹999</span>
                <span className="text-yellow-300">₹199</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </section>

    {/* ── WHO CAN JOIN ── */}
    <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-24" style={{
      backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)`,
      backgroundSize: '30px 30px',
    }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-center text-3xl md:text-5xl font-bold mb-4">
          This Workshop Is Perfect For You If You're:
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          No matter your background or experience level, this workshop is designed for ambitious women ready to transform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              image: "https://i.pravatar.cc/?img=47&size=300",
              title: "Corporate Professionals",
              desc: "Want to stand out, command respect, and accelerate your career growth with powerful personal branding"
            },
            {
              image: "https://i.pravatar.cc/?img=48&size=300",
              title: "Entrepreneurs & Founders",
              desc: "Need to build credibility, attract clients, and create a premium brand image for your business"
            },
            {
              image: "https://i.pravatar.cc/?img=49&size=300",
              title: "Content Creators & Influencers",
              desc: "Looking to level up your aesthetic, maintain consistency, and attract high-value brand partnerships"
            },
            {
              image: "https://i.pravatar.cc/?img=10&size=300",
              title: "Homemakers & Parents",
              desc: "Seeking to reclaim your identity, feel confident, and build a personal brand for opportunities"
            },
            {
              image: "https://i.pravatar.cc/?img=51&size=300",
              title: "Fitness & Wellness Professionals",
              desc: "Want to build a premium personal brand and attract high-paying clients in your niche"
            },
            {
              image: "https://i.pravatar.cc/?img=52&size=300",
              title: "Students & Career Changers",
              desc: "Ready to make a strong first impression and launch your career with powerful image positioning"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-red-400 hover:shadow-xl transition-all hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-red-400 shadow-md"
              />
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-8 rounded-2xl cursor-pointer shadow-2xl transition-all relative overflow-hidden group max-w-lg">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="font-bold text-base md:text-lg leading-tight whitespace-nowrap text-white">Yes, Ready To Transform Image In 90 Days</p>
              <p className="text-xs font-bold mt-2">
                <span className="line-through text-red-100 mr-2">₹999</span>
                <span className="text-yellow-300">₹199</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </section>

    {/* ── BONUS PACKAGE ── */}
    <section ref={bonusRef} className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 px-6 md:px-16 lg:px-28 py-20 md:py-28 overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-2"
        >
          LIMITED TIME BONUS PACKAGE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-yellow-400 font-black text-2xl md:text-3xl mb-16"
        >
          (₹8000 VALUE - FREE)
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-16" style={{ perspective: '1200px' }}>
          <style>{`
            .mbp-mockup-wrapper {
              width: 100%;
              height: auto;
              position: relative;
              display: flex;
              transform-style: preserve-3d;
            }
            .mbp-container {
              position: relative;
              width: 100%;
              height: auto;
              padding-top: 58.6%;
              margin: 0 auto;
              background-size: contain;
              background-position: center center;
              background-repeat: no-repeat;
              box-sizing: border-box;
              transform-style: preserve-3d;
            }
            .mbp-display {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              display: block;
              width: 81.3%;
              height: 95.2%;
              margin: 0 auto;
              background-image: radial-gradient(#cfd0d1, #cfd0d1, #adadae);
              border: 1px solid #e5e7e9;
              border-radius: 3.1% / 4%;
              z-index: 1;
            }
            .mbp-display .display-edge {
              display: block;
              position: relative;
              width: 99.37%;
              height: 99.25%;
              margin: 0.3% auto;
              z-index: 2;
              background-color: #262626;
              border-radius: 2.75% / 3.8%;
            }
            .mbp-display .display-edge .bezel {
              display: block;
              position: relative;
              width: 99.5%;
              height: 99.2%;
              margin: auto;
              top: 0.4%;
              border-radius: 2.8% / 3.2%;
              z-index: 3;
              background-color: #010101;
            }
            .mbp-display .display-edge .bezel .display-camera {
              width: .62%;
              height: .95%;
              margin: 1% auto;
              left: 0;
              right: 0;
              position: absolute;
              border-radius: 50%;
              z-index: 5;
              background-color: #303132;
            }
            .mbp-display .display-edge .bezel .display-frame {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 97.65%;
              height: 89.5%;
              margin: 0 auto;
              top: 3.5%;
              left: 0;
              right: 0;
              background-color: #151515;
              overflow: hidden;
              z-index: 1;
            }
            .mbp-display .display-frame img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              filter: brightness(0.7) contrast(1.1);
            }
            .mbp-display .display-frame .frame-content {
              position: absolute;
              inset: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: white;
              text-align: center;
              padding: 20px;
              background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
              z-index: 2;
            }
            .mbp-display .display-frame .frame-content h3 {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 12px;
              line-height: 1.3;
            }
            .mbp-display .display-frame .frame-content p {
              font-size: 13px;
              line-height: 1.4;
              opacity: 0.95;
            }
            .mbp-display .display-edge .bezel .below-display {
              display: flex;
              justify-content: center;
              position: absolute;
              width: 100%;
              height: 4.9%;
              bottom: .15%;
              z-index: 3;
              background-color: #212121;
              border-bottom-right-radius: 2.5% 70%;
              border-bottom-left-radius: 2.5% 70%;
            }
            .mbp-keyboard {
              width: 99.75%;
              height: 7.6%;
              margin: 0 auto;
              position: absolute;
              bottom: 0px;
              left: 0;
              right: 0;
              z-index: 100;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .mbp-keyboard .front {
              width: 100%;
              height: 37.25%;
              position: absolute;
              margin: 0 auto;
              left: 0;
              right: 0;
              top: 0;
              background: linear-gradient( 90deg, #68696b 0%, #757678 .15%, #a0a1a3 .3%, #cccdcf .5%, #e7e8ea .8%, #e8e9eb 1%, #dfe0e2 1.25%, #d1d2d4 1.5%, #adaeb0 2%, #a4a5a7 3%, #bbbdbf 4%, #e1e1e3 8%, #eaebed 15%, #e9eaec 25%, #e9eaec 75%, #eaebed 85%, #e1e1e3 92%, #bbbdbf 96%, #a4a5a7 97%, #adaeb0 98%, #d1d2d4 98.5%, #dfe0e2 98.75%, #e8e9eb 99%, #e7e8ea 99.2%, #cccdcf 99.5%, #a0a1a3 99.7%, #757678 99.85%, #68696b 100%);
              z-index: 100;
              border-radius: 1px;
              display: flex;
              justify-content: center;
              align-items: flex-start;
            }
            .mbp-keyboard .opener-left {
              position: relative;
              width: 6.917%;
              height: 65.5%;
              z-index: 101;
              border-radius: 0 0 0 20px;
              background-color: #c1c2c6;
              background: linear-gradient(180deg, rgba(195, 198, 200, 0.5) 0%, rgba(199, 200, 204, 0.5) 60%, rgba(115, 125, 130, 0.4) 100%), radial-gradient(circle at right, rgba(189, 190, 193, 0.5) 0%, rgba(189, 190, 193, 0.5) 50%, rgba(166, 169, 172, 0.5) 80%, rgba(30, 34, 40, 0.75) 100%);
              background-blend-mode: darken;
            }
            .mbp-keyboard .opener-right {
              position: relative;
              width: 6.917%;
              height: 65.5%;
              z-index: 101;
              border-radius: 0 0 20px 0;
              background-color: #c1c2c6;
              background: linear-gradient(180deg, rgba(195, 198, 200, 0.5) 0%, rgba(199, 200, 204, 0.5) 60%, rgba(115, 125, 130, 0.4) 100%), radial-gradient(circle at left, rgba(189, 190, 193, 0.5) 0%, rgba(189, 190, 193, 0.5) 50%, rgba(166, 169, 172, 0.5) 80%, rgba(30, 34, 40, 0.75) 100%);
              background-blend-mode: darken;
            }
            .mbp-keyboard .bottom-left {
              display: block;
              position: relative;
              width: 50%;
              height: 58%;
              top: 10%;
              z-index: 99;
              background: linear-gradient(180deg, #e5e6e9 0%, #909193 65%, #4e4f51 90%, #323234 96%, #29292b 100%);
              border-bottom-left-radius: 25% 60%;
            }
            .mbp-keyboard .bottom-right {
              display: block;
              position: relative;
              width: 50%;
              height: 58%;
              top: 10%;
              z-index: 99;
              background: linear-gradient(180deg, #e5e6e9 0%, #909193 65%, #4e4f51 90%, #323234 96%, #29292b 100%);
              border-bottom-right-radius: 25% 60%;
            }
            .mbp-shadow {
              width: 95%;
              height: 60%;
              display: flex;
              justify-content: center;
            }
            .mbp-shadow .shadow-left {
              display: block;
              position: relative;
              width: 50%;
              height: 100%;
              top: 10%;
              z-index: 90;
              background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(8, 11, 17, .85) 2.5%, rgba(29, 32, 36, .4) 15%, rgba(255, 255, 255, 0) 50%);
              filter: blur(2px);
              background-blend-mode: multiply;
              border-top-left-radius: 20% 90%;
            }
            .mbp-shadow .shadow-right {
              display: block;
              position: relative;
              width: 50%;
              height: 100%;
              top: 10%;
              z-index: 90;
              background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(8, 11, 17, .85) 2.5%, rgba(29, 32, 36, .4) 15%, rgba(255, 255, 255, 0) 50%);
              filter: blur(2px);
              background-blend-mode: multiply;
              border-top-right-radius: 20% 90%;
            }
          `}</style>
          {[
            {
              image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
              title: "Complete Style Guide PDF",
              desc: "Master the art of dressing for your body type and skin tone"
            },
            {
              image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
              title: "Personal Brand Checklist",
              desc: "Step-by-step checklist to build your image authority framework"
            },
            {
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
              title: "30-Day Action Plan",
              desc: "Daily tasks to implement your new image in 30 days"
            },
          ].map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="mbp-mockup-wrapper" style={{ transform: i === 0 ? 'rotateY(20deg)' : i === 2 ? 'rotateY(-20deg)' : 'rotateY(0deg)' }}>
                <div className="mbp-container">
                  <div className="mbp-display with-glare">
                    <div className="display-edge">
                      <div className="bezel">
                        <div className="display-camera"></div>
                        <div className="display-frame">
                          <img src={bonus.image} alt={bonus.title} />
                          <motion.div
                            animate={{ opacity: bonusInView ? 0 : 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-black flex items-center justify-center z-20"
                          >
                            <motion.div
                              animate={{ scale: [0.8, 1, 0.95] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <style>{`
                                .mbp-apple-logo, .mbp-apple-top span:after, .mbp-apple-middle:after, .mbp-apple-top:before, .mbp-apple-top:after {
                                    background: #FFF;
                                }
                                .mbp-apple-footer, .mbp-apple-middle span, .mbp-apple-middle, .mbp-apple-top, .mbp-apple-top span {
                                    background: #000;
                                }
                                .mbp-apple-logo {
                                    width: 60px;
                                    height: 50px;
                                    border-radius: 36% 36% 41% 41% / 42% 42% 75% 75%;
                                    position: relative;
                                }
                                .mbp-apple-footer {
                                    position: absolute;
                                    width: 60%;
                                    height: 62%;
                                    right: -40%;
                                    top: 8%;
                                    border-radius: 60%;
                                    background: #000 !important;
                                }
                                .mbp-apple-middle span {
                                    display: block;
                                    position: absolute;
                                    border-radius: 100% 100% 0% 0%;
                                    width: 24.5%;
                                    height: 400%;
                                    bottom: -239%;
                                    left: 38%;
                                }
                                .mbp-apple-middle {
                                    position: absolute;
                                    width: 100%;
                                    height: 4%;
                                    bottom: -1%;
                                }
                                .mbp-apple-middle:before {
                                    content: '';
                                    position: absolute;
                                    width: 24%;
                                    height: 400%;
                                    border-radius: 0% 0% 100% 100%;
                                    left: 21%;
                                    bottom: 38%;
                                    background: #FFF;
                                }
                                .mbp-apple-middle:after {
                                    content: '';
                                    position: absolute;
                                    width: 23.4%;
                                    height: 400%;
                                    border-radius: 0% 0% 100% 100%;
                                    right: 21%;
                                    bottom: 38%;
                                }
                                .mbp-apple-top span {
                                    display: block;
                                    position: absolute;
                                    border-radius: 0 0 44% 44% / 0 0 100% 100%;
                                    width: 63%;
                                    height: 259%;
                                    top: -92%;
                                    left: 18.6%;
                                    z-index: 3;
                                }
                                .mbp-apple-top span:after {
                                    border-radius: 100% 0 100% 0;
                                    content: "";
                                    height: 242%;
                                    left: 41%;
                                    position: absolute;
                                    top: -193%;
                                    width: 90%;
                                }
                                .mbp-apple-top {
                                    position: absolute;
                                    width: 42%;
                                    height: 4%;
                                    top: 0px;
                                    left: 29%;
                                }
                                .mbp-apple-top:before {
                                    content: '';
                                    position: absolute;
                                    width: 62%;
                                    height: 260%;
                                    border-radius: 100% 100% 0% 0% / 100% 200% 0% 0%;
                                    left: -27%;
                                    top: 1%;
                                }
                                .mbp-apple-top:after {
                                    content: '';
                                    position: absolute;
                                    width: 62%;
                                    height: 260%;
                                    border-radius: 100% 100% 0% 0% / 200% 100% 0% 0%;
                                    right: -27%;
                                    top: 1%;
                                }
                              `}</style>
                              <div className="mbp-apple-logo">
                                <div className="mbp-apple-top"><span></span></div>
                                <div className="mbp-apple-middle"><span></span></div>
                                <div className="mbp-apple-footer"></div>
                              </div>
                            </motion.div>
                          </motion.div>
                          <motion.div
                            animate={{ opacity: bonusInView ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="frame-content"
                          >
                            <h3>{bonus.title}</h3>
                            <p>{bonus.desc}</p>
                          </motion.div>
                        </div>
                        <div className="below-display"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mbp-keyboard">
                    <div className="front">
                      <div className="opener-left"></div>
                      <div className="opener-right"></div>
                    </div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <div className="mbp-shadow">
                      <div className="shadow-left"></div>
                      <div className="shadow-right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20the%20Image%20Authority%20Blueprint%20Workshop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-8 rounded-2xl shadow-2xl transition-all relative overflow-hidden group max-w-lg cursor-pointer block"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="font-bold text-base md:text-lg leading-tight whitespace-nowrap text-white">Yes, Ready To Transform Image In 90 Days</p>
              <p className="text-xs font-bold mt-2">
                <span className="line-through text-red-100 mr-2">₹999</span>
                <span className="text-yellow-300">₹199</span>
              </p>
            </div>
          </a>

          <div className="flex items-center justify-center gap-3">
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </section>

    {/* ── BEFORE AND AFTER ── */}
    <section className="bg-white px-6 md:px-16 lg:px-28 py-20 md:py-28" style={{
      backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)`,
      backgroundSize: '30px 30px',
    }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-center text-3xl md:text-5xl font-bold mb-2 text-gray-900"
        >
          Before And After Getting
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-green-600 text-3xl md:text-4xl font-black mb-16"
        >
          "Image Authority Blueprint"
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mb-12">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-16 h-16 bg-gray-900 rounded-full border-4 border-red-600 flex items-center justify-center shadow-lg">
                <X className="w-8 h-8 text-red-600" strokeWidth={3} />
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-10 pt-16">
              <img src="/assets/bf33.jpg" alt="Before" className="w-full h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-center text-2xl font-bold text-red-500 mb-8">BEFORE</h3>
              <div className="space-y-4">
                {[
                  "Feeling invisible in professional and social settings",
                  "Struggling with self-confidence in your appearance",
                  "Don't know how to dress for your body type and skin tone",
                  "Missing out on opportunities due to weak personal presence",
                  "Overwhelmed by fashion choices and styling decisions",
                  "Comparing yourself to others with 'natural' style",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 items-center"
                  >
                    <div className="text-red-600 font-bold text-2xl flex-shrink-0">✕</div>
                    <p className="text-gray-200 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-16 h-16 bg-green-700 rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-lg">
                <Check className="w-8 h-8 text-yellow-400" strokeWidth={3} />
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-green-800 text-white rounded-2xl p-10 pt-16">
              <img src="/assets/ba2.jpg" alt="After" className="w-full h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-center text-2xl font-bold text-green-400 mb-8">AFTER</h3>
              <div className="space-y-4">
                {[
                  "Command respect and admiration in every room you walk into",
                  "Feel confident, poised, and authentically beautiful every day",
                  "Master the art of dressing for YOUR unique body and coloring",
                  "Attract high-value opportunities through powerful personal presence",
                  "Build a signature style that feels effortless and authentic",
                  "Become a style inspiration others want to emulate",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 items-center"
                  >
                    <div className="text-green-400 font-bold text-2xl flex-shrink-0">✓</div>
                    <p className="text-green-50 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20the%20Image%20Authority%20Blueprint%20Workshop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-8 rounded-2xl shadow-2xl transition-all relative overflow-hidden group max-w-lg cursor-pointer block"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="font-bold text-base md:text-lg leading-tight whitespace-nowrap text-white">Yes, Ready To Transform Image In 90 Days</p>
              <p className="text-xs font-bold mt-2">
                <span className="line-through text-red-100 mr-2">₹999</span>
                <span className="text-yellow-300">₹199</span>
              </p>
            </div>
          </a>

          <div className="flex items-center justify-center gap-3">
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </section>

    {/* ── TESTIMONIALS SECTION ── */}
    <section className="bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="grid md:grid-cols-2 gap-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.95, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="/assets/IMG_9904.jpg"
          alt="Success Stories 1"
          className="w-full object-cover h-[500px]"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="/assets/hero-3.jpg"
          alt="Success Stories 2"
          className="w-full object-cover h-[500px]"
        />
      </div>
    </section>

    {/* ── MEET YOUR COACH ── */}
    <section className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 px-4 sm:px-6 md:px-16 lg:px-28 py-12 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-start">
          {/* Coach Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ perspective: '1000px' }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src="/assets/evolvere7-portrait.jpg"
                alt="Coach"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Coach Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white flex flex-col justify-center h-full md:-ml-6 order-1 md:order-2"
          >
            <p className="text-sm md:text-base tracking-widest uppercase text-white mb-3 md:mb-2 font-light">Meet Your Coach</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-yellow-400 font-bold">Nilima Sethia</h2>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-white/95 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span>India's Leading Image Authority Coach</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span>TEDx Speaker</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span>Founder of Image Authority Blueprint</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span>7+ Years | 120+ Transformations</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span>2 Million+ Lives Impacted</span>
              </div>
            </div>

            <motion.a
              href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20the%20Image%20Authority%20Blueprint%20Workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-2xl shadow-2xl transition-all relative overflow-hidden group cursor-pointer mb-4 w-fit"
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              />
              <div className="relative z-10 text-center">
                <p className="font-bold text-base mb-1">Yes, I'm Ready To Become a 6-Figure Coach</p>
                <p className="text-xs font-semibold">
                  <span className="line-through text-red-100 mr-2">₹999</span>
                  <span className="font-bold text-yellow-300">₹199</span>
                </p>
              </div>
            </motion.a>

            <div className="flex items-center gap-3 ml-12">
              <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-6 object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SUCCESS STORIES ── */}
    <section className="bg-white text-gray-900 px-6 md:px-16 lg:px-28 py-16 md:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-gray-600 mb-3 block">Success Stories</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 font-bold leading-tight">
            Meet Our Champions
          </h2>
          <p className="text-gray-700 font-sans font-light text-sm max-w-2xl mx-auto">
            Real transformations from women just like you who took the leap.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: "Client 1", image: "/assets/9-768x768.jpg" },
            { name: "Client 2", image: "/assets/8-768x768.jpg" },
            { name: "Client 3", image: "/assets/1-768x768.jpg" },
            { name: "Client 4", image: "/assets/1-768x768-1.jpg" },
            { name: "Client 5", image: "/assets/10-768x768.jpg" },
            { name: "Client 6", image: "/assets/11-768x768.jpg" },
            { name: "Client 7", image: "/assets/Client-Transformation-4.jpg" },
            { name: "Client 8", image: "/assets/Client-Transformation-5.jpg" },
          ].map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-yellow-400"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-yellow-900/80 group-hover:via-black/30 transition-all duration-500"></div>

                {/* Star Badge */}
                <motion.div
                  className="absolute top-3 right-3 bg-yellow-400 text-gray-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Star size={16} className="fill-current" />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle size={14} className="text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-sm tracking-wider uppercase text-center group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">
                  {story.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-10 shadow-2xl transition-all relative overflow-hidden group cursor-pointer w-fit"
            style={{ borderRadius: "1rem" }}
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center">
              <p className="font-bold text-base mb-1">Yes, I'm Ready To Join The Workshop</p>
              <p className="text-xs font-semibold">
                <span className="line-through text-red-100 mr-2">₹1999</span>
                <span className="font-bold text-yellow-300">₹499</span>
              </p>
            </div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-6 object-contain" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── IMAGINE YOUR LIFE ── */}
    <section className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 px-6 md:px-16 lg:px-28 py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-bold leading-tight"
        >
          <span className="text-white">Imagine Your Life</span>
          <br />
          <span className="text-yellow-400">90 Days From Now</span>
        </motion.h2>

        <div className="space-y-4">
          {[
            "Waking Up With Confidence, Turning Heads With Your Presence",
            "Booking More Clients Without Begging or Discounting",
            "Building Genuine Connections That Lead To Long-Term Relationships",
            "Creating A Personal Brand That Commands Respect & Authority",
            "Earning What You Deserve Without Feeling Like An Imposter",
            "Inspiring Others With Your Transformation & Authenticity",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white text-gray-900 p-5 rounded-2xl font-bold text-center md:text-lg shadow-lg hover:shadow-xl hover:bg-yellow-50 transition-all duration-300 border-2 border-transparent hover:border-yellow-400"
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              {benefit}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-3 mt-16">
          <motion.a
            href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20the%20Image%20Authority%20Blueprint%20Workshop"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-2xl shadow-2xl transition-all relative overflow-hidden group cursor-pointer w-fit"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center">
              <p className="font-bold text-base mb-1">Start Your 90-Day Transformation Today</p>
              <p className="text-xs font-semibold">
                <span className="line-through text-red-100 mr-2">₹999</span>
                <span className="font-bold text-yellow-300">₹199</span>
              </p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-6 object-contain" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── CROSSROAD ── */}
    <section className="bg-white text-gray-900 px-6 md:px-16 lg:px-28 py-20 md:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-bold leading-tight text-gray-900"
        >
          You're At A <span className="text-red-600">Crossroad</span>...
        </motion.h2>

        {/* Two Paths */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Path 1 - Red */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <h3 className="font-bold text-2xl md:text-3xl mb-4 text-center">PATH 1</h3>
            <p className="text-center text-base leading-relaxed">
              Stay stuck with low-priced clients, struggling for confidence, and watching others succeed while you remain invisible and undervalued.
            </p>
          </motion.div>

          {/* Path 2 - Green */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <h3 className="font-bold text-2xl md:text-3xl mb-4 text-center">PATH 2</h3>
            <p className="text-center text-base leading-relaxed">
              Invest just ₹199 and 90 days to build unshakeable confidence, command premium prices, and become the authority clients can't ignore.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <motion.a
            href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20the%20Image%20Authority%20Blueprint%20Workshop"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-2xl shadow-2xl transition-all relative overflow-hidden group cursor-pointer w-fit"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center">
              <p className="font-bold text-base mb-1">Yes, I Choose Path 2 - Let's Transform</p>
              <p className="text-xs font-semibold">
                <span className="line-through text-red-100 mr-2">₹999</span>
                <span className="font-bold text-yellow-300">₹199</span>
              </p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-6 object-contain" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── CONTINUOUS MARQUEE ── */}
    <section className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 py-20 md:py-28 relative overflow-hidden">
      <div className="px-6 md:px-16 lg:px-28 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight"
        >
          <span className="text-yellow-400">Beyond The Income:</span>
          <br />
          <span className="text-white">The Community & Support You'll Gain</span>
        </motion.h2>
      </div>

      {/* Marquee Container - Full Width */}
      <div className="relative overflow-hidden w-screen -ml-[50vw] left-1/2 mb-12">
        <motion.div
          animate={{ x: [0, -3000] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6"
        >
          {/* First Set */}
          {[
            "/assets/hero-1.jpg",
            "/assets/hero-2.jpg",
            "/assets/hero-3.jpg",
            "/assets/hero-4.jpg",
            "/assets/IMG_9904.jpg",
            "/assets/stylist-portrait.jpg",
          ].map((image, i) => (
            <motion.div
              key={`group1-${i}`}
              className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={image}
                alt={`Community moment ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}

          {/* Duplicate Set for seamless loop */}
          {[
            "/assets/hero-1.jpg",
            "/assets/hero-2.jpg",
            "/assets/hero-3.jpg",
            "/assets/hero-4.jpg",
            "/assets/IMG_9904.jpg",
            "/assets/stylist-portrait.jpg",
          ].map((image, i) => (
            <motion.div
              key={`group2-${i}`}
              className="flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={image}
                alt={`Community moment duplicate ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col items-center gap-3">
        <motion.a
          href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20the%20Image%20Authority%20Blueprint%20Workshop"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-2xl shadow-2xl transition-all relative overflow-hidden group cursor-pointer w-fit"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          />
          <div className="relative z-10 text-center">
            <p className="font-bold text-base mb-1">Yes, I'm Ready To Join This Community</p>
            <p className="text-xs font-semibold">
              <span className="line-through text-red-100 mr-2">₹999</span>
              <span className="font-bold text-yellow-300">₹199</span>
            </p>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-6 object-contain" />
        </motion.div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section className="bg-white text-gray-900 px-6 md:px-16 lg:px-28 py-20 md:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-12 font-bold text-gray-900"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {[
            {
              question: "I don't have a styling background. Can I really become an image authority?",
              answer: "Absolutely! Our 90-day program is designed for beginners. We teach you everything from scratch, including the psychology of personal branding, styling fundamentals, and how to position yourself as an authority in your niche. No prior experience needed."
            },
            {
              question: "How can I find time for this with my busy schedule?",
              answer: "The workshop is designed to fit into busy schedules. You'll only need to dedicate 3 hours per week for 90 days. The modules are flexible, and you can complete them at your own pace. Many of our students are working professionals who've successfully completed the program."
            },
            {
              question: "My family doesn't support this career path. How can I convince them?",
              answer: "Once you start seeing results - increased confidence, more bookings, and higher income - your family will see the transformation. We also provide you with testimonials and success stories from our community that you can share with your loved ones."
            },
            {
              question: "Is the styling market saturated?",
              answer: "While there are many stylists, very few have built a strong personal brand and authority. Our focus is on helping you differentiate yourself and command premium prices, which is where the real money is made."
            },
            {
              question: "I've tried other programs before without success. Why will this be different?",
              answer: "Our program combines proven styling techniques with psychological coaching and personal branding strategies. We focus on building confidence and authority, not just teaching styling skills. Plus, you'll have access to our supportive community for accountability."
            },
            {
              question: "What if I invest in this workshop and it doesn't work for me?",
              answer: "We're confident in our program's results. However, your success depends on implementing what you learn. We provide step-by-step guidance, community support, and resources to help you succeed. Your commitment matters as much as our teaching."
            },
            {
              question: "Is this a live workshop or pre-recorded?",
              answer: "The workshop includes both pre-recorded modules for flexibility and live Q&A sessions with Nilima for personalized guidance. This hybrid approach gives you the best of both worlds - convenience and direct interaction."
            },
            {
              question: "How is this workshop different from free YouTube videos on styling?",
              answer: "While YouTube has free content, it lacks structure, personalization, and accountability. Our workshop is a comprehensive 90-day system with daily coaching, community support, proven frameworks, and direct access to an expert. It's like comparing self-study to having a personal coach."
            },
            {
              question: "How interactive is the workshop? Can I ask specific questions?",
              answer: "Very interactive! You'll have access to live Q&A sessions, our private community group, and direct messaging options. You can ask any questions and get personalized guidance from Nilima and our team throughout the 90 days."
            }
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <motion.a
            href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20the%20Image%20Authority%20Blueprint%20Workshop"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-2xl shadow-2xl transition-all relative overflow-hidden group cursor-pointer w-fit"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            />
            <div className="relative z-10 text-center">
              <p className="font-bold text-base mb-1">Yes, I'm Ready To Become a 6-Figure Coach</p>
              <p className="text-xs font-semibold">
                <span className="line-through text-red-100 mr-2">₹999</span>
                <span className="font-bold text-yellow-300">₹199</span>
              </p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img src="/assets/Group10000070131_kwmzm_921.png" alt="Payment methods" className="h-6 object-contain" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── FOOTER ── */}
    <footer className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 px-6 md:px-16 lg:px-28 pt-8 md:pt-10 pb-8 md:pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white text-sm font-medium tracking-wide"
        >
          © 2026 Evolvere7. All rights reserved.
        </motion.p>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 flex-wrap"
        >
          {[
            { label: "Main Website", url: "https://golden-hour-style.vercel.app/" },
            { label: "Contact", url: "https://golden-hour-style.vercel.app/" },
            { label: "Terms & Privacy", url: "https://golden-hour-style.vercel.app/" },
            { label: "About", url: "https://golden-hour-style.vercel.app/" },
            { label: "WhatsApp", url: "https://wa.me/919876543210" },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-white text-sm font-medium hover:text-yellow-400 transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>

    {/* ── FIXED BOTTOM CTA ── */}
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 to-blue-900 px-6 md:px-16 lg:px-28 py-2 md:py-2 shadow-2xl border-t border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-6 h-16 md:h-20 relative">
        {/* Image */}
        <div className="flex-shrink-0 hidden md:flex items-end justify-center -mb-2">
          <img
            src="/assets/IMG_9903-Photoroom.png"
            alt="Coach"
            className="h-28 md:h-32 object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex-shrink-0">
          <h3 className="font-display text-base md:text-lg text-white font-bold leading-tight whitespace-nowrap">
            Become a <span className="text-yellow-400">6-Figure Coach</span>
            <br />
            In 90 Days
          </h3>
        </div>

        {/* Button */}
        <motion.a
          href="https://wa.me/919876543210?text=I%20want%20to%20register%20for%20the%20Image%20Authority%20Blueprint%20Workshop"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 px-6 rounded-full font-bold text-sm md:text-base shadow-lg transition-all relative overflow-hidden group cursor-pointer w-fit whitespace-nowrap"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          />
          <span className="relative z-10">Join Now</span>
        </motion.a>
      </div>
    </motion.div>
  </div>
  );
};

export default App;
