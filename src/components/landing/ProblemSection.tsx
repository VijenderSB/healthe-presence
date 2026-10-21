import { AlertTriangle, Eye, Users, Shield, TrendingDown, MessageSquareOff } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Eye,
      title: "Hard to Find Online",
      description: "When accurate information about your practice isn't available online, patients can't easily find or verify it.",
    },
    {
      icon: MessageSquareOff,
      title: "Misinformation Spreads",
      description: "Without a factual voice online, patients may rely on unreliable sources for medical information.",
    },
    {
      icon: Shield,
      title: "Credentials Not Visible",
      description: "Patients value clear, verifiable information about your qualifications, registration and areas of practice.",
    },
    {
      icon: Users,
      title: "Fragmented Information",
      description: "Scattered or outdated listings make it harder for patients to reach the right department or service.",
    },
    {
      icon: TrendingDown,
      title: "Non-Compliant Content",
      description: "Testimonials, ratings and exaggerated claims now carry regulatory risk under NMC guidelines.",
    },
    {
      icon: AlertTriangle,
      title: "No Clear Digital Presence",
      description: "A factual, well-organised online presence helps patients understand the care you provide.",
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
            Why an Ethical{" "}
            <span className="text-accent">Digital Presence</span> Matters
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Many patients look online for health information before visiting a doctor. A clear,
            factual and NMC-compliant presence helps them find accurate information about your practice.
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
            Good healthcare communication is{" "}
            <span className="text-accent">factual</span>, respects patients, and stays{" "}
            <span className="text-accent">within professional ethics.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
