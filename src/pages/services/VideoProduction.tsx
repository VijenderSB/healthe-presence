import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Video, Clapperboard, Mic, Film, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const videoTypes = [
  {
    icon: Mic,
    title: "Doctor Introduction Videos",
    description: "Professional introduction videos that showcase your expertise, personality, and approach to patient care."
  },
  {
    icon: Clapperboard,
    title: "Explainer Videos",
    description: "Educational content that explains procedures, treatments, and medical concepts in easy-to-understand language."
  },
  {
    icon: Play,
    title: "Patient Education",
    description: "Informative videos that help patients understand their conditions and treatment options."
  },
  {
    icon: Film,
    title: "Reels & Short-Form",
    description: "Engaging short-form content optimized for Instagram Reels, YouTube Shorts, and TikTok."
  },
  {
    icon: Sparkles,
    title: "Testimonial Videos",
    description: "Authentic patient success stories that build trust and credibility for your practice."
  },
  {
    icon: Video,
    title: "Facility Tours",
    description: "Virtual tours of your clinic or hospital that make patients feel comfortable before their visit."
  }
];

const VideoProduction = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary/20 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
              Medical Video Production
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Medical Videos That Connect with Patients
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From doctor introductions to patient education, we create compelling video content that builds trust and drives patient engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">View Samples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Videos We Create
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive video production services tailored for healthcare professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTypes.map((type, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Production Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your goals and vision" },
              { step: "02", title: "Scripting", desc: "Craft compelling storylines" },
              { step: "03", title: "Production", desc: "Professional filming at your location" },
              { step: "04", title: "Delivery", desc: "Edit, optimize, and deliver" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create videos that showcase your expertise and connect with patients.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VideoProduction;
