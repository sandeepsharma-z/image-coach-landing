import ServicePageTemplate from "@/components/ServicePageTemplate";

const heroImg = "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=90";

const forWho = [
  { title: "The Confused Dresser", body: "You have a wardrobe full of clothes but nothing to wear. Every morning is a decision battle and you arrive at work feeling like your outfit does not represent who you actually are." },
  { title: "The Over-Shopper", body: "You keep buying new pieces but the problem never gets solved. You need a system, not more clothes. A strategic capsule wardrobe built around your specific role and goals." },
  { title: "The Style Avoider", body: "You have always told yourself that style is not your thing — but deep down, you know that your appearance is holding back how people perceive you and what you are being offered." },
  { title: "The Transition Dresser", body: "You have been promoted, changed industries, or are stepping into a more visible role. Your wardrobe does not yet reflect your new level and you need it to catch up — fast." },
];

const steps = [
  { num: "01", title: "Wardrobe Audit", body: "We go through everything you own — physically or virtually — and identify what works, what does not, and what gaps need to be filled. Most clients are shocked to discover what they already have.", cta: "Start Here", img: "https://images.unsplash.com/photo-1558171813-2bc4564ca90e?w=800&q=90" },
  { num: "02", title: "Your Style Blueprint", body: "We define your signature style — the specific colours, silhouettes, fabrics, and combinations that align with your role, body, colouring, and goals. This becomes your permanent decision-making framework.", cta: "Build My Blueprint", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=90" },
  { num: "03", title: "Capsule Construction", body: "We build your capsule wardrobe — a strategic core of pieces that mix, match, and multiply into a full professional wardrobe. Every item earns its place. Nothing is wasted. Shopping becomes intentional.", cta: "Build My Capsule", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=90" },
  { num: "04", title: "Style Mastery for Life", body: "By the end, you have a system for getting dressed that takes five minutes and always looks intentional. You understand your style so deeply that you never make another expensive mistake again.", cta: "Apply Now", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=90" },
];

const WardrobeSystem = () => (
  <ServicePageTemplate
    badge="Signature Program"
    heroTitle={["Professional", "Wardrobe", "System"]}
    heroImg={heroImg}
    forWho={forWho}
    steps={steps}
  />
);

export default WardrobeSystem;
