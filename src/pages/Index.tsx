import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ServicesSection from "@/components/landing/ServicesSection";
import PlanCoverageSection from "@/components/landing/PlanCoverageSection";
import WhyDigitalSection from "@/components/landing/WhyDigitalSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import LeadCaptureForm from "@/components/landing/LeadCaptureForm";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Transess - Ethical, NMC-Compliant Medical Marketing for Doctors & Hospitals</title>
        <meta name="description" content="Transess is a medical digital marketing agency helping doctors, clinics & hospitals build an ethical, NMC-compliant digital presence — healthcare SEO, website design, social media, and public health education content." />
        <meta name="keywords" content="medical digital marketing India, NMC compliant marketing, doctor marketing agency, hospital marketing, healthcare SEO, medical website design, doctor social media, clinic marketing, healthcare branding, Transess" />
        <link rel="canonical" href={SITE_CONFIG.BASE_URL} />
        <meta property="og:title" content="Transess - Ethical, NMC-Compliant Medical Marketing" />
        <meta property="og:description" content="A medical digital marketing agency for doctors, clinics & hospitals. Ethical, NMC-compliant SEO, website design, social media & health education content." />
        <meta property="og:url" content={SITE_CONFIG.BASE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transess - Ethical, NMC-Compliant Medical Marketing" />
        <meta name="twitter:description" content="A medical digital marketing agency for doctors, clinics & hospitals. Ethical, NMC-compliant digital presence." />
        <meta name="twitter:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
      </Head>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PlanCoverageSection />
      <WhyDigitalSection />
      <WhyUsSection />
      <LeadCaptureForm />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
