import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, Video, Star, Users, MessageCircle, Brain } from "lucide-react";

const SolutionSection = () => {
  const pillars = [
    { icon: Globe, label: "Website" },
    { icon: Smartphone, label: "Social Media" },
    { icon: Video, label: "Video" },
    { icon: Brain, label: "GEO (AI)" },
    { icon: Star, label: "Branding" },
    { icon: Users, label: "Education" },
    { icon: MessageCircle, label: "Engagement" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-primary rounded-3xl p-8 md:p-12">
              {/* Center Content */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-foreground/20 mb-6">
                  <span className="text-4xl">🏥</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
                  360° Medical Marketing Ecosystem
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Everything you need to manage an ethical, compliant digital presence, all in one place.
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-3 gap-4">
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.label}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  >
                    <pillar.icon className="w-6 h-6 text-primary-foreground" />
                    <span className="text-xs font-medium text-primary-foreground/90">
                      {pillar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 inset-0 bg-gradient-primary/20 rounded-3xl blur-2xl translate-y-4" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              One Partner. <span className="text-gradient">Complete Solution.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop juggling multiple agencies. Our 360° medical digital marketing ecosystem
              handles everything—from a clear, factual website to ongoing patient communication—so
              you can focus on what matters most: practicing medicine.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Make accurate information about your practice easy to find",
                "Share factual, educational content that builds trust",
                "Stay connected with patients through compliant communication",
                "Present your credentials and services clearly and ethically",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
