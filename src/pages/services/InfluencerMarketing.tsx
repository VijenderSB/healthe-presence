import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Users, 
  Video, 
  TrendingUp, 
  Sparkles, 
  Target, 
  Camera, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Play
} from "lucide-react";
import heroImage from "@/assets/hero-influencer.jpg";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/lib/constants";

const InfluencerMarketing = () => {
  const features = [
    {
      icon: Star,
      title: "Personal Brand Building",
      description: "Transform from a doctor to a trusted medical influencer. We craft your unique voice, image, and positioning that resonates with your target audience.",
    },
    {
      icon: Video,
      title: "End-to-End Content Creation",
      description: "From scripting to shooting to editing—our team handles everything. Professional-quality content that educates, engages, and converts.",
    },
    {
      icon: Sparkles,
      title: "Unique Engaging Content",
      description: "Stand out with trending formats, creative hooks, and medical content that goes viral. We know what works on each platform.",
    },
    {
      icon: TrendingUp,
      title: "Attract More Footfalls",
      description: "Convert your online followers into real patients. Strategic content funnels that drive appointments and consultations.",
    },
    {
      icon: Target,
      title: "Multi-Platform Strategy",
      description: "Instagram, YouTube, LinkedIn, Twitter—we optimize your presence across all platforms where your patients spend time.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Build a loyal following of patients who trust you. Engage meaningfully and turn followers into lifelong advocates.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Positioning",
      description: "We analyze your specialty, target audience, and unique strengths to craft your influencer persona.",
    },
    {
      step: "02",
      title: "Content Strategy",
      description: "Custom content calendar with trending topics, educational series, and engagement-focused content.",
    },
    {
      step: "03",
      title: "Production & Filming",
      description: "Professional video shoots at your clinic or our studio. High-quality content that reflects your expertise.",
    },
    {
      step: "04",
      title: "Publishing & Growth",
      description: "Strategic posting, hashtag optimization, collaboration outreach, and community management.",
    },
  ];

  const results = [
    { value: "500K+", label: "Followers Generated" },
    { value: "50M+", label: "Views Delivered" },
    { value: "200+", label: "Doctor Influencers Created" },
    { value: "3x", label: "Average Patient Increase" },
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Doctor Influencer Marketing India | Become a Medical Influencer | 200+ Created</title>
        <meta name="description" content="Become a medical influencer! Personal brand building, content creation, social media growth. 200+ doctor influencers created, 500K+ followers generated, 50M+ views delivered!" />
        <meta name="keywords" content="doctor influencer marketing India, medical influencer agency, healthcare content creator, physician personal branding, doctor social media growth, medical thought leader" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/services/influencer-marketing`} />
        <meta property="og:title" content="Doctor Influencer Marketing | Transess India" />
        <meta property="og:description" content="Become a medical influencer. 200+ doctors transformed. 500K+ followers generated!" />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/services/influencer-marketing`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doctor Influencer Marketing | Transess" />
        <meta name="twitter:description" content="Become a medical influencer with professional support." />
      </Helmet>
      <Navbar />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Influencer Marketing" }]} />
      <PageHero
        badge="Featured Service"
        title="Medical Influencer Marketing"
        description="Build your personal brand, attract more patients, and establish yourself as a trusted medical influencer with our end-to-end content creation and growth strategy."
        backgroundImage={heroImage}
        primaryCta={{ text: "Start Your Influencer Journey", link: "/contact" }}
      />

      {/* Why Influencer Marketing Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Why Influencer Marketing?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Patients Trust <span className="text-gradient">Doctors They Know</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In today's digital age, patients choose doctors they've seen, heard, and connected with online. 
                A strong personal brand doesn't just attract patients—it builds trust before they even walk in.
              </p>
              <div className="space-y-4">
                {[
                  "Stand out from thousands of doctors in your city",
                  "Build trust with patients before the first visit",
                  "Establish yourself as the expert in your specialty",
                  "Create a sustainable stream of patient referrals",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Content That Converts</h3>
                    <p className="text-primary-foreground/80">From views to appointments</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Video, label: "Reels & Shorts" },
                    { icon: Play, label: "Long-form Videos" },
                    { icon: MessageCircle, label: "Educational Posts" },
                    { icon: Sparkles, label: "Trending Content" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/10">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Complete <span className="text-gradient">Influencer Package</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to become a recognized medical influencer in your specialty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Your Journey to <span className="text-gradient">Influence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-heading font-bold text-primary/10 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 border-t-2 border-dashed border-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((stat, index) => (
              <div key={index} className="text-center text-primary-foreground">
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Become a <span className="text-gradient">Medical Influencer?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 200+ doctors who've transformed their practice with our influencer marketing program. 
              Let's build your personal brand together.
            </p>
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="/contact">
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InfluencerMarketing;
