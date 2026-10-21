import { useLocation, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { getCityBySlug, cities } from "@/data/cities";
import {
  Search, Target, Globe, Video, Users, Megaphone,
  ArrowRight, CheckCircle, MapPin, Building2,
  Stethoscope, Heart, Camera, Share2
} from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const services = [
  {
    icon: Search,
    title: "Medical SEO",
    description: "Help patients find accurate information about your practice in local search"
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Factual, compliant ad campaigns that share accurate practice information"
  },
  {
    icon: Globe,
    title: "Healthcare Website",
    description: "Clear, accessible websites for doctors & hospitals"
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Factual, educational health content for local audiences"
  },
  {
    icon: Video,
    title: "Medical Video Production",
    description: "Doctor introductions & public health education content"
  },
  {
    icon: Users,
    title: "Personal Branding & Health Education",
    description: "Build a credible professional presence through factual content"
  },
  {
    icon: Camera,
    title: "Medical Creatives",
    description: "Professional graphics & visuals for healthcare"
  },
  {
    icon: Share2,
    title: "Patient Engagement",
    description: "Compliant reminders, follow-ups & patient communication"
  }
];

const targetAudience = [
  { icon: Stethoscope, title: "Doctors & Surgeons", desc: "Personal branding & public health education" },
  { icon: Building2, title: "Hospitals & Clinics", desc: "Complete digital marketing solutions" },
  { icon: Heart, title: "Healthcare Educators", desc: "Factual health content & awareness" },
  { icon: Users, title: "Medical Professionals", desc: "Accurate, compliant online presence" }
];

const benefits = [
  "Local SEO optimized for your city",
  "Data-privacy-aware (DPDP Act) campaigns",
  "Dedicated account manager",
  "Monthly performance reports",
  "NMC-compliant, factual content",
  "24/7 support"
];

const CityPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\/+|\/+$/g, ""); // strip leading/trailing slashes
  const city = getCityBySlug(slug);

  if (!city) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <p className="text-muted-foreground mb-8">The city page you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/cities">View All Cities</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedCities = cities
    .filter(c => c.id !== city.id && c.state === city.state)
    .slice(0, 4);

  const otherCities = relatedCities.length < 4
    ? cities.filter(c => c.id !== city.id && c.tier === city.tier).slice(0, 6 - relatedCities.length)
    : [];

  const canonicalUrl = `${SITE_CONFIG.BASE_URL}/${city.slug}`;

  return (
    <main className="min-h-screen">
      <Head>
        <title>{city.h1} | Transess - Healthcare Marketing</title>
        <meta name="description" content={city.metaDescription} />
        <meta name="keywords" content={city.keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${city.h1} | Transess`} />
        <meta property="og:description" content={city.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Transess - Medical Digital Marketing" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${city.h1} | Transess`} />
        <meta name="twitter:description" content={city.metaDescription} />
        <meta name="twitter:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content={`${city.name}, ${city.state}`} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transess" />

        {/* JSON-LD LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": canonicalUrl,
            "name": `Transess - Medical Digital Marketing Agency in ${city.name}`,
            "description": city.metaDescription,
            "url": canonicalUrl,
            "telephone": "+91-8447314061",
            "image": `${SITE_CONFIG.BASE_URL}/og-image.png`,
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.name,
              "addressRegion": city.state,
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "containedInPlace": {
                "@type": "State",
                "name": city.state
              }
            },
            "serviceType": [
              "Medical SEO",
              "Healthcare Website Design",
              "Medical Social Media Marketing",
              "Healthcare Video Production",
              "Doctor Google Ads",
              "Hospital Digital Marketing"
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/transess",
              "https://www.instagram.com/transess",
              "https://www.linkedin.com/company/transess"
            ]
          })}
        </script>
      </Head>

      <Navbar />
      <Breadcrumbs items={[{ label: "Cities", href: "/cities" }, { label: city.name }]} />
      <PageHero
        badge={`${city.name}, ${city.state}`}
        title={city.h1}
        description={city.h2}
        backgroundImage={heroDoctor}
        primaryCta={{ text: "Get Free Consultation", link: "/contact" }}
        secondaryCta={{ text: "View Case Studies", link: "/case-studies" }}
      />

      {/* City Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">{city.name}, {city.state}</span>
              <span className="text-muted-foreground">• Population: {city.population}</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Looking for an ethical <strong>medical digital marketing agency in {city.name}</strong>?
              Transess is a healthcare marketing partner helping doctors, surgeons,
              hospitals, and clinics in {city.name} build a clear, factual and NMC-compliant online presence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a solo practitioner or a multi-specialty hospital in {city.name},
              our 360° digital marketing solutions are designed to help patients find accurate
              information about your practice — within professional ethics and NMC guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Healthcare Marketing for {city.name}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              360° Medical Digital Marketing in {city.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive marketing solutions for healthcare providers in {city.name}, {city.state}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Why Choose Transess
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ethical Medical Marketing in {city.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the healthcare landscape of {city.name}. Our team combines
                local market knowledge with ethical, NMC-compliant digital marketing for
                doctors and hospitals in {city.state}.
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
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Compliant by Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every website, profile and piece of content we build for practices in {city.name} is
                factual, verifiable and aligned with NMC ethical advertising guidelines — no patient
                testimonials, no ratings, and no exaggerated claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">Factual</div>
              <div className="text-primary-foreground/80">Verifiable content only</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">NMC-Aligned</div>
              <div className="text-primary-foreground/80">Ethical advertising</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">No Testimonials</div>
              <div className="text-primary-foreground/80">No patient reviews or ratings</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">Transparent</div>
              <div className="text-primary-foreground/80">Clear monthly reporting</div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* Related Cities */}
      {(relatedCities.length > 0 || otherCities.length > 0) && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Medical Marketing in Other Cities
              </h2>
              <p className="text-lg text-muted-foreground">
                We serve healthcare providers across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[...relatedCities, ...otherCities].slice(0, 6).map((related) => (
                <Link
                  key={related.id}
                  to={`/${related.slug}`}
                  className="group p-5 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{related.state}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Medical Marketing in {related.name}
                  </h3>
                  <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link to="/cities">View All Cities</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Build Your Digital Presence in {city.name}?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation and see how an ethical, NMC-compliant digital presence can help
            patients find accurate information about your practice in {city.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/case-studies">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CityPage;
