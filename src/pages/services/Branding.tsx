import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import { Button } from "@/components/ui/button";
import { Palette, Image, FileImage, BookOpen, Layers, PenTool, ArrowRight, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroBranding from "@/assets/hero-branding.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Complete brand identity including logo, color palette, typography, and brand guidelines."
  },
  {
    icon: Image,
    title: "Social Media Creatives",
    description: "Specialty-focused, engaging visuals designed specifically for your medical practice."
  },
  {
    icon: FileImage,
    title: "Marketing Collateral",
    description: "Brochures, flyers, business cards, and patient education materials with consistent branding."
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    description: "Comprehensive guidelines ensuring brand consistency across all touchpoints."
  },
  {
    icon: Layers,
    title: "Visual Templates",
    description: "Reusable templates for social media, presentations, and patient communications."
  },
  {
    icon: PenTool,
    title: "Custom Illustrations",
    description: "Medical illustrations and infographics that simplify complex health information."
  }
];

const Branding = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Medical Branding & Creatives | Transess - Healthcare Brand Design India</title>
        <meta name="description" content="Medical branding and creative design for doctors, clinics & hospitals. Logo design, brand identity, social media creatives & marketing collateral that builds trust." />
        <meta name="keywords" content="medical branding India, doctor logo design, hospital brand identity, healthcare creative design, clinic branding" />
        <link rel="canonical" href={`${BASE_URL}/services/branding`} />
        <meta property="og:title" content="Medical Branding & Creatives | Transess" />
        <meta property="og:description" content="Build a memorable medical brand with professional design and creatives." />
        <meta property="og:url" content={`${BASE_URL}/services/branding`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Branding | Transess" />
        <meta name="twitter:description" content="Healthcare branding and creative design services." />
      </Helmet>
      <Navbar />
      
      <PageHero
        badge="Branding & Creatives"
        title="Build a Memorable Medical Brand"
        description="Specialty-focused creatives and unique branded visuals that set your practice apart and build patient trust."
        backgroundImage={heroBranding}
        primaryCta={{ text: "Start Branding", link: "/contact" }}
        secondaryCta={{ text: "View Portfolio", link: "/case-studies" }}
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Branding & Creative Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a strong, recognizable medical brand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Branding */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Strong Branding Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-4">First Impressions</div>
                <p className="text-muted-foreground">Patients judge your credibility within seconds. Professional branding builds instant trust.</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-4">Recognition</div>
                <p className="text-muted-foreground">Consistent branding makes your practice memorable and easily recognizable.</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-4">Differentiation</div>
                <p className="text-muted-foreground">Stand out from competitors with a unique visual identity that reflects your values.</p>
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
              Our Branding Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understand your practice, values, and vision" },
              { step: "02", title: "Strategy", desc: "Define your brand positioning and voice" },
              { step: "03", title: "Design", desc: "Create visual identity and brand assets" },
              { step: "04", title: "Deploy", desc: "Implement branding across all touchpoints" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-purple-500/20 mb-4">{item.step}</div>
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
              Apply Your Brand Everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              Ensure brand consistency across all your digital channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/services/website-design" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Website Design</h3>
              <p className="text-muted-foreground mb-4">A branded website that represents your practice.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/social-media" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Social Media</h3>
              <p className="text-muted-foreground mb-4">Branded content that stands out in feeds.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/video-production" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Image className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Video Production</h3>
              <p className="text-muted-foreground mb-4">Videos with consistent brand elements.</p>
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
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create a brand identity that patients remember and trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Start Your Brand Journey</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/testimonials">See Brand Transformations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Branding;
