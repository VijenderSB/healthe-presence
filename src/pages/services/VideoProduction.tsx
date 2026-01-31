import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import { Button } from "@/components/ui/button";
import { Video, Clapperboard, Mic, Film, Play, Sparkles, ArrowRight, Users, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-video.jpg";

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
      
      <PageHero
        badge="Medical Video Production"
        title="Professional Medical Videos That Connect with Patients"
        description="From doctor introductions to patient education, we create compelling video content that builds trust and drives patient engagement."
        backgroundImage={heroVideo}
        primaryCta={{ text: "Start Your Project", link: "/contact" }}
        secondaryCta={{ text: "View Samples", link: "/case-studies" }}
      />

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

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Videos Produced" },
              { value: "85%", label: "Increase in Trust" },
              { value: "10M+", label: "Views Generated" },
              { value: "4K", label: "Ultra HD Quality" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Maximize Your Video Content
            </h2>
            <p className="text-lg text-muted-foreground">
              Get more value from your videos with these services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/services/youtube-management" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Youtube className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">YouTube Management</h3>
              <p className="text-muted-foreground mb-4">Build a YouTube channel that grows your authority.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/social-media" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Social Media</h3>
              <p className="text-muted-foreground mb-4">Share your videos across all social platforms.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/website-design" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Website Integration</h3>
              <p className="text-muted-foreground mb-4">Embed videos on your website for maximum impact.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/testimonials">View Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VideoProduction;
