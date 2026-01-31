import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// All routes to prerender for SEO
const staticRoutes = [
  "/",
  "/services",
  "/services/influencer-marketing",
  "/services/website-design",
  "/services/social-media",
  "/services/video-production",
  "/services/youtube-management",
  "/services/seo",
  "/services/branding",
  "/services/patient-engagement",
  "/about",
  "/testimonials",
  "/contact",
  "/case-studies",
  "/careers",
  "/blog",
  "/faq",
  "/specialties",
  "/cities",
];

// Specialty slugs
const specialtySlugs = [
  "eyecare-digital-marketing-agency-india",
  "dental-digital-marketing-agency-india",
  "cosmetic-digital-marketing-agency-india",
  "dermatology-digital-marketing-agency-india",
  "hair-transplant-digital-marketing-agency-india",
  "ivf-digital-marketing-agency-india",
  "gynaecology-digital-marketing-agency-india",
  "cardiology-digital-marketing-agency-india",
  "orthopaedic-digital-marketing-agency-india",
  "neurology-digital-marketing-agency-india",
  "mental-health-digital-marketing-agency-india",
  "psychology-digital-marketing-agency-india",
  "oncology-digital-marketing-agency-india",
  "diagnostic-lab-digital-marketing-agency-india",
  "radiology-digital-marketing-agency-india",
  "physician-digital-marketing-agency-india",
  "pediatric-digital-marketing-agency-india",
  "ent-digital-marketing-agency-india",
  "urology-digital-marketing-agency-india",
  "gastroenterology-digital-marketing-agency-india",
  "pulmonology-digital-marketing-agency-india",
  "nephrology-digital-marketing-agency-india",
  "diabetes-digital-marketing-agency-india",
  "pain-management-digital-marketing-agency-india",
  "physiotherapy-digital-marketing-agency-india",
  "homeopathy-digital-marketing-agency-india",
  "ayurveda-digital-marketing-agency-india",
  "alternative-medicine-digital-marketing-agency-india",
  "naturopathy-digital-marketing-agency-india",
  "hospital-digital-marketing-agency-india",
  "doctor-digital-marketing-agency-india",
  "telemedicine-digital-marketing-agency-india",
  "home-healthcare-digital-marketing-agency-india",
];

// Top city slugs for pre-rendering (Tier 1 + major Tier 2 cities)
const topCitySlugs = [
  "medical-digital-marketing-agency-mumbai",
  "medical-digital-marketing-agency-delhi",
  "medical-digital-marketing-agency-bangalore",
  "medical-digital-marketing-agency-hyderabad",
  "medical-digital-marketing-agency-chennai",
  "medical-digital-marketing-agency-kolkata",
  "medical-digital-marketing-agency-pune",
  "medical-digital-marketing-agency-ahmedabad",
  "medical-digital-marketing-agency-jaipur",
  "medical-digital-marketing-agency-lucknow",
  "medical-digital-marketing-agency-chandigarh",
  "medical-digital-marketing-agency-indore",
  "medical-digital-marketing-agency-bhopal",
  "medical-digital-marketing-agency-nagpur",
  "medical-digital-marketing-agency-patna",
  "medical-digital-marketing-agency-surat",
  "medical-digital-marketing-agency-vadodara",
  "medical-digital-marketing-agency-coimbatore",
  "medical-digital-marketing-agency-kochi",
  "medical-digital-marketing-agency-visakhapatnam",
];

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...specialtySlugs.map(slug => `/${slug}`),
  ...topCitySlugs.map(slug => `/${slug}`),
];

// Get the Puppeteer renderer class
const Renderer = vitePrerender.PuppeteerRenderer;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: allRoutes,
      renderer: new Renderer({
        maxConcurrentRoutes: 4,
        renderAfterTime: 3000, // Wait 3 seconds for React to render
      }),
      postProcess(renderedRoute) {
        // Trim whitespace
        renderedRoute.html = renderedRoute.html.trim();
        return renderedRoute;
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
