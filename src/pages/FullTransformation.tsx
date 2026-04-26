import ServicePageTemplate from "@/components/ServicePageTemplate";

const heroImg = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=90";

const forWho = [
  { title: "The Total Reset", body: "You are done with incremental improvements. You want a complete, head-to-toe transformation of how you show up — in person, online, and on camera. All at once." },
  { title: "The Visibility Seeker", body: "You are ready to step into the spotlight — speaking engagements, media appearances, industry events — and you need every element of your presence to be flawless and consistent." },
  { title: "The Business Founder", body: "You are building a business and your personal brand IS your brand. You cannot afford a misaligned image. You need a transformation that is built for scale and premium positioning." },
  { title: "The Life Transitioner", body: "You are going through a major life or career transition — divorce, relocation, industry change — and you are using this moment to redefine who you are and how the world sees you." },
];

const steps = [
  { num: "01", title: "Full Presence Diagnostic", body: "We conduct the most comprehensive audit of your image, presence, and personal brand possible — wardrobe, body language, digital footprint, on-camera presence, and vocal authority. Nothing is left unexamined.", cta: "Start Here", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=90" },
  { num: "02", title: "Transformation Strategy", body: "We build your complete 12-week transformation roadmap — every week has a clear focus, deliverable, and milestone. You will always know exactly where you are and what is coming next.", cta: "See the Strategy", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=90" },
  { num: "03", title: "Immersive Execution", body: "Over 12 weeks, you work through every layer of your presence — wardrobe, movement, voice, LinkedIn, photo direction, on-camera confidence, and boardroom mastery. Weekly sessions keep you on track and accelerating.", cta: "Begin the Shift", img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=90" },
  { num: "04", title: "Iconic Signature Presence", body: "By week 12, you have a fully integrated, signature presence that is unmistakably yours. You walk into any room — physical or virtual — and command it without effort. This is your new baseline.", cta: "Apply Now", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90" },
];

const FullTransformation = () => (
  <ServicePageTemplate
    badge="12-Week Program"
    heroTitle={["Full", "Transformation"]}
    heroImg={heroImg}
    forWho={forWho}
    steps={steps}
  />
);

export default FullTransformation;
