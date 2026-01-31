import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import { Button } from "@/components/ui/button";
import { Youtube, Settings, TrendingUp, Users, FileVideo, BarChart, ArrowRight, Video, Search } from "lucide-react";
import { Link } from "react-router-dom";
import heroYoutube from "@/assets/hero-youtube.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

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
      <Helmet>
        <title>Doctor YouTube Channel Management | Transess - Medical YouTube India</title>
        <meta name="description" content="YouTube channel management for doctors & hospitals. Channel setup, content strategy, SEO, subscriber growth & analytics. Become a medical thought leader on YouTube." />
        <meta name="keywords" content="doctor YouTube channel, medical YouTube management, hospital YouTube marketing, healthcare video channel, doctor content creator" />
        <link rel="canonical" href={`${BASE_URL}/services/youtube-management`} />
        <meta property="og:title" content="Doctor YouTube Management | Transess" />
        <meta property="og:description" content="Grow your medical YouTube channel with professional management and content strategy." />
        <meta property="og:url" content={`${BASE_URL}/services/youtube-management`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doctor YouTube Management | Transess" />
        <meta name="twitter:description" content="YouTube channel management for healthcare professionals." />
      </Helmet>
      <Navbar />
      
      <PageHero
        badge="YouTube Management"
        title="Grow Your Medical YouTube Channel"
        description="Complete YouTube channel management including setup, optimization, content strategy, and subscriber growth for healthcare professionals."
        backgroundImage={heroYoutube}
        primaryCta={{ text: "Grow Your Channel", link: "/contact" }}
        secondaryCta={{ text: "See Success Stories", link: "/case-studies" }}
      />

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

      {/* Why YouTube */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why YouTube for Doctors?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">2nd</div>
                <h3 className="font-semibold text-foreground mb-2">Largest Search Engine</h3>
                <p className="text-muted-foreground">YouTube is the second-largest search engine after Google. Patients are actively searching for health information.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <h3 className="font-semibold text-foreground mb-2">Trust Factor</h3>
                <p className="text-muted-foreground">Patients who watch a doctor's video before visiting report 85% higher trust in that healthcare provider.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">500M+</div>
                <h3 className="font-semibold text-foreground mb-2">Health Searches Daily</h3>
                <p className="text-muted-foreground">Over 500 million health-related searches happen on YouTube every day. Are you capturing that audience?</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">Forever</div>
                <h3 className="font-semibold text-foreground mb-2">Evergreen Content</h3>
                <p className="text-muted-foreground">Unlike social media posts, YouTube videos continue generating views and patients for years after publishing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Your Video Strategy
            </h2>
            <p className="text-lg text-muted-foreground">
              Pair YouTube management with these services for maximum reach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/services/video-production" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Video Production</h3>
              <p className="text-muted-foreground mb-4">Professional videos to populate your channel.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/seo" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">SEO Optimization</h3>
              <p className="text-muted-foreground mb-4">Integrate YouTube with your overall SEO strategy.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/social-media" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Social Media</h3>
              <p className="text-muted-foreground mb-4">Repurpose YouTube content across all platforms.</p>
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
            Ready to Become a YouTube Authority?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's build a YouTube channel that establishes you as a leader in your specialty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/testimonials">Read Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default YouTubeManagement;
