import { AlertTriangle, Eye, Users, Shield, TrendingDown, MessageSquareOff } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Eye,
      title: "Low Online Visibility",
      description: "Patients search online first. If they can't find you, they'll find your competitor.",
    },
    {
      icon: Users,
      title: "Rising Competition",
      description: "More doctors are going digital. Those without an online presence get left behind.",
    },
    {
      icon: MessageSquareOff,
      title: "Misinformation Spreads",
      description: "Without your voice online, patients rely on unreliable sources for medical information.",
    },
    {
      icon: Shield,
      title: "Trust Deficit",
      description: "No online reviews or content means patients question your credibility before walking in.",
    },
    {
      icon: TrendingDown,
      title: "Poor Reputation",
      description: "A few negative reviews without positive content can destroy years of reputation.",
    },
    {
      icon: AlertTriangle,
      title: "Patient Leakage",
      description: "Existing patients leave when competitors engage them better online.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            The Reality Check
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6">
            What Happens When Doctors{" "}
            <span className="text-accent">Ignore Digital?</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            In today's world, 77% of patients search online before choosing a healthcare provider. 
            Without a strong digital presence, you're invisible to the majority of potential patients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-secondary-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-accent/10 border border-accent/20 text-center">
          <p className="text-xl md:text-2xl font-heading font-semibold text-secondary-foreground">
            "Every day without digital presence is a day of{" "}
            <span className="text-accent">lost patients</span> and{" "}
            <span className="text-accent">lost revenue.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
