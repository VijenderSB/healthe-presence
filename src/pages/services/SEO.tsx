import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Globe, FileText, Link2, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate local search results. Get found by patients searching for doctors in your area."
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
    description: "Detailed monthly reports on rankings, traffic, and patient inquiries from organic search."
  }
];

const SEO = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-500/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-6">
              SEO & Google Visibility
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get Found by Patients on Google
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive SEO services designed for medical practices. Rank higher, get more visibility, and attract more patients through organic search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Improve Your Rankings</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View Results</Link>
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
              Our Medical SEO Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to improving your online visibility and patient acquisition.
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
                  <div className="text-4xl font-bold text-primary">77%</div>
                  <p className="text-muted-foreground">of patients use search engines before booking a doctor's appointment</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-primary">46%</div>
                  <p className="text-muted-foreground">of all Google searches have local intent</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-primary">75%</div>
                  <p className="text-muted-foreground">of users never scroll past the first page of search results</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-primary">88%</div>
                  <p className="text-muted-foreground">of consumers trust online reviews as much as personal recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Rank Higher on Google?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover opportunities to improve your search visibility.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Get Free SEO Audit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SEO;
