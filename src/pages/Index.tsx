import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhyDigitalSection from "@/components/landing/WhyDigitalSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <WhyDigitalSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
