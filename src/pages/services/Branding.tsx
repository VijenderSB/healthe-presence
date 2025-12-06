import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Palette, Image, FileImage, BookOpen, Layers, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

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
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-500/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium mb-6">
              Branding & Creatives
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Build a Memorable Medical Brand
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specialty-focused creatives and unique branded visuals that set your practice apart and build patient trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Start Branding</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-4">First Impressions</div>
                <p className="text-muted-foreground">Patients judge your credibility within seconds. Professional branding builds instant trust.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-4">Recognition</div>
                <p className="text-muted-foreground">Consistent branding makes your practice memorable and easily recognizable.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-4">Differentiation</div>
                <p className="text-muted-foreground">Stand out from competitors with a unique visual identity that reflects your values.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create a brand identity that patients remember and trust.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Start Your Brand Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Branding;
