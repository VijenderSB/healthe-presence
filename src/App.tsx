import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import SocialMedia from "./pages/services/SocialMedia";
import VideoProduction from "./pages/services/VideoProduction";
import YouTubeManagement from "./pages/services/YouTubeManagement";
import SEO from "./pages/services/SEO";
import Branding from "./pages/services/Branding";
import PatientEngagement from "./pages/services/PatientEngagement";
import AboutUs from "./pages/AboutUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import SpecialtyPage from "./pages/specialties/SpecialtyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/video-production" element={<VideoProduction />} />
          <Route path="/services/youtube-management" element={<YouTubeManagement />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/patient-engagement" element={<PatientEngagement />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Medical Specialty Pages */}
          <Route path="/eyecare-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/dental-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/cosmetic-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/dermatology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/hair-transplant-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/ivf-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/gynaecology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/cardiology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/orthopaedic-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/neurology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/mental-health-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/psychology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/oncology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/diagnostic-lab-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/radiology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/physician-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/pediatric-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/ent-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/urology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/gastroenterology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/pulmonology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/nephrology-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/diabetes-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/pain-management-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/physiotherapy-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/homeopathy-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/ayurveda-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/alternative-medicine-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/naturopathy-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/hospital-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/doctor-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/telemedicine-digital-marketing-agency-india" element={<SpecialtyPage />} />
          <Route path="/home-healthcare-digital-marketing-agency-india" element={<SpecialtyPage />} />
          
          {/* Dynamic specialty route as fallback */}
          <Route path="/:slug" element={<SpecialtyPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
