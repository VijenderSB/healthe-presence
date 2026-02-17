import { Helmet } from "react-helmet-async";
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
import { SITE_CONFIG } from "@/lib/constants";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Transess - #1 Medical Digital Marketing Agency India | Doctor & Hospital Marketing</title>
        <meta name="description" content="India's leading 360° medical digital marketing agency for doctors, clinics & hospitals. Expert healthcare SEO, website design, social media, video production & patient acquisition. 500+ clients, 98% satisfaction." />
        <meta name="keywords" content="medical digital marketing India, doctor marketing agency, hospital marketing, healthcare SEO, medical website design, doctor social media, patient acquisition, clinic marketing, healthcare branding, medical video production, Transess" />
        <link rel="canonical" href={SITE_CONFIG.BASE_URL} />
        <meta property="og:title" content="Transess - #1 Medical Digital Marketing Agency India" />
        <meta property="og:description" content="360° digital marketing for doctors & hospitals. SEO, website design, social media, video production. 500+ healthcare clients. Get free consultation!" />
        <meta property="og:url" content={SITE_CONFIG.BASE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transess - #1 Medical Digital Marketing Agency India" />
        <meta name="twitter:description" content="360° digital marketing for doctors, clinics & hospitals. Get found by patients online!" />
        <meta name="twitter:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
      </Helmet>
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
