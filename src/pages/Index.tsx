import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TransformationSection from "@/components/TransformationSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";
import BlogSection from "@/components/BlogSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSlider />
    <TrustStrip />
    <AboutSection />
    <ServicesSection />
    <FeaturesSection />
    <TransformationSection />
    <ProcessSection />
    <TestimonialsSection />
    <BenefitsSection />
    <CtaSection />
    <BlogSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
