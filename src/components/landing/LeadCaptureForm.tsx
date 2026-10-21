import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Phone, Mail, User, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/submitLead";

const LeadCaptureForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    message: "",
    botcheck: "", // honeypot — hidden from humans, bots fill it
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name, email and phone are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({ ...formData, source: "Lead Capture Form" });
      toast({
        title: "Thank you for your inquiry!",
        description: "Our team will contact you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", clinic: "", message: "", botcheck: "" });
    } catch (error) {
      console.error("Lead submission failed:", error);
      toast({
        title: "Something went wrong",
        description:
          error instanceof Error ? error.message : "Please try again, or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Free 30-minute strategy consultation",
    "Custom, NMC-compliant digital presence plan",
    "No commitment required",
    "Response within 24 hours",
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Build an <span className="text-gradient">Ethical</span> Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free consultation with our medical marketing team.
              We'll review your current digital presence and outline an NMC-compliant plan.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 p-4 rounded-xl bg-card border border-border">
              <div className="text-center">
                <div className="text-base font-heading font-bold text-primary">NMC-Compliant</div>
                <div className="text-xs text-muted-foreground">Ethical Advertising</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-base font-heading font-bold text-primary">Factual</div>
                <div className="text-xs text-muted-foreground">No Testimonials or Ratings</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-base font-heading font-bold text-primary">24hr</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8 border border-border">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Request Free Consultation
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-11 h-12"
                  maxLength={100}
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-11 h-12"
                  maxLength={255}
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-11 h-12"
                  maxLength={20}
                  required
                />
              </div>

              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="clinic"
                  placeholder="Clinic/Hospital Name"
                  value={formData.clinic}
                  onChange={handleChange}
                  className="pl-11 h-12"
                  maxLength={150}
                />
              </div>

              <Textarea
                name="message"
                placeholder="Tell us about your practice and goals..."
                value={formData.message}
                onChange={handleChange}
                className="min-h-[100px] resize-none"
                maxLength={1000}
              />

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our Privacy Policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
