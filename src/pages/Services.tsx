import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Users, Video, Youtube, Search, Palette, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Medical Website Design",
    description: "Professional, fast, mobile-responsive websites built specifically for healthcare professionals. HIPAA-compliant, SEO-optimized, and designed to convert visitors into patients.",
    link: "/services/website-design",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "End-to-end social media management for doctors, clinics, and hospitals. From content creation to community management across Instagram, Facebook, LinkedIn, and more.",
    link: "/services/social-media",
    color: "bg-accent/10 text-accent-foreground"
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional medical videos including doctor introductions, patient education, explainers, testimonials, and short-form content for social media.",
    link: "/services/video-production",
    color: "bg-secondary text-secondary-foreground"
  },
  {
    icon: Youtube,
    title: "YouTube Management",
    description: "Complete YouTube channel setup, optimization, content strategy, and subscriber growth. Build authority in your specialty through video content.",
    link: "/services/youtube-management",
    color: "bg-red-500/10 text-red-600"
  },
  {
    icon: Search,
    title: "SEO & Google Visibility",
    description: "Get found by patients searching for doctors like you on Google. Local SEO, technical optimization, content strategy, and performance tracking.",
    link: "/services/seo",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Palette,
    title: "Branding & Creatives",
    description: "Specialty-focused creatives and unique branded visuals that set you apart. Logo design, brand guidelines, marketing collateral, and visual templates.",
    link: "/services/branding",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Heart,
    title: "Patient Engagement",
    description: "Complete patient retention system with automated reminders, follow-ups, loyalty programs, and reputation management tools.",
    link: "/services/patient-engagement",
    color: "bg-orange-500/10 text-orange-600"
  }
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              360° Medical Digital Marketing Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to build a powerful digital presence and grow your medical practice. From your first website to ongoing patient engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="group p-8 bg-card rounded-xl border border-border hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not a generic marketing agency. We specialize exclusively in healthcare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Healthcare Focused", desc: "We understand medical regulations, patient psychology, and healthcare marketing nuances." },
              { title: "Proven Results", desc: "500+ healthcare clients with documented growth in patient acquisition and engagement." },
              { title: "Full-Service", desc: "One partner for all your digital marketing needs—no juggling multiple agencies." },
              { title: "Data-Driven", desc: "Every strategy is backed by analytics with transparent monthly reporting." }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Service Combinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While you can choose individual services, these combinations deliver the best results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Digital Foundation</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Website Design
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  SEO Optimization
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Branding
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">Perfect for practices just starting their digital journey.</p>
            </div>
            
            <div className="p-8 bg-card rounded-xl border-2 border-primary relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">Most Popular</span>
              <h3 className="text-xl font-semibold text-foreground mb-4">Growth Package</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Website + SEO
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Social Media Management
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Patient Engagement
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">For practices ready to scale patient acquisition.</p>
            </div>
            
            <div className="p-8 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Authority Builder</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Video Production
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  YouTube Management
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Social Media
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">For doctors wanting to become thought leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free consultation and we'll recommend the perfect package for your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/faq">Read FAQ</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
