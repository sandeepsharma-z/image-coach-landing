import ServicePageTemplate from "@/components/ServicePageTemplate";

const heroImg = "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1600&q=90";

const forWho = [
  { title: "The Camera Avoider", body: "You turn off your camera on every video call you can. You know it is hurting your visibility and your reputation but the discomfort is real and you do not know how to fix it." },
  { title: "The Flat Presenter", body: "You can run a meeting in person — but the moment it goes virtual, you lose the room. Your energy does not translate on screen and people stop paying attention." },
  { title: "The Aspiring Speaker", body: "You want to be a keynote speaker, podcast guest, or thought leader — but your on-camera presence does not yet match the credibility of your ideas. That gap is costing you opportunities." },
  { title: "The Meeting Invisible", body: "You sit in meetings — in person or virtual — and your voice gets talked over. Your body language does not signal authority. You need a system that makes you impossible to ignore." },
];

const steps = [
  { num: "01", title: "Presence Diagnosis", body: "We analyse exactly how you currently show up — on camera, in meetings, and in presentations. We identify the specific behaviours, habits, and patterns that are reducing your authority and visibility.", cta: "Start Here", img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=90" },
  { num: "02", title: "Your Presence System", body: "We build your complete on-camera and meeting presence system — from how you frame yourself on camera to how you enter a room, take up space, and use your voice to command attention.", cta: "Build My System", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=90" },
  { num: "03", title: "Practise and Refine", body: "Through recorded practice sessions and live coaching, you implement your presence system until it becomes second nature. Real feedback on real performances — no theory, only results.", cta: "Begin the Shift", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90" },
  { num: "04", title: "Command Every Room", body: "By the end, you walk into every meeting and every camera frame with intention and authority. You are seen, heard, and remembered — on screen and in person — every single time.", cta: "Apply Now", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=90" },
];

const OnCameraPresence = () => (
  <ServicePageTemplate
    badge="Focused Program"
    heroTitle={["On-Camera", "Meeting", "Presence"]}
    heroImg={heroImg}
    forWho={forWho}
    steps={steps}
  />
);

export default OnCameraPresence;
