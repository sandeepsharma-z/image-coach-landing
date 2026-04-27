import ServicePageTemplate from "@/components/ServicePageTemplate";

const heroImg = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&q=90";

const forWho = [
  { title: "The Invisible Expert", body: "You have the knowledge, the results, and the track record — but your online presence does not reflect any of it. You are invisible in the exact spaces where your ideal clients and opportunities are looking." },
  { title: "The Inconsistent Brand", body: "Your LinkedIn says one thing. Your website says another. Your photos are outdated or mismatched. Your personal brand is scattered — and scattered brands do not attract premium opportunities." },
  { title: "The Corporate Escapee", body: "You are transitioning out of corporate into entrepreneurship, consulting, or speaking. You need to build a personal brand from scratch that positions you as the premium authority in your space." },
  { title: "The Premium Seeker", body: "You are attracting clients or employers — but not the calibre you want. Your visual identity and brand messaging need to be elevated to match the premium level you are targeting." },
];

const steps = [
  { num: "01", title: "Brand Audit", body: "We conduct a full audit of your current personal brand — LinkedIn, website, photography, social media, and messaging. We identify exactly what is working, what is not, and what is missing.", cta: "Start Here", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=90" },
  { num: "02", title: "Brand Architecture", body: "We define your brand positioning — your niche, your message, your visual identity system, and your content pillars. Every element is designed around the audience you want to attract and the authority you want to own.", cta: "Build My Brand", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=90" },
  { num: "03", title: "Brand Build and Launch", body: "We execute the brand — LinkedIn profile overhaul, photo direction, bio writing, visual identity guidelines, and content strategy. Everything goes live with intention and precision.", cta: "Launch My Brand", img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=90" },
  { num: "04", title: "Own Your Market", body: "By the end, you have a personal brand that works for you around the clock. Premium opportunities find you. Your name carries weight in your space. Your brand and your reality finally match.", cta: "Apply Now", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=90" },
];

const PersonalBrand = () => (
  <ServicePageTemplate
    badge="Brand Program"
    heroTitle={["Personal", "Brand", "Identity"]}
    heroImg={heroImg}
    forWho={forWho}
    steps={steps}
  />
);

export default PersonalBrand;
