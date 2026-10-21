import type { RouteRecord } from "vite-react-ssg";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingButtons />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "services", element: <Services /> },
      { path: "services/influencer-marketing", element: <InfluencerMarketing /> },
      { path: "services/website-design", element: <WebsiteDesign /> },
      { path: "services/social-media", element: <SocialMedia /> },
      { path: "services/video-production", element: <VideoProduction /> },
      { path: "services/youtube-management", element: <YouTubeManagement /> },
      { path: "services/seo", element: <SEO /> },
      { path: "services/geo", element: <GEO /> },
      { path: "services/branding", element: <Branding /> },
      { path: "services/patient-engagement", element: <PatientEngagement /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "careers", element: <Careers /> },
      { path: "blog", element: <Blog /> },
      { path: "faq", element: <FAQ /> },
      { path: "specialties", element: <Specialties /> },
      { path: "cities", element: <Cities /> },

      // Medical specialty landing pages (prerendered)
      ...specialties.map((specialty) => ({
        path: specialty.slug,
        element: <SpecialtyPage />,
      })),

      // City landing pages (prerendered)
      ...cities.map((city) => ({
        path: city.slug,
        element: <CityPage />,
      })),

      { path: "*", element: <NotFound /> },
    ],
  },
];
