import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Calendar, MessageCircle, BarChart, Heart, ArrowRight, Video, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import heroSocial from "@/assets/hero-social.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

const features = [
  {
    icon: Calendar,
    title: "Content Calendar",
    description: "Strategic content planning with consistent posting schedules tailored to your practice."
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Engage with your audience, respond to comments, and build a loyal patient community."
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Proven strategies to increase followers, engagement, and ultimately patient inquiries."
  },
  {
    icon: MessageCircle,
    title: "Patient Engagement",
    description: "Create meaningful connections with patients through interactive content and stories."
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Monthly reports on performance metrics, insights, and optimization recommendations."
  },
  {
    icon: Heart,
    title: "Brand Building",
    description: "Establish your unique voice and build trust with your target patient demographic."
  }
];

const platforms = [
  { name: "Instagram", description: "Visual storytelling and patient education" },
  { name: "Facebook", description: "Community building and patient testimonials" },
  { name: "LinkedIn", description: "Professional networking and thought leadership" },
  { name: "Twitter/X", description: "Real-time updates and healthcare news" }
];

const SocialMedia = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Medical Social Media Marketing India | Doctor Instagram & Facebook | Transess</title>
        <meta name="description" content="Social media marketing for doctors, clinics & hospitals. Instagram, Facebook, LinkedIn management. Build patient trust, 200% average growth rate. 100+ healthcare accounts managed!" />
        <meta name="keywords" content="medical social media marketing India, doctor social media, hospital Instagram marketing, healthcare Facebook, clinic social media management, doctor LinkedIn" />
        <link rel="canonical" href={`${BASE_URL}/services/social-media`} />
        <meta property="og:title" content="Medical Social Media Marketing | Transess India" />
        <meta property="og:description" content="Social media management for doctors & hospitals. 200% average growth!" />
        <meta property="og:url" content={`${BASE_URL}/services/social-media`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Social Media Marketing | Transess" />
        <meta name="twitter:description" content="Instagram & Facebook marketing for healthcare professionals." />
      </Helmet>
      <Navbar />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Social Media" }]} />
      
      <PageHero
        badge="Social Media Management"
        title="Build Your Medical Brand on Social Media"
        description="End-to-end social media management for doctors, clinics, and hospitals. Connect with patients where they spend their time online."
        backgroundImage={heroSocial}
        primaryCta={{ text: "Start Growing", link: "/contact" }}
        secondaryCta={{ text: "See Results", link: "/case-studies" }}
      />

      {/* Platforms */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-foreground mb-10">Platforms We Manage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Social Media Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From content creation to community management, we handle everything for your practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              { value: "100+", label: "Healthcare Accounts" },
              { value: "5M+", label: "Engagement Generated" },
              { value: "200%", label: "Average Growth Rate" },
              { value: "95%", label: "Client Retention" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Amplify Your Social Presence
            </h2>
            <p className="text-lg text-muted-foreground">
              Pair social media with these services for maximum impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/services/video-production" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Video Production</h3>
              <p className="text-muted-foreground mb-4">Create compelling reels and video content for social.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/branding" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Branding & Creatives</h3>
              <p className="text-muted-foreground mb-4">Consistent visuals that make your posts stand out.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/youtube-management" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">YouTube Management</h3>
              <p className="text-muted-foreground mb-4">Extend your reach with long-form video content.</p>
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
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create a social media strategy that brings patients to your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Get Your Strategy</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/testimonials">Client Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SocialMedia;
