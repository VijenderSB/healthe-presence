import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Bell, Heart, Calendar, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: MessageSquare,
    title: "Automated Communication",
    description: "SMS, email, and WhatsApp automation for appointment reminders, follow-ups, and health tips."
  },
  {
    icon: Bell,
    title: "Appointment Reminders",
    description: "Reduce no-shows with automated reminders across multiple channels."
  },
  {
    icon: Heart,
    title: "Patient Loyalty Programs",
    description: "Build lasting relationships with rewards, referral programs, and special offers."
  },
  {
    icon: Calendar,
    title: "Follow-up Systems",
    description: "Automated post-visit follow-ups to ensure patient satisfaction and continuity of care."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Create patient communities through newsletters, health tips, and educational content."
  },
  {
    icon: Shield,
    title: "Reputation Management",
    description: "Encourage reviews, respond to feedback, and build a stellar online reputation."
  }
];

const PatientEngagement = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-500/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium mb-6">
              Patient Engagement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Retain Patients & Build Lasting Relationships
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete patient retention system with engagement, communication, and trust-building tools that keep patients coming back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Boost Retention</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">See Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Engagement Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep patients engaged and build loyalty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40%", label: "Increase in Retention" },
              { value: "60%", label: "Fewer No-Shows" },
              { value: "3x", label: "More Referrals" },
              { value: "90%", label: "Patient Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Improve Patient Retention?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's build a patient engagement system that keeps your practice thriving.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PatientEngagement;
