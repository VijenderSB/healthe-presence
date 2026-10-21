import { Award, Users, Video, Target, HeartHandshake, BarChart3 } from "lucide-react";

const WhyUsSection = () => {
  const differentiators = [
    {
      icon: HeartHandshake,
      title: "Medical Marketing Specialists",
      description: "We exclusively serve healthcare. We understand medical ethics, data privacy (DPDP Act), and what patients really look for.",
    },
    {
      icon: Video,
      title: "Video Production Experts",
      description: "In-house video team specialized in medical content. From doctor intros to clear procedure explainers.",
    },
    {
      icon: Target,
      title: "NMC-Compliant Approach",
      description: "Every website, profile and campaign is built to be factual, verifiable and aligned with NMC ethical advertising guidelines.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your personal account manager, content creator, and strategist—all focused on your digital presence.",
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description: "Monthly reports showing exactly what we did, what worked, and what's next. No black-box marketing.",
    },
    {
      icon: Award,
      title: "Healthcare Focus",
      description: "We work only with doctors, clinics and hospitals, so every strategy fits the realities of medical practice.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            The <span className="text-gradient">Medical Marketing</span> Team That Does It Ethically
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not a generic agency. We're healthcare marketing specialists who understand your unique challenges and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-card shadow-soft border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitments Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 rounded-2xl bg-card shadow-card border border-border">
          {[
            { value: "Factual", label: "Verifiable Content" },
            { value: "No Testimonials", label: "No Patient Reviews or Ratings" },
            { value: "Transparent", label: "Clear Reporting" },
            { value: "NMC-Aligned", label: "Ethical Advertising" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-2xl font-heading font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
