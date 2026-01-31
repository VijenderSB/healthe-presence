import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import { Button } from "@/components/ui/button";
import { getSpecialtyBySlug, specialties } from "@/data/specialties";
import { 
  Search, Target, Globe, 
  Video, Users, Megaphone, ArrowRight, CheckCircle, Star
} from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

const services = [
  {
    icon: Search,
    title: "Medical SEO",
    description: "Rank #1 on Google for specialty-specific searches in your city"
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "High-intent patient acquisition with optimized ad campaigns"
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Conversion-focused websites built for your specialty"
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Build trust and engagement across all platforms"
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Patient testimonials and educational content that converts"
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Connect with medical influencers to expand your reach"
  }
];

const benefits = [
  "Specialty-specific marketing strategies",
  "HIPAA-compliant campaigns",
  "Dedicated account manager",
  "Monthly performance reports",
  "Transparent ROI tracking",
  "24/7 support"
];

const SpecialtyPage = () => {
  const location = useLocation();
  const slug = location.pathname.slice(1); // Remove leading slash
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Specialty Not Found</h1>
          <p className="text-muted-foreground mb-8">The specialty you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  // Get related specialties (excluding current)
  const relatedSpecialties = specialties
    .filter(s => s.id !== specialty.id)
    .slice(0, 6);

  const canonicalUrl = `${BASE_URL}/${specialty.slug}`;
  const metaDescription = `${specialty.h1}. ${specialty.h2}. Expert SEO, social media, video production & branding for ${specialty.name.toLowerCase()} in India.`;

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>{specialty.h1} | Transess - Healthcare Marketing</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={specialty.keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${specialty.h1} | Transess`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Transess - Medical Digital Marketing" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${specialty.h1} | Transess`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transess" />
        
        {/* JSON-LD ProfessionalService Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": canonicalUrl,
            "name": `Transess - ${specialty.name} Digital Marketing Agency India`,
            "description": metaDescription,
            "url": canonicalUrl,
            "telephone": "+91-8447314061",
            "image": `${BASE_URL}/og-image.png`,
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": [
              `${specialty.name} Marketing`,
              `${specialty.name} SEO`,
              `${specialty.name} Website Design`,
              `${specialty.name} Social Media Marketing`,
              "Medical Video Production",
              "Healthcare Branding"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `${specialty.name} Marketing Services`,
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `${specialty.name} SEO`,
                    "description": `Search engine optimization for ${specialty.name.toLowerCase()} practices`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `${specialty.name} Website Design`,
                    "description": `Conversion-focused websites for ${specialty.name.toLowerCase()} clinics`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `${specialty.name} Social Media`,
                    "description": `Social media marketing for ${specialty.name.toLowerCase()} practices`
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      <PageHero
        badge={specialty.name}
        title={specialty.h1}
        description={specialty.h2}
        backgroundImage={heroDoctor}
        primaryCta={{ text: "Get Free Consultation", link: "/contact" }}
        secondaryCta={{ text: "View Case Studies", link: "/case-studies" }}
      />

      {/* Description Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {specialty.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              360° Digital Marketing for {specialty.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive marketing solutions designed specifically for your specialty
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                India's Leading {specialty.name} Marketing Agency
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique challenges of marketing {specialty.name.toLowerCase()} services. 
                Our team combines healthcare expertise with digital marketing excellence to deliver 
                measurable results.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground mb-6">
                "Transess transformed our online presence completely. We've seen a 300% increase 
                in patient inquiries within the first 6 months. Their understanding of the 
                healthcare industry is unmatched."
              </blockquote>
              <p className="text-muted-foreground font-medium">— Verified Healthcare Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Healthcare Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">10M+</div>
              <div className="text-primary-foreground/80">Patient Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">95%</div>
              <div className="text-primary-foreground/80">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">8+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* Related Specialties */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Other Medical Specialties
            </h2>
            <p className="text-lg text-muted-foreground">
              We serve healthcare providers across all specialties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedSpecialties.map((related) => (
              <Link 
                key={related.id}
                to={`/${related.slug}`}
                className="group p-5 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {related.name}
                </h3>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Grow Your {specialty.name} Practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free marketing consultation and discover how we can help you attract more patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/testimonials">Read Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SpecialtyPage;
