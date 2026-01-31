import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Phone, Mail, User, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationFormBox = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill all fields",
        description: "Name, email and phone are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you!",
      description: "We'll contact you within 24 hours for your free consultation.",
    });
    
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left - Benefits */}
              <div className="bg-gradient-primary p-6 md:p-8 text-primary-foreground">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Get Your Free Consultation
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Discover how we can transform your practice's digital presence.
                </p>
                <div className="space-y-3">
                  {[
                    "Free 30-minute strategy call",
                    "Custom growth plan",
                    "No commitment required",
                    "Response within 24 hours",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-xs text-primary-foreground/70">Doctors</div>
                    </div>
                    <div className="w-px h-10 bg-primary-foreground/20" />
                    <div className="text-center">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-xs text-primary-foreground/70">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-11 h-12"
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
                      required
                    />
                  </div>

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
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationFormBox;
