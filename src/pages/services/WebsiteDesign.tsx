import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Zap, Shield, Search, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroWebsite from "@/assets/hero-website.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive websites that look stunning on all devices, ensuring patients can access your information anywhere."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with fast loading times to reduce bounce rates and improve patient experience."
  },
  {
    icon: Shield,
    title: "Data Privacy Aligned (DPDP Act, 2023)",
    description: "Secure websites aligned with India's Digital Personal Data Protection Act, 2023, that help protect patient data."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with search engine optimization in mind to help patients find you online."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your digital clinic never closes. Patients can learn about your services anytime."
  },
  {
    icon: Globe,
    title: "Multi-location Support",
    description: "Manage multiple clinic locations from a single, easy-to-update website."
  }
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We learn about your practice, goals, and target patients" },
  { step: "02", title: "Design", desc: "Custom designs tailored to your specialty and brand" },
  { step: "03", title: "Development", desc: "Build your site with the latest web technologies" },
  { step: "04", title: "Launch", desc: "Go live with ongoing support and optimization" }
];

const WebsiteDesign = () => {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Medical Website Design India | Doctor & Hospital Websites | Transess</title>
        <meta name="description" content="Professional medical website design for doctors, clinics & hospitals. Data privacy aligned (DPDP Act, 2023), mobile-responsive, SEO-optimized websites that present clear, accurate information. Free consultation!" />
        <meta name="keywords" content="medical website design India, doctor website development, hospital website design, healthcare web design, clinic website, DPDP compliant website" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/services/website-design`} />
        <meta property="og:title" content="Medical Website Design | Transess India" />
        <meta property="og:description" content="Professional doctor & hospital websites that present clear, accurate information about your practice." />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/services/website-design`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Website Design | Transess" />
        <meta name="twitter:description" content="Data privacy aligned (DPDP Act, 2023) websites for healthcare professionals." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Medical Website Design",
            "provider": {
              "@type": "Organization",
              "name": "Transess",
              "url": SITE_CONFIG.BASE_URL
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description": "Professional medical website design for doctors, clinics & hospitals. Data privacy aligned (DPDP Act, 2023), mobile-responsive, SEO-optimized websites.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Head>
      <Navbar />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Website Design" }]} />
      
      <PageHero
        badge="Medical Website Design"
        title="Professional Websites for Healthcare Providers"
        description="Custom-designed, fast, mobile-responsive websites built specifically for healthcare professionals. Make a powerful first impression online."
        backgroundImage={heroWebsite}
        primaryCta={{ text: "Get Started", link: "/contact" }}
        secondaryCta={{ text: "View Portfolio", link: "/case-studies" }}
      />

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Included in Your Medical Website
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every website we build comes packed with features designed specifically for medical practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Website Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined process that respects your time while delivering exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enhance Your Website With
            </h2>
            <p className="text-lg text-muted-foreground">
              Strengthen your website's impact with these complementary services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Link to="/services/seo" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">SEO Optimization</h3>
              <p className="text-muted-foreground mb-4">Get found on Google by patients searching for your services.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/geo" className="group p-6 bg-primary/5 rounded-xl border-2 border-primary hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">GEO (AI Search) 🚀</h3>
              <p className="text-muted-foreground mb-4">Get cited by ChatGPT & AI engines when patients ask about doctors.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/branding" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Branding & Design</h3>
              <p className="text-muted-foreground mb-4">Create a cohesive brand identity across all touchpoints.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/patient-engagement" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Patient Engagement</h3>
              <p className="text-muted-foreground mb-4">Help website visitors find the information they need about your practice.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Medical Website?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how we can transform your online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/case-studies">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WebsiteDesign;
