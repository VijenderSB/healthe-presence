import { TrendingUp, Search, Shield, Users } from "lucide-react";

const WhyDigitalSection = () => {
  const reasons = [
    {
      icon: Search,
      stat: "Findable",
      title: "Easy to Find Online",
      description: "Many patients look online before visiting a doctor. A clear, factual presence helps them find accurate information about your practice.",
    },
    {
      icon: Shield,
      stat: "Credible",
      title: "Verifiable Credentials",
      description: "Transparently sharing your qualifications, registration and areas of practice helps patients make informed choices.",
    },
    {
      icon: TrendingUp,
      stat: "Educational",
      title: "Public Health Education",
      description: "Factual, non-promotional health content supports patients and reflects well on your professional standing.",
    },
    {
      icon: Users,
      stat: "Connected",
      title: "Ongoing Communication",
      description: "Compliant reminders and follow-ups keep patients informed and connected to your practice.",
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
            Why an Ethical{" "}
            <span className="text-gradient">Digital Presence</span> Helps
          </h2>
          <p className="text-lg text-muted-foreground">
            In modern healthcare, a clear and factual online presence helps patients find
            accurate information — within professional ethics and NMC guidelines.
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
                <div className="text-2xl font-heading font-bold text-primary mb-2">
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
              Compliant by Design
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-0">
              We build every website, profile and piece of content to be factual, verifiable and
              aligned with NMC ethical advertising guidelines — no testimonials, no ratings,
              no exaggerated claims. Just a clear, honest digital presence.
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
