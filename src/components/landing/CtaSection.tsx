import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            Get Started
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6">
            Build Your Ethical{" "}
            <span className="text-accent">Digital Presence</span>
          </h2>

          <p className="text-xl text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">
            Book a free, no-obligation strategy session to see how an NMC-compliant digital
            presence can help patients find accurate information about your practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Book Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-light" size="xl" className="group">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-secondary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              30-minute strategy session
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              Custom digital presence plan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
