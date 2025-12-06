import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Zap, Shield, Search, Clock } from "lucide-react";
import { Link } from "react-router-dom";

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
    title: "HIPAA Compliant",
    description: "Secure, compliant websites that protect patient data and meet healthcare industry standards."
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

const WebsiteDesign = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Medical Website Design
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Medical Websites That Convert Visitors to Patients
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Custom-designed, fast, mobile-responsive websites built specifically for healthcare professionals. Make a powerful first impression online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Medical Website?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how we can transform your online presence.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WebsiteDesign;
