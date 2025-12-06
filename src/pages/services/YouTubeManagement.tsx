import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Youtube, Settings, TrendingUp, Users, FileVideo, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Settings,
    title: "Channel Setup & Optimization",
    description: "Professional channel setup with optimized branding, descriptions, and settings for maximum discoverability."
  },
  {
    icon: FileVideo,
    title: "Content Strategy",
    description: "Data-driven content planning to create videos that resonate with your target patient audience."
  },
  {
    icon: TrendingUp,
    title: "SEO & Visibility",
    description: "Optimize titles, descriptions, tags, and thumbnails for better search rankings and views."
  },
  {
    icon: Users,
    title: "Subscriber Growth",
    description: "Proven strategies to grow your subscriber base with engaged, quality followers."
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Regular performance reports with actionable insights to improve your channel's growth."
  },
  {
    icon: Youtube,
    title: "Community Management",
    description: "Engage with comments, manage community posts, and build a loyal audience."
  }
];

const YouTubeManagement = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-500/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-red-500/10 text-red-600 rounded-full text-sm font-medium mb-6">
              YouTube Management
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Grow Your Medical YouTube Channel
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete YouTube channel management including setup, optimization, content strategy, and subscriber growth for healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Grow Your Channel</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">See Success Stories</Link>
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
              Complete YouTube Management Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From channel setup to subscriber growth, we handle every aspect of your YouTube presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Channels Managed" },
              { value: "10M+", label: "Total Views Generated" },
              { value: "500K+", label: "Subscribers Gained" },
              { value: "95%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Become a YouTube Authority?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's build a YouTube channel that establishes you as a leader in your specialty.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default YouTubeManagement;
