import ServicePageTemplate from "@/components/ServicePageTemplate";

const heroImg = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=90";

const forWho = [
  { title: "The New Leader", body: "You have been recently promoted into a leadership role and need to establish authority fast. Your team and peers must trust your presence before your experience." },
  { title: "The Credibility Gap", body: "You have the experience and the results — but you are not perceived as senior as you actually are. Your image and presence are not matching your expertise level." },
  { title: "The Career Accelerator", body: "You have your eye on the next promotion in the next six months. You need to start showing up at that level now — before the decision is made." },
  { title: "The Brand Builder", body: "You are building a personal brand alongside your corporate career. You need a cohesive authority presence that works both inside the boardroom and online." },
];

const steps = [
  { num: "01", title: "Authority Audit", body: "We identify exactly where your current presence is costing you credibility. What are the gaps between how you see yourself and how decision-makers see you? This is where we find your fastest leverage points.", cta: "Start Here", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=90" },
  { num: "02", title: "Power Presence Blueprint", body: "We architect a 60-day roadmap specific to your role, your goals, and the people you need to influence. Every element — visual, vocal, physical — is intentionally designed for authority.", cta: "See the Blueprint", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=90" },
  { num: "03", title: "Execute with Precision", body: "Over 60 days, you implement the blueprint with biweekly coaching, real-time feedback, and accountability. You will feel the shift in how people listen to you, defer to you, and follow you.", cta: "Begin the Shift", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=90" },
  { num: "04", title: "Lock In Your Authority", body: "By the end of 60 days, authority is no longer something you have to perform — it is something you embody. You walk into every room and people know, immediately, that you are the one in charge.", cta: "Apply Now", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90" },
];

const AuthorityBuild = () => (
  <ServicePageTemplate
    badge="60-Day Program"
    heroTitle={["Authority", "Build", "System"]}
    heroImg={heroImg}
    forWho={forWho}
    steps={steps}
  />
);

export default AuthorityBuild;
