import { 
  Globe, 
  Smartphone, 
  Video, 
  Youtube, 
  Search, 
  Palette, 
  MessageCircle,
  ArrowRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const featuredService = {
    icon: Star,
    title: "Medical Influencer Marketing",
    description: "Build your personal brand, attract more footfalls, and become the go-to doctor in your city with our end-to-end content creation and growth strategy.",
    benefits: [
      "Personal brand building",
      "End-to-end content support",
      "Unique engaging content",
      "Multi-platform growth",
    ],
    href: "/services/influencer-marketing",
  };

  const services = [
    {
      icon: Globe,
      title: "Medical Website Design",
      description: "Fast, mobile-responsive, HIPAA-aware websites that convert visitors into patients.",
      benefits: [
        "Modern, aesthetically designed layouts",
        "Mobile-first responsive design",
        "SEO-optimized structure",
        "Appointment booking integration",
      ],
      href: "/services/website-design",
    },
    {
      icon: Smartphone,
      title: "Social Media Management",
      description: "End-to-end social media strategy that builds your authority and attracts patients.",
      benefits: [
        "Content planning & scheduling",
        "Specialty-focused creatives",
        "Community engagement",
        "Performance analytics",
      ],
      href: "/services/social-media",
    },
    {
      icon: Video,
      title: "Medical Video Production",
      description: "Professional videos that humanize your practice and educate patients.",
      benefits: [
        "Doctor introduction videos",
        "Patient education content",
        "Procedure explainers",
        "Trending reels & shorts",
      ],
      href: "/services/video-production",
    },
    {
      icon: Youtube,
      title: "YouTube Channel Management",
      description: "Complete YouTube strategy to establish thought leadership and grow subscribers.",
      benefits: [
        "Channel setup & optimization",
        "Content strategy & scripting",
        "SEO & thumbnail design",
        "Subscriber growth campaigns",
      ],
      href: "/services/youtube-management",
    },
    {
      icon: Search,
      title: "SEO & Google Visibility",
      description: "Dominate local search results so patients find you first.",
      benefits: [
        "Google My Business optimization",
        "Local SEO strategy",
        "Review management",
        "Search ranking improvement",
      ],
      href: "/services/seo",
    },
    {
      icon: Palette,
      title: "Branding & Creatives",
      description: "Unique branded visuals that set you apart from every other practice.",
      benefits: [
        "Logo & brand identity",
        "Specialty-focused designs",
        "Print & digital collateral",
        "Consistent visual language",
      ],
      href: "/services/branding",
    },
    {
      icon: MessageCircle,
      title: "Patient Engagement Tools",
      description: "Systems to acquire new patients and retain existing ones through trust.",
      benefits: [
        "Patient acquisition funnels",
        "Automated follow-ups",
        "Review collection system",
        "Loyalty & referral programs",
      ],
      href: "/services/patient-engagement",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Everything Your Practice Needs to{" "}
            <span className="text-gradient">Thrive Online</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing solutions tailored specifically for healthcare professionals.
          </p>
        </div>

        {/* Featured Service - Influencer Marketing */}
        <Link 
          to={featuredService.href}
          className="block mb-8 group"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 md:p-10 shadow-elevated">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
                  <Star className="w-4 h-4" />
                  Featured Service
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
                  {featuredService.title}
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  {featuredService.description}
                </p>
                <div className="flex items-center gap-2 text-primary-foreground font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {featuredService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-primary-foreground/10 text-primary-foreground text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />
          </div>
        </Link>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="cta" size="lg" className="group">
            Get Your Custom Strategy
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
