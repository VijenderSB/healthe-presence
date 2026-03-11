import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingButtons from "./components/FloatingButtons";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import SocialMedia from "./pages/services/SocialMedia";
import VideoProduction from "./pages/services/VideoProduction";
import YouTubeManagement from "./pages/services/YouTubeManagement";
import SEO from "./pages/services/SEO";
import GEO from "./pages/services/GEO";
import Branding from "./pages/services/Branding";
import PatientEngagement from "./pages/services/PatientEngagement";
import AboutUs from "./pages/AboutUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Specialties from "./pages/Specialties";
import SpecialtyPage from "./pages/specialties/SpecialtyPage";
import Cities from "./pages/Cities";
import CityPage from "./pages/cities/CityPage";
import { cities } from "./data/cities";
import { specialties } from "./data/specialties";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingButtons />
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
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/cities" element={<Cities />} />
          
          {/* Medical Specialty Pages - Dynamic */}
          {specialties.map((specialty) => (
            <Route key={specialty.id} path={`/${specialty.slug}`} element={<SpecialtyPage />} />
          ))}
          
          {/* City Landing Pages - Dynamic */}
          {cities.map((city) => (
            <Route key={city.id} path={`/${city.slug}`} element={<CityPage />} />
          ))}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
