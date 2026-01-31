import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import heroCareers from "@/assets/hero-careers.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

const openings = [
  {
    title: "Senior Digital Marketing Manager",
    department: "Marketing",
    location: "Mumbai",
    type: "Full-time",
    description: "Lead digital marketing strategies for our healthcare clients. 5+ years experience in digital marketing required."
  },
  {
    title: "Medical Content Writer",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling medical content that educates patients and builds trust. Healthcare background preferred."
  },
  {
    title: "Video Producer",
    department: "Creative",
    location: "Mumbai",
    type: "Full-time",
    description: "Produce high-quality medical videos including doctor introductions, patient education, and testimonials."
  },
  {
    title: "Social Media Specialist",
    department: "Marketing",
    location: "Delhi",
    type: "Full-time",
    description: "Manage social media accounts for healthcare clients. Experience in healthcare marketing is a plus."
  },
  {
    title: "SEO Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Optimize medical websites for search engines. Experience with local SEO and healthcare industry preferred."
  },
  {
    title: "Graphic Designer",
    department: "Creative",
    location: "Mumbai",
    type: "Full-time",
    description: "Create branded visuals for medical practices. Experience in healthcare design guidelines is a plus."
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family"
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual budget for courses, certifications, and conferences"
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Hybrid work options with flexible hours"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with regular team events"
  }
];

const Careers = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Careers at Transess | Join India's Leading Medical Marketing Agency</title>
        <meta name="description" content="Join Transess and help healthcare professionals reach more patients. Explore career opportunities in digital marketing, content, video production, and more." />
        <meta name="keywords" content="Transess careers, medical marketing jobs, healthcare digital marketing careers, marketing agency jobs India" />
        <link rel="canonical" href={`${BASE_URL}/careers`} />
        <meta property="og:title" content="Careers at Transess | Medical Marketing Agency" />
        <meta property="og:description" content="Join India's leading medical marketing agency and make an impact in healthcare." />
        <meta property="og:url" content={`${BASE_URL}/careers`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Transess" />
        <meta name="twitter:description" content="Join India's leading medical marketing agency." />
      </Helmet>
      <Navbar />
      <Breadcrumbs items={[{ label: "Careers" }]} />
      
      <PageHero
        badge="Careers"
        title="Join Our Mission to Transform Healthcare Marketing"
        description="Be part of a team that's helping healthcare professionals reach more patients and save more lives through effective digital marketing."
        backgroundImage={heroCareers}
        primaryCta={{ text: "View Open Positions", link: "#openings" }}
        secondaryCta={{ text: "Learn About Us", link: "/about" }}
      />

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Join Us?</h2>
            <p className="text-lg text-muted-foreground">More than a job—a chance to make a difference in healthcare.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Culture</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-background rounded-xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Mission-Driven Work</h3>
                <p className="text-muted-foreground">Every campaign we run, every website we build, helps doctors reach patients who need them. Your work directly impacts healthcare outcomes.</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Continuous Learning</h3>
                <p className="text-muted-foreground">Healthcare and digital marketing are always evolving. We invest in your growth with training, conferences, and certification opportunities.</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Collaborative Spirit</h3>
                <p className="text-muted-foreground">We believe the best ideas come from diverse perspectives. Cross-functional collaboration is encouraged at every level.</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Work-Life Balance</h3>
                <p className="text-muted-foreground">Flexible hours, remote work options, and a focus on results over hours. We trust you to deliver great work on your schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">Find your next opportunity with us.</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" asChild className="flex-shrink-0">
                    <Link to="/contact">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learn More About Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/about" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">About Us</h3>
              <p className="text-muted-foreground mb-4">Our story, values, and mission.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/case-studies" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Work</h3>
              <p className="text-muted-foreground mb-4">See the projects you'd work on.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                View Cases <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/testimonials" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Client Impact</h3>
              <p className="text-muted-foreground mb-4">Hear from the doctors we help.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Read Stories <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Send Your Resume</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
