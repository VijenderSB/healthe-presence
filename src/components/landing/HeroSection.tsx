import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-doctor.jpg";
import ConsultationDialog from "./ConsultationDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const highlights = [
    "Website & Social Media",
    "Video Production",
    "Patient Acquisition",
  ];

  return (
    <section className="relative min-h-[70vh] pt-20 md:pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(70vh-6rem)]">
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8 py-12 lg:py-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              360° Medical Digital Marketing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Your Patients Are{" "}
              <span className="text-gradient">Searching Online.</span>{" "}
              Are They Finding <span className="text-secondary">You?</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Build trust before the first consultation. We help doctors, clinics & hospitals 
              create a powerful digital presence that attracts, converts, and retains patients.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="cta" size="xl" className="group" onClick={() => setDialogOpen(true)}>
                Book Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch How It Works
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    Dr
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">500+</span>{" "}
                <span className="text-muted-foreground">doctors trust us</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg">
              {/* Main Card */}
              <div className="relative z-10 bg-card rounded-2xl shadow-elevated p-6 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <span className="text-3xl">🩺</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Dr. Sarah Mitchell</h3>
                    <p className="text-sm text-muted-foreground">Cardiologist • New York</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">New Patients (This Month)</span>
                    <span className="font-semibold text-primary">+127</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-primary rounded-full" />
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-muted-foreground">Online Rating</span>
                    <span className="font-semibold text-foreground">⭐ 4.9/5</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-card p-4 border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg">📈</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">+340%</p>
                    <p className="text-xs text-muted-foreground">Visibility</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-card rounded-xl shadow-card p-4 border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-lg">🎥</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">50K</p>
                    <p className="text-xs text-muted-foreground">Video Views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
