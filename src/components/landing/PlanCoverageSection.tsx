import { 
  Globe, 
  Smartphone, 
  Video, 
  Youtube, 
  Search, 
  Palette, 
  Users,
  MessageCircle,
  Star,
  TrendingUp,
  Calendar,
  BarChart3,
  Check
} from "lucide-react";

const PlanCoverageSection = () => {
  const categories = [
    {
      title: "Digital Foundation",
      icon: Globe,
      color: "bg-blue-500/10 text-blue-600",
      items: [
        "Custom medical website design",
        "Mobile-responsive development",
        "SSL security & HIPAA considerations",
        "Appointment booking integration",
        "Patient portal setup",
        "Speed optimization",
      ],
    },
    {
      title: "Social Media Mastery",
      icon: Smartphone,
      color: "bg-pink-500/10 text-pink-600",
      items: [
        "Profile setup & optimization",
        "30 posts/month content creation",
        "Specialty-focused creatives",
        "Stories & reels production",
        "Community management",
        "Hashtag strategy",
      ],
    },
    {
      title: "Video Production",
      icon: Video,
      color: "bg-purple-500/10 text-purple-600",
      items: [
        "Doctor introduction videos",
        "Patient education content",
        "Procedure explainer videos",
        "Monthly reels & shorts",
        "Professional editing",
        "Thumbnail design",
      ],
    },
    {
      title: "YouTube Growth",
      icon: Youtube,
      color: "bg-red-500/10 text-red-600",
      items: [
        "Channel setup & branding",
        "SEO-optimized titles & tags",
        "Content calendar planning",
        "Subscriber growth campaigns",
        "Analytics & reporting",
        "Playlist organization",
      ],
    },
    {
      title: "Search Visibility",
      icon: Search,
      color: "bg-green-500/10 text-green-600",
      items: [
        "Google My Business optimization",
        "Local SEO strategy",
        "Keyword research & targeting",
        "On-page SEO optimization",
        "Citation building",
        "Map pack ranking",
      ],
    },
    {
      title: "Brand Identity",
      icon: Palette,
      color: "bg-orange-500/10 text-orange-600",
      items: [
        "Logo design & brand kit",
        "Visual style guidelines",
        "Print collateral design",
        "Digital asset library",
        "Consistent brand voice",
        "Marketing templates",
      ],
    },
    {
      title: "Patient Acquisition",
      icon: Users,
      color: "bg-cyan-500/10 text-cyan-600",
      items: [
        "Lead generation funnels",
        "Landing page creation",
        "Paid ads management",
        "Conversion optimization",
        "A/B testing",
        "ROI tracking",
      ],
    },
    {
      title: "Reputation Management",
      icon: Star,
      color: "bg-yellow-500/10 text-yellow-600",
      items: [
        "Review collection system",
        "Review response management",
        "Negative feedback handling",
        "Testimonial campaigns",
        "Rating improvement",
        "Online presence monitoring",
      ],
    },
  ];

  const additionalServices = [
    { icon: MessageCircle, label: "WhatsApp Business Setup" },
    { icon: TrendingUp, label: "Performance Analytics" },
    { icon: Calendar, label: "Content Calendar" },
    { icon: BarChart3, label: "Monthly Reports" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Complete Coverage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What Our Medical Digital Marketing{" "}
            <span className="text-gradient">Plan Covers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive 360° approach that covers every aspect of your digital presence—no gaps, no blind spots.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services Bar */}
        <div className="bg-gradient-primary rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                Plus These Essential Extras
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Included at no additional cost with every plan
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {additionalServices.map((service, index) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm"
                >
                  <service.icon className="w-4 h-4" />
                  {service.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Every plan is customized to your specialty, location, and growth goals.{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Schedule a consultation
            </a>{" "}
            to get your personalized plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanCoverageSection;
