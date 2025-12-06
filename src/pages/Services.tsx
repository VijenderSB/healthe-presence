import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Users, Video, Youtube, Search, Palette, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Medical Website Design",
    description: "Professional, fast, mobile-responsive websites built specifically for healthcare professionals.",
    link: "/services/website-design",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "End-to-end social media management for doctors, clinics, and hospitals.",
    link: "/services/social-media",
    color: "bg-accent/10 text-accent-foreground"
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional medical videos including doctor introductions, explainers, and patient education.",
    link: "/services/video-production",
    color: "bg-secondary text-secondary-foreground"
  },
  {
    icon: Youtube,
    title: "YouTube Management",
    description: "Complete YouTube channel setup, optimization, content management, and subscriber growth.",
    link: "/services/youtube-management",
    color: "bg-red-500/10 text-red-600"
  },
  {
    icon: Search,
    title: "SEO & Google Visibility",
    description: "Get found by patients searching for doctors like you on Google.",
    link: "/services/seo",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Palette,
    title: "Branding & Creatives",
    description: "Specialty-focused creatives and unique branded visuals that set you apart.",
    link: "/services/branding",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Heart,
    title: "Patient Engagement",
    description: "Complete patient retention system with engagement and trust-building tools.",
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
              Everything you need to build a powerful digital presence and grow your medical practice.
            </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free consultation and we'll recommend the perfect package for your practice.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
