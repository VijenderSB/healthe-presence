import { TrendingUp, Search, Shield, Users } from "lucide-react";

const WhyDigitalSection = () => {
  const reasons = [
    {
      icon: Search,
      stat: "77%",
      title: "Patients Search Online First",
      description: "Before booking an appointment, the vast majority of patients research doctors online. Your digital presence is your first impression.",
    },
    {
      icon: Shield,
      stat: "94%",
      title: "Trust Online Reviews",
      description: "Patients trust online reviews as much as personal recommendations. A strong review profile directly impacts patient decisions.",
    },
    {
      icon: TrendingUp,
      stat: "3x",
      title: "Higher Patient Acquisition",
      description: "Doctors with optimized digital presence see up to 3x more new patient inquiries compared to those without.",
    },
    {
      icon: Users,
      stat: "60%",
      title: "Better Patient Retention",
      description: "Consistent digital engagement keeps patients connected to your practice, reducing churn to competitors.",
    },
  ];

  return (
    <section id="why-digital" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why Go Digital
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            The Numbers Don't Lie:{" "}
            <span className="text-gradient">Digital Is Essential</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            In the modern healthcare landscape, your online presence isn't optional—it's the foundation of patient trust and practice growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex gap-5 p-6 md:p-8 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {reason.stat}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-12">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Your Competitors Are Already Online
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-0">
              Every day you wait, another doctor in your specialty is building their digital presence, 
              attracting your potential patients, and establishing themselves as the go-to expert. 
              The question isn't whether to go digital—it's how quickly you can start.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default WhyDigitalSection;
