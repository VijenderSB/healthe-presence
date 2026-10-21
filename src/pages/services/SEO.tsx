import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Globe, FileText, Link2, BarChart3, ArrowRight, Smartphone, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import heroSeo from "@/assets/hero-seo.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const services = [
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Help people in your area find accurate information about your practice in local search results."
  },
  {
    icon: Globe,
    title: "Technical SEO",
    description: "Optimize your website's technical foundation for better search engine crawling and indexing."
  },
  {
    icon: FileText,
    title: "Content Optimization",
    description: "Create and optimize medical content that ranks well and answers patient questions."
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Build authoritative backlinks from trusted medical and healthcare websites."
  },
  {
    icon: Search,
    title: "Keyword Research",
    description: "Identify the exact terms patients use to find doctors like you and optimize for them."
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Detailed monthly reports on rankings, traffic, and enquiries from organic search."
  }
];

const SEO = () => {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Medical SEO Services India | NMC-Compliant Healthcare SEO for Doctors & Hospitals</title>
        <meta name="description" content="Healthcare SEO services for doctors, clinics & hospitals. Local SEO, keyword optimization and technical SEO to help patients find accurate information about your practice online." />
        <meta name="keywords" content="medical SEO India, doctor SEO services, hospital SEO, healthcare search engine optimization, local SEO for doctors, Google My Business optimization" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/services/seo`} />
        <meta property="og:title" content="Medical SEO Services | Transess India" />
        <meta property="og:description" content="Healthcare SEO for doctors & hospitals that helps patients find accurate information about your practice." />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/services/seo`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical SEO Services | Transess" />
        <meta name="twitter:description" content="Healthcare SEO that helps patients find accurate information about your practice on Google." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Medical SEO Services",
            "provider": {
              "@type": "Organization",
              "name": "Transess",
              "url": SITE_CONFIG.BASE_URL
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description": "Healthcare SEO services for doctors, clinics & hospitals. Local SEO, technical SEO and keyword optimization.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Head>
      <Navbar />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "SEO" }]} />
      
      <PageHero
        badge="SEO & Google Visibility"
        title="NMC-Compliant Healthcare SEO"
        description="Comprehensive SEO services designed for medical practices. We optimise your site with factual, verifiable information so people searching for health information can find your practice through organic search."
        backgroundImage={heroSeo}
        primaryCta={{ text: "Request a Consultation", link: "/contact" }}
        secondaryCta={{ text: "See Our Work", link: "/case-studies" }}
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Medical SEO Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to improving your online visibility with accurate, verifiable information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why SEO Matters for Medical Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-3 bg-primary rounded-full shrink-0"></div>
                  <p className="text-muted-foreground">Many people now search online for health information before choosing a doctor or clinic, so accurate, findable information matters.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-3 bg-primary rounded-full shrink-0"></div>
                  <p className="text-muted-foreground">Local searches often carry local intent, so well-structured local SEO helps nearby patients find your practice details.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-3 bg-primary rounded-full shrink-0"></div>
                  <p className="text-muted-foreground">Clear, accurate listings and verifiable information make it easier for people to understand your services and qualifications.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-3 bg-primary rounded-full shrink-0"></div>
                  <p className="text-muted-foreground">Good technical SEO helps search engines understand and index your content correctly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our SEO Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured methodology focused on sustainable, long-term visibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Comprehensive analysis of your current SEO status" },
              { step: "02", title: "Strategy", desc: "Custom SEO roadmap based on your goals" },
              { step: "03", title: "Optimize", desc: "On-page, technical, and content optimization" },
              { step: "04", title: "Grow", desc: "Continuous monitoring and improvement" }
            ].map((item, index) => (
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strengthen Your SEO
            </h2>
            <p className="text-lg text-muted-foreground">
              SEO works well when combined with these services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Link to="/services/geo" className="group p-6 bg-primary/5 rounded-xl border-2 border-primary hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">GEO (AI Search) 🚀</h3>
              <p className="text-muted-foreground mb-4">Go beyond SEO — get cited by ChatGPT & AI search engines.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/website-design" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Website Design</h3>
              <p className="text-muted-foreground mb-4">SEO-optimized websites built for search visibility.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/branding" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Branding</h3>
              <p className="text-muted-foreground mb-4">Build brand authority that supports SEO.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/patient-engagement" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Patient Engagement</h3>
              <p className="text-muted-foreground mb-4">Help visitors find the information they need about your practice.</p>
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
            Ready to Improve Your Search Visibility?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover opportunities to improve how patients find accurate information about your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Get Free SEO Audit</Link>
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

export default SEO;
