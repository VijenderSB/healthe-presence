import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ServicesSection from "@/components/landing/ServicesSection";
import PlanCoverageSection from "@/components/landing/PlanCoverageSection";
import WhyDigitalSection from "@/components/landing/WhyDigitalSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LeadCaptureForm from "@/components/landing/LeadCaptureForm";
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
      <PlanCoverageSection />
      <WhyDigitalSection />
      <WhyUsSection />
      <TestimonialsSection />
      <LeadCaptureForm />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
